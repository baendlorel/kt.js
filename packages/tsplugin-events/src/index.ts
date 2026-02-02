import * as ts from 'typescript';

/**
 * TypeScript plugin factory for transforming Vue-style @event shorthand to on:event
 * This plugin converts JSX attributes like @click to on:click
 */
export default function (): ts.TransformerFactory<ts.SourceFile> {
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
            factory.createIdentifier(eventName)
          );

          // Return new attribute with transformed name
          return factory.updateJsxAttribute(
            node,
            newAttrName,
            node.initializer
          );
        }
      }

      return ts.visitEachChild(node, visit, context);
    };

    return (sourceFile) => ts.visitNode(sourceFile, visit) as ts.SourceFile;
  };
}