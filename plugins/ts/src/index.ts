import type tsModule from 'typescript/lib/tsserverlibrary';
import { findInnermostNode, normalizePosition } from './ast';
import {
  createAliasCompletionEntries,
  createBindingTypeMap,
  createMemberCompletionEntries,
  getMemberCompletionContext,
  mergeCompletionInfo,
} from './completion';
import { DIAGNOSTIC_CANNOT_FIND_NAME, DIAGNOSTIC_UNUSED_LOCAL } from './constants';
import { isJsxLikeFile, resolveConfig } from './config';
import { getDraftEscapeDiagnostics } from './draft-diagnostics';
import { isValidIdentifier } from './identifiers';
import { addKForSemanticClassifications, addKForSyntacticClassifications } from './kfor-highlighting';
import {
  getKForDefinitionAndBoundSpan,
  getKForQuickInfoAtPosition,
  getKForRenameInfo,
  getKForRenameLocations,
} from './quickinfo';
import {
  collectBindingsAtPosition,
  collectUsedSourceDeclarationSpans,
  getFileAnalysis,
  getKForMemberDiagnostics,
  isSuppressed,
} from './scope-analysis';
import { resolveExpressionTypesFromText } from './type-resolution';
import type { KForPluginConfig } from './types';

function init(modules: { typescript: typeof tsModule }) {
  const ts = modules.typescript;

  function create(info: tsModule.server.PluginCreateInfo): tsModule.LanguageService {
    const languageService = info.languageService;
    const config = resolveConfig(info.config as KForPluginConfig | undefined);
    const proxy = Object.create(null) as tsModule.LanguageService;

    const filterKForDiagnostics = (
      fileName: string,
      diagnostics: readonly tsModule.Diagnostic[],
    ): readonly tsModule.Diagnostic[] => {
      if (!isJsxLikeFile(fileName)) {
        return diagnostics;
      }

      const program = languageService.getProgram();
      const sourceFile = program?.getSourceFile(fileName);
      const checker = program?.getTypeChecker();
      if (!sourceFile || !checker) {
        return diagnostics;
      }

      const analysis = getFileAnalysis(fileName, languageService, ts, config);
      const usedSourceDeclarationSpans = analysis
        ? collectUsedSourceDeclarationSpans(sourceFile, checker, ts, config)
        : undefined;

      return analysis?.scopes.length
        ? diagnostics.filter((diagnostic) => {
            if (diagnostic.start == null || diagnostic.length == null) {
              return true;
            }

            if (diagnostic.code === DIAGNOSTIC_CANNOT_FIND_NAME) {
              const name = analysis.sourceFile.text.slice(diagnostic.start, diagnostic.start + diagnostic.length).trim();
              if (!isValidIdentifier(name)) {
                return true;
              }

              return !isSuppressed(diagnostic.start, name, analysis.scopes);
            }

            if (diagnostic.code === DIAGNOSTIC_UNUSED_LOCAL && usedSourceDeclarationSpans) {
              return !usedSourceDeclarationSpans.has(`${fileName}:${diagnostic.start}:${diagnostic.length}`);
            }

            return true;
          })
        : diagnostics;
    };

    for (const key of Object.keys(languageService) as Array<keyof tsModule.LanguageService>) {
      const member = languageService[key];
      (proxy as any)[key] = (...args: unknown[]) => (member as any).apply(languageService, args);
    }

    proxy.getSemanticDiagnostics = (fileName: string) => {
      const filteredDiagnostics = filterKForDiagnostics(fileName, languageService.getSemanticDiagnostics(fileName));
      const program = languageService.getProgram();
      const sourceFile = program?.getSourceFile(fileName);
      const checker = program?.getTypeChecker();
      if (!sourceFile || !checker) {
        return filteredDiagnostics as tsModule.Diagnostic[];
      }

      const draftDiagnostics = getDraftEscapeDiagnostics(sourceFile, checker, ts);
      const analysis = getFileAnalysis(fileName, languageService, ts, config);
      const kforMemberDiagnostics = analysis?.scopes.length
        ? getKForMemberDiagnostics(sourceFile, checker, analysis.scopes, ts)
        : [];
      if (draftDiagnostics.length === 0 && kforMemberDiagnostics.length === 0) {
        return filteredDiagnostics;
      }

      return [...ts.sortAndDeduplicateDiagnostics([...filteredDiagnostics, ...kforMemberDiagnostics, ...draftDiagnostics])];
    };

    proxy.getSuggestionDiagnostics = (fileName: string) =>
      filterKForDiagnostics(fileName, languageService.getSuggestionDiagnostics(fileName)) as tsModule.DiagnosticWithLocation[];

    proxy.getEncodedSemanticClassifications = (
      fileName: string,
      span: tsModule.TextSpan,
      format?: tsModule.SemanticClassificationFormat,
    ) => {
      const classifications = languageService.getEncodedSemanticClassifications(fileName, span, format);
      if (!isJsxLikeFile(fileName)) {
        return classifications;
      }

      const sourceFile = languageService.getProgram()?.getSourceFile(fileName);
      if (!sourceFile) {
        return classifications;
      }

      return addKForSemanticClassifications(classifications, sourceFile, span, format, ts, config);
    };

    proxy.getEncodedSyntacticClassifications = (fileName: string, span: tsModule.TextSpan) => {
      const classifications = languageService.getEncodedSyntacticClassifications(fileName, span);
      if (!isJsxLikeFile(fileName)) {
        return classifications;
      }

      const sourceFile = languageService.getProgram()?.getSourceFile(fileName);
      if (!sourceFile) {
        return classifications;
      }

      return addKForSyntacticClassifications(classifications, sourceFile, span, ts, config);
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

      const pluginQuickInfo = getKForQuickInfoAtPosition(analysis, position, ts, config);
      return pluginQuickInfo || quickInfo;
    };

    proxy.getDefinitionAndBoundSpan = (fileName: string, position: number) => {
      const base = languageService.getDefinitionAndBoundSpan(fileName, position);
      if (!isJsxLikeFile(fileName)) {
        return base;
      }

      const analysis = getFileAnalysis(fileName, languageService, ts, config);
      if (!analysis) {
        return base;
      }

      const pluginDefinition = getKForDefinitionAndBoundSpan(analysis, position, ts, config);
      return pluginDefinition || base;
    };

    proxy.getDefinitionAtPosition = (fileName: string, position: number) => {
      const base = languageService.getDefinitionAtPosition(fileName, position);
      if (!isJsxLikeFile(fileName)) {
        return base;
      }

      const analysis = getFileAnalysis(fileName, languageService, ts, config);
      if (!analysis) {
        return base;
      }

      const pluginDefinition = getKForDefinitionAndBoundSpan(analysis, position, ts, config);
      return pluginDefinition?.definitions || base;
    };

    proxy.getRenameInfo = (
      fileName: string,
      position: number,
      preferences?: tsModule.UserPreferences,
    ): tsModule.RenameInfo => {
      const base = languageService.getRenameInfo(fileName, position, preferences);
      if (!isJsxLikeFile(fileName)) {
        return base;
      }

      const analysis = getFileAnalysis(fileName, languageService, ts, config);
      if (!analysis) {
        return base;
      }

      const pluginRenameInfo = getKForRenameInfo(analysis, position, ts, config);
      if (pluginRenameInfo) {
        return pluginRenameInfo;
      }

      const pluginDefinition = getKForDefinitionAndBoundSpan(analysis, position, ts, config);
      const symbolDefinition = pluginDefinition?.definitions?.[0];
      if (!pluginDefinition || !symbolDefinition) {
        return base;
      }

      const symbolRenameInfo = languageService.getRenameInfo(symbolDefinition.fileName, symbolDefinition.textSpan.start, preferences);
      if (!symbolRenameInfo.canRename) {
        return symbolRenameInfo;
      }

      return {
        ...symbolRenameInfo,
        triggerSpan: pluginDefinition.textSpan,
      };
    };

    proxy.findRenameLocations = (
      fileName: string,
      position: number,
      findInStrings: boolean,
      findInComments: boolean,
      preferencesOrProvidePrefixAndSuffixTextForRename?: tsModule.UserPreferences | boolean,
    ): readonly tsModule.RenameLocation[] | undefined => {
      const base = (languageService.findRenameLocations as any)(
        fileName,
        position,
        findInStrings,
        findInComments,
        preferencesOrProvidePrefixAndSuffixTextForRename,
      ) as readonly tsModule.RenameLocation[] | undefined;
      if (!isJsxLikeFile(fileName)) {
        return base;
      }

      const analysis = getFileAnalysis(fileName, languageService, ts, config);
      if (!analysis) {
        return base;
      }

      const pluginRenameLocations = getKForRenameLocations(analysis, position, ts, config);
      if (pluginRenameLocations) {
        return pluginRenameLocations;
      }

      const pluginDefinition = getKForDefinitionAndBoundSpan(analysis, position, ts, config);
      const symbolDefinition = pluginDefinition?.definitions?.[0];
      if (!pluginDefinition || !symbolDefinition) {
        return base;
      }

      const symbolLocations =
        ((languageService.findRenameLocations as any)(
          symbolDefinition.fileName,
          symbolDefinition.textSpan.start,
          findInStrings,
          findInComments,
          preferencesOrProvidePrefixAndSuffixTextForRename,
        ) as readonly tsModule.RenameLocation[] | undefined) || [];

      const keySet = new Set<string>();
      const result: tsModule.RenameLocation[] = [];
      for (let i = 0; i < symbolLocations.length; i++) {
        const location = symbolLocations[i];
        const key = `${location.fileName}:${location.textSpan.start}:${location.textSpan.length}`;
        if (keySet.has(key)) {
          continue;
        }
        keySet.add(key);
        result.push(location);
      }

      const tokenKey = `${fileName}:${pluginDefinition.textSpan.start}:${pluginDefinition.textSpan.length}`;
      if (!keySet.has(tokenKey)) {
        result.push({
          fileName,
          textSpan: pluginDefinition.textSpan,
        });
      }

      return result;
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
