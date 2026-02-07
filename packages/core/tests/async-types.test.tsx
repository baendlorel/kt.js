import { describe, it, expect } from 'vitest';
import { KTAsync } from '../src/jsx/async.js';

describe('KTAsync type inference', () => {
  it('should infer props from component function', () => {
    // Component with specific props
    const MyComponent = async (props: {
      ref?: any;
      children?: any;
      name: string;
      age: number;
      'on:click'?: (e: MouseEvent) => void;
    }) => {
      const div = document.createElement('div');
      div.textContent = `${props.name} - ${props.age}`;
      return div;
    };

    // This should work - all required props provided
    const result1 = <KTAsync component={MyComponent} name="Alice" age={30} on:click={() => console.log('clicked')} />;

    expect(result1).toBeInstanceOf(Comment);

    // This should also work - component with no extra props
    const SimpleComponent = (): HTMLElement => {
      return document.createElement('div');
    };

    const result2 = <KTAsync component={SimpleComponent} />;
    expect(result2).toBeInstanceOf(HTMLElement);
  });

  it('should work with async components', async () => {
    const AsyncComponent = async (props: { ref?: any; children?: any; title: string }): Promise<HTMLElement> => {
      await new Promise((resolve) => setTimeout(resolve, 10));
      const div = document.createElement('div');
      div.textContent = props.title;
      return div;
    };

    const result = <KTAsync component={AsyncComponent} title="Test Title" />;
    expect(result).toBeInstanceOf(Comment);

    // Wait for async resolution
    await new Promise((resolve) => setTimeout(resolve, 20));
  });
});
