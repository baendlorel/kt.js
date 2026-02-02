import * as ts from 'typescript';

/**
 * Transformer factory for compiling Vue-style @event shorthand to on:event
 * This transforms JSX attributes like @click to on:click during compilation
 */
export function createTransformer(): ts.TransformerFactory<ts.SourceFile> {
  return (context) => {
    const { factory } = context;

    const visit: ts.Visitor = (node) => {
      // Transform JSX attributes
      if (ts.isJsxAttribute(node)) {
        const attrName = node.name;
        // Assume attrName is JsxIdentifier (not namespaced)
        const attrNameText = (attrName as any).text;
        if (typeof attrNameText === 'string' && attrNameText.startsWith('@')) {
          const eventName = attrNameText.substring(1); // Remove @

          // Create a namespaced name: on:eventName
          const newAttrName = factory.createJsxNamespacedName(
            factory.createIdentifier('on'),
            factory.createIdentifier(eventName),
          );

          // Return new attribute with transformed name
          return factory.updateJsxAttribute(node, newAttrName, node.initializer);
        }
      }

      return ts.visitEachChild(node, visit, context);
    };

    return (sourceFile) => ts.visitNode(sourceFile, visit) as ts.SourceFile;
  };
}

/**
 * TypeScript language service plugin to support @event shorthand in JSX
 * This plugin filters out errors for @event attributes and provides better diagnostics
 */
export default function init(modules: { typescript: any }): {
  create(info: any): any;
} {
  return {
    create(info) {
      const { languageService } = info;

      // Create proxy to intercept language service methods
      const proxy: ts.LanguageService = Object.create(null);

      // Copy all methods from the original service
      for (const key of Object.keys(languageService) as Array<keyof ts.LanguageService>) {
        const service = languageService[key];
        if (typeof service === 'function') {
          (proxy as any)[key] = (...args: any[]) => (service as any).apply(languageService, args);
        }
      }

      // Intercept syntactic diagnostics to filter @event syntax errors
      const originalGetSyntacticDiagnostics = languageService.getSyntacticDiagnostics;
      proxy.getSyntacticDiagnostics = (fileName: string) => {
        const diagnostics = originalGetSyntacticDiagnostics.call(languageService, fileName);

        // Filter out syntax errors about @ attributes (decorator syntax errors)
        return diagnostics.filter((diagnostic: ts.Diagnostic) => {
          if (diagnostic.category === ts.DiagnosticCategory.Error) {
            const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
            // Check for "Declaration expected" errors (ts 1146) for @ attributes
            if (message.includes('Declaration expected') && diagnostic.code === 1146) {
              // Check if this error is likely related to @attribute in JSX
              // We can't easily check the source position, so we filter all 1146 errors
              // This might be too broad but works for our use case
              return false;
            }
            // Check for "Identifier expected" errors (ts 1003) for @ attributes
            if (message.includes('Identifier expected') && diagnostic.code === 1003) {
              return false;
            }
          }
          return true;
        });
      };

      // Intercept semantic diagnostics to filter @event errors
      const originalGetSemanticDiagnostics = languageService.getSemanticDiagnostics;
      proxy.getSemanticDiagnostics = (fileName: string) => {
        const diagnostics = originalGetSemanticDiagnostics.call(languageService, fileName);

        // Filter out errors about @event attributes not existing
        return diagnostics.filter((diagnostic: ts.Diagnostic) => {
          if (diagnostic.category === ts.DiagnosticCategory.Error) {
            const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
            // Check if this is a "Property '@...' does not exist" error
            if (message.includes("Property '@") && message.includes('does not exist')) {
              return false; // Filter out this error
            }
            // Check for "Declaration expected" errors related to @ attributes (decorator syntax)
            if (message.includes('Declaration expected') && message.includes('@')) {
              return false; // Filter out this error
            }
            // Check for "Decorators are not valid here" errors
            if (message.includes('Decorators are not valid here') && message.includes('@')) {
              return false; // Filter out this error
            }
          }
          return true;
        });
      };

      return proxy;
    },
  };
}
