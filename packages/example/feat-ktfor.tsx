import { KTFor, KTHTMLElement } from '@ktjs/core';
import '@ktjs/core/jsx';

// Demo 1: Basic KTFor with simple list
function createBasicDemo() {
  const simpleList = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango'];

  const forElement = (
    <KTFor
      list={simpleList}
      map={(item, index) => (
        <div class="list-item">
          {index + 1}. {item}
        </div>
      )}
    />
  );

  return (
    <div class="demo-card">
      <h3>Basic KTFor</h3>
      <p>Simple list rendering with KTFor component</p>
      <div class="list-container">{forElement}</div>
    </div>
  );
}

// Demo 2: KTFor with key-based optimization
function createKeyedDemo() {
  interface Todo {
    id: number;
    text: string;
    done: boolean;
  }

  let todos: Todo[] = [
    { id: 1, text: 'Learn KT.js', done: true },
    { id: 2, text: 'Build an app', done: false },
    { id: 3, text: 'Deploy to production', done: false },
  ];

  const forElement = (
    <KTFor
      list={todos}
      key={(item) => item.id}
      map={(item) => (
        <div class={`todo-item ${item.done ? 'done' : ''}`}>
          <input
            type="checkbox"
            checked={item.done}
            on:change={(e) => {
              item.done = (e.target as HTMLInputElement).checked;
              forElement.redraw({ list: [...todos] });
            }}
          />
          <span class="todo-text">{item.text}</span>
          <button
            class="delete-btn"
            on:click={() => {
              todos = todos.filter((t) => t.id !== item.id);
              forElement.redraw({ list: todos });
            }}
          >
            ✕
          </button>
        </div>
      )}
    />
  );

  let nextId = 4;
  const input = (<input type="text" placeholder="Add new todo..." />) as KTHTMLElement<HTMLInputElement>;

  const addButton = (
    <button
      class="add-btn"
      on:click={() => {
        if (input.value.trim()) {
          todos = [...todos, { id: nextId++, text: input.value.trim(), done: false }];
          forElement.redraw({ list: todos });
          input.value = '';
        }
      }}
    >
      Add Todo
    </button>
  );

  return (
    <div class="demo-card">
      <h3>KTFor with Key Optimization</h3>
      <p>Todo list with add/remove/toggle - DOM nodes are reused based on key</p>
      <div class="input-group">
        {input}
        {addButton}
      </div>
      <div class="todo-list">{forElement}</div>
    </div>
  );
}

// Demo 3: Dynamic list updates
function createDynamicDemo() {
  let numbers = [1, 2, 3, 4, 5];

  const forElement = (
    <KTFor
      list={numbers}
      key={(item) => item}
      map={(item) => (
        <div class="number-item" style={`background-color: hsl(${item * 40}, 70%, 85%)`}>
          {item}
        </div>
      )}
    />
  );

  const shuffleBtn = (
    <button
      on:click={() => {
        numbers = numbers.sort(() => Math.random() - 0.5);
        forElement.redraw({ list: [...numbers] });
      }}
    >
      Shuffle
    </button>
  );

  const reverseBtn = (
    <button
      on:click={() => {
        numbers = numbers.reverse();
        forElement.redraw({ list: [...numbers] });
      }}
    >
      Reverse
    </button>
  );

  const addBtn = (
    <button
      on:click={() => {
        const newNum = Math.max(...numbers) + 1;
        numbers = [...numbers, newNum];
        forElement.redraw({ list: numbers });
      }}
    >
      Add Number
    </button>
  );

  const removeBtn = (
    <button
      on:click={() => {
        if (numbers.length > 0) {
          numbers = numbers.slice(0, -1);
          forElement.redraw({ list: numbers });
        }
      }}
    >
      Remove Last
    </button>
  );

  return (
    <div class="demo-card">
      <h3>Dynamic List Operations</h3>
      <p>Key-based diffing ensures minimal DOM operations</p>
      <div class="button-group">
        {shuffleBtn}
        {reverseBtn}
        {addBtn}
        {removeBtn}
      </div>
      <div class="number-grid">{forElement}</div>
    </div>
  );
}

// Demo 5: Nested data
function createNestedDemo() {
  interface Category {
    id: number;
    name: string;
    items: string[];
  }

  const categories: Category[] = [
    { id: 1, name: 'Fruits', items: ['Apple', 'Banana', 'Orange'] },
    { id: 2, name: 'Vegetables', items: ['Carrot', 'Broccoli', 'Spinach'] },
    { id: 3, name: 'Drinks', items: ['Water', 'Juice', 'Tea'] },
  ];

  const forElement = (
    <KTFor
      list={categories}
      key={(cat) => cat.id}
      map={(cat) => (
        <div class="category">
          <h4>{cat.name}</h4>
          <ul>
            {cat.items.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      )}
    />
  );

  return (
    <div class="demo-card">
      <h3>Nested Data</h3>
      <p>KTFor can render complex nested structures</p>
      <div class="category-grid">{forElement}</div>
    </div>
  );
}

// Main app with all demos
const app = (
  <div class="app-container">
    <header>
      <h1>KTFor Component Demo</h1>
      <p class="subtitle">
        Efficient list rendering with key-based DOM reuse - anchor comment node with <code>__kt_for_list__</code>
      </p>
    </header>

    <div class="demos-grid">
      {createBasicDemo()}
      {createKeyedDemo()}
      {createDynamicDemo()}
      {createNestedDemo()}
    </div>
  </div>
);

document.getElementById('app')!.appendChild(app);
