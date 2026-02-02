import * as ts from 'typescript';
import transformer from '../src/index.js';

const sourceCode = `
const element = <div @click={() => console.log('clicked')}>Click me</div>;
`;

// Create a TypeScript program
const compilerOptions: ts.CompilerOptions = {
  target: ts.ScriptTarget.ESNext,
  module: ts.ModuleKind.ESNext,
  jsx: ts.JsxEmit.ReactJSX,
  jsxImportSource: 'kt.js',
};

// Create a source file
const sourceFile = ts.createSourceFile(
  'test.tsx',
  sourceCode,
  ts.ScriptTarget.ESNext,
  true
);

// Transform the source file
const transformed = ts.transform(sourceFile, [transformer()]);

const printer = ts.createPrinter();
const output = printer.printNode(ts.EmitHint.Unspecified, transformed.transformed[0], sourceFile);

console.log('Original code:');
console.log(sourceCode);
console.log('\nTransformed code:');
console.log(output);

// Check if @click was transformed to on:click
if (output.includes('on:click')) {
  console.log('\n✅ Transformation successful! @click was converted to on:click.');
} else {
  console.error('\n❌ Transformation failed! @click was not converted.');
  process.exit(1);
}