import type tsModule from 'typescript/lib/tsserverlibrary';

export interface KForPluginConfig {
  forAttr?: string;
  ifAttr?: string;
  elseAttr?: string;
  elseIfAttr?: string;
  modelAttr?: string;
  htmlAttr?: string;
  allowOfKeyword?: boolean;
}

export interface ResolvedConfig {
  forAttr: string;
  ifAttr: string;
  elseAttr: string;
  elseIfAttr: string;
  modelAttr: string;
  htmlAttr: string;
  allowOfKeyword: boolean;
}

export interface KForBinding {
  name: string;
  types: tsModule.Type[];
}

export interface KForScope {
  start: number;
  end: number;
  bindings: KForBinding[];
}

export interface ParsedKForExpression {
  aliases: string[];
  source: string;
}

export interface TypeResolutionContext {
  checker: tsModule.TypeChecker;
  ts: typeof tsModule;
  scopeNode: tsModule.Node;
  localBindings?: ReadonlyMap<string, readonly tsModule.Type[]>;
}

export interface MemberCompletionContext {
  receiver: string;
  prefix: string;
}

export interface FileAnalysis {
  sourceFile: tsModule.SourceFile;
  checker: tsModule.TypeChecker;
  scopes: KForScope[];
}

export type JsxOpeningLikeElement = tsModule.JsxOpeningElement | tsModule.JsxSelfClosingElement;
