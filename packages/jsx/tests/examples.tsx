/**
 * Example usage of @ktjs/jsx
 * 
 * This file demonstrates how to use JSX with KT.js
 * Note: You need to configure tsconfig.json to enable JSX
 */

import { h, ktnull } from '@ktjs/jsx';

// Simple element
export function simpleExample() {
  const greeting = <div class="greeting">Hello, KT.js with JSX!</div>;
  return greeting;
}

// Element with event handlers
export function eventHandlerExample() {
  let count = 0;
  
  const button = (
    <button 
      class="counter-btn"
      @click={() => {
        count++;
        button.textContent = `Clicked ${count} times`;
      }}
    >
      Click me
    </button>
  );
  
  return button;
}

// Nested elements
export function nestedExample() {
  const app = (
    <div id="app" class="container">
      <header class="header">
        <h1>My KT.js App</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
        </nav>
      </header>
      <main class="content">
        <p>Welcome to KT.js with JSX support!</p>
      </main>
      <footer class="footer">
        <p>&copy; 2025 KT.js</p>
      </footer>
    </div>
  );
  
  return app;
}

// Conditional rendering
export function conditionalExample(isLoggedIn: boolean) {
  const userPanel = (
    <div class="panel">
      <h2>User Panel</h2>
      {isLoggedIn ? (
        <div>
          <p>Welcome back!</p>
          <button @click={() => console.log('Logout')}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in</p>
          <button @click={() => console.log('Login')}>Login</button>
        </div>
      )}
    </div>
  );
  
  return userPanel;
}

// List rendering
export function listExample(items: string[]) {
  const list = (
    <ul class="item-list">
      {items.map((item, index) => (
        <li key={index} data-index={index}>
          {item}
        </li>
      ))}
    </ul>
  );
  
  return list;
}

// Component-like factory function
interface CardProps {
  title: string;
  content: string;
  actions?: Array<{ label: string; onClick: () => void }>;
  variant?: 'default' | 'primary' | 'danger';
}

export function Card({ title, content, actions, variant = 'default' }: CardProps) {
  const className = `card card-${variant}`;
  
  return (
    <div class={className}>
      <div class="card-header">
        <h3>{title}</h3>
      </div>
      <div class="card-body">
        <p>{content}</p>
      </div>
      {actions && actions.length > 0 ? (
        <div class="card-footer">
          {actions.map((action, index) => (
            <button 
              key={index}
              class="card-action"
              @click={action.onClick}
            >
              {action.label}
            </button>
          ))}
        </div>
      ) : ktnull}
    </div>
  );
}

// Form example
export function formExample() {
  const form = (
    <form 
      class="user-form"
      @submit={(e) => {
        e.preventDefault();
        console.log('Form submitted');
      }}
    >
      <div class="form-group">
        <label for="username">Username:</label>
        <input 
          id="username"
          type="text"
          name="username"
          placeholder="Enter username"
          @input={(e) => console.log('Input:', (e.target as HTMLInputElement).value)}
        />
      </div>
      
      <div class="form-group">
        <label for="email">Email:</label>
        <input 
          id="email"
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </div>
      
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea 
          id="message"
          name="message"
          rows={4}
          placeholder="Enter your message"
        />
      </div>
      
      <button type="submit" class="btn-submit">Submit</button>
    </form>
  );
  
  return form;
}

// Dynamic attributes example
export function dynamicAttributesExample(isDark: boolean, size: 'small' | 'medium' | 'large') {
  const className = `button ${isDark ? 'dark' : 'light'} size-${size}`;
  
  const button = (
    <button
      class={className}
      style={`padding: ${size === 'small' ? '5px' : size === 'large' ? '15px' : '10px'}`}
      disabled={false}
      data-theme={isDark ? 'dark' : 'light'}
    >
      Dynamic Button
    </button>
  );
  
  return button;
}

// Using with CSS-in-JS (conceptual example)
export function styledExample() {
  // Assuming you have a CSS-in-JS library like @emotion/css
  const buttonClass = 'styled-button'; // Replace with actual CSS-in-JS class
  
  const button = (
    <button 
      class={buttonClass}
      @click={() => alert('Styled button clicked!')}
    >
      Styled with CSS-in-JS
    </button>
  );
  
  return button;
}

// Complex nested example with state
export function todoAppExample() {
  const todos = ['Learn KT.js', 'Build an app', 'Deploy to production'];
  
  const app = (
    <div class="todo-app">
      <header>
        <h1>Todo App with JSX</h1>
      </header>
      
      <div class="todo-input">
        <input 
          type="text" 
          placeholder="Add a new todo"
          @keypress={(e) => {
            if (e.key === 'Enter') {
              console.log('Add todo:', (e.target as HTMLInputElement).value);
            }
          }}
        />
        <button @click={() => console.log('Add clicked')}>Add</button>
      </div>
      
      <ul class="todo-list">
        {todos.map((todo, index) => (
          <li key={index} class="todo-item">
            <input type="checkbox" id={`todo-${index}`} />
            <label for={`todo-${index}`}>{todo}</label>
            <button 
              class="delete-btn"
              @click={() => console.log('Delete todo:', index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      
      <footer class="todo-stats">
        <span>{todos.length} items</span>
      </footer>
    </div>
  );
  
  return app;
}
