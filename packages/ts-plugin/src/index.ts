import type tsModule from 'typescript/lib/tsserverlibrary';
import { findIdentifierAtPosition, findInnermostNode, normalizePosition } from './ast';
import {
  createAliasCompletionEntries,
  createBindingTypeMap,
  createMemberCompletionEntries,
  getMemberCompletionContext,
  mergeCompletionInfo,
} from './completion';
import { DIAGNOSTIC_CANNOT_FIND_NAME } from './constants';
import { isJsxLikeFile, resolveConfig } from './config';
import { isValidIdentifier } from './identifiers';
import { collectBindingsAtPosition, getFileAnalysis, isSuppressed } from './scope-analysis';
import { formatTypeList, resolveExpressionTypesFromText } from './type-resolution';
import type { KForPluginConfig } from './types';

function init(modules: { typescript: typeof tsModule }) {
  const ts = modules.typescript;

  function create(info: tsModule.server.PluginCreateInfo): tsModule.LanguageService {
    const languageService = info.languageService;
    const config = resolveConfig(info.config as KForPluginConfig | undefined);
    const proxy = Object.create(null) as tsModule.LanguageService;

    for (const key of Object.keys(languageService) as Array<keyof tsModule.LanguageService>) {
      const member = languageService[key];
      (proxy as any)[key] = (...args: unknown[]) => (member as any).apply(languageService, args);
    }

    proxy.getSemanticDiagnostics = (fileName: string) => {
      const diagnostics = languageService.getSemanticDiagnostics(fileName);
      if (!isJsxLikeFile(fileName)) {
        return diagnostics;
      }

      const analysis = getFileAnalysis(fileName, languageService, ts, config);
      if (!analysis) {
        return diagnostics;
      }

      return diagnostics.filter((diagnostic) => {
        if (
          diagnostic.code !== DIAGNOSTIC_CANNOT_FIND_NAME ||
          diagnostic.start == null ||
          diagnostic.length == null
        ) {
          return true;
        }

        const name = analysis.sourceFile.text.slice(diagnostic.start, diagnostic.start + diagnostic.length).trim();
        if (!isValidIdentifier(name)) {
          return true;
        }

        return !isSuppressed(diagnostic.start, name, analysis.scopes);
      });
    };

    proxy.getQuickInfoAtPosition = (fileName: string, position: number) => {
      const quickInfo = languageService.getQuickInfoAtPosition(fileName, position);
      if (!isJsxLikeFile(fileName)) {
        return quickInfo;
      }

      const analysis = getFileAnalysis(fileName, languageService, ts, config);
      if (!analysis) {
        return quickInfo;
      }

      const identifier = findIdentifierAtPosition(analysis.sourceFile, position, ts);
      if (!identifier) {
        return quickInfo;
      }

      const bindings = collectBindingsAtPosition(position, analysis.scopes);
      const binding = bindings.get(identifier.text);
      if (!binding) {
        return quickInfo;
      }

      const typeText = formatTypeList(binding.types, analysis.checker, identifier, ts);
      return {
        kind: ts.ScriptElementKind.localVariableElement,
        kindModifiers: '',
        textSpan: {
          start: identifier.getStart(analysis.sourceFile),
          length: identifier.getWidth(analysis.sourceFile),
        },
        displayParts: [{ text: `(k-for) ${binding.name}: ${typeText}`, kind: 'text' }],
      };
    };

    proxy.getCompletionsAtPosition = (
      fileName: string,
      position: number,
      options: tsModule.GetCompletionsAtPositionOptions | undefined,
      formattingSettings: tsModule.FormatCodeSettings | undefined,
    ) => {
      const completions = languageService.getCompletionsAtPosition(fileName, position, options, formattingSettings);
      if (!isJsxLikeFile(fileName)) {
        return completions;
      }

      const analysis = getFileAnalysis(fileName, languageService, ts, config);
      if (!analysis) {
        return completions;
      }

      const bindings = collectBindingsAtPosition(position, analysis.scopes);
      if (bindings.size === 0) {
        return completions;
      }

      const contextNode =
        findInnermostNode(analysis.sourceFile, normalizePosition(position, analysis.sourceFile), ts) ||
        analysis.sourceFile;
      const localBindings = createBindingTypeMap(bindings);
      const memberContext = getMemberCompletionContext(analysis.sourceFile.text, position);
      if (memberContext) {
        const receiverTypes = resolveExpressionTypesFromText(memberContext.receiver, {
          checker: analysis.checker,
          ts,
          scopeNode: contextNode,
          localBindings,
        });
        const memberEntries = createMemberCompletionEntries(
          receiverTypes,
          memberContext.prefix,
          analysis.checker,
          contextNode,
          ts,
        );
        if (memberEntries.length > 0) {
          return mergeCompletionInfo(completions, memberEntries, true);
        }
      }

      const aliasEntries = createAliasCompletionEntries(bindings, analysis.sourceFile.text, position, ts);
      if (aliasEntries.length > 0) {
        return mergeCompletionInfo(completions, aliasEntries, false);
      }

      return completions;
    };

    return proxy;
  }

  return { create };
}

export = init;
