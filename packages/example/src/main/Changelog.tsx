import { marked } from 'marked';
import changelog from '../../../../CHANGELOG.md?raw';
import { css } from '@emotion/css';

const className = css`
  & {
    /* Global settings */
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.8;
      background-color: #fafafa;
      color: #333;
      margin: 20px;
      padding: 0;
      max-width: 960px;
      margin-left: auto;
      margin-right: auto;
      word-wrap: break-word;
    }

    /* Titles */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #2d2d2d;
      font-weight: 500;
      line-height: 1.3;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
      padding-bottom: 0.3rem;
      border-bottom: 1px solid #e0e0e0;
    }

    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    h4 {
      font-size: 1.125rem;
    }

    h5,
    h6 {
      font-size: 1rem;
      font-weight: 400;
    }

    /* Paragraph */
    p {
      font-size: 1rem;
      color: #444;
      margin-bottom: 1.2rem;
      line-height: 1.6;
    }

    /* Links */
    a {
      color: #007acc;
      text-decoration: none;
      transition: color 0.2s ease;
    }

    a:hover {
      color: #005fa3;
      text-decoration: underline;
    }

    /* Lists */
    ul,
    ol {
      margin: 0;
      padding-left: 1.5rem;
    }

    ul li,
    ol li {
      margin-bottom: 0.8rem;
      font-size: 1rem;
    }

    ul li::before {
      content: '•';
      color: #007acc;
      margin-right: 0.6rem;
    }

    /* Blockquotes */
    blockquote {
      background-color: #f9f9f9;
      border-left: 4px solid #007acc;
      padding: 1rem;
      margin: 1.5rem 0;
      font-style: italic;
      font-size: 1.1rem;
      color: #555;
      border-radius: 5px;
    }

    blockquote p {
      margin: 0;
    }

    /* Code blocks */
    pre {
      background-color: #282c34;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
      margin: 1.5rem 0;
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.95rem;
    }

    code {
      background-color: #f5f5f5;
      color: #e83e8c;
      padding: 0.3rem 0.5rem;
      border-radius: 5px;
      font-family: 'Courier New', Courier, monospace;
    }

    /* Images */
    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 1.5rem 0;
      border-radius: 5px;
    }

    /* Tables */
    table {
      width: 100%;
      margin: 1.5rem 0;
      border-collapse: collapse;
    }

    table th,
    table td {
      padding: 0.75rem;
      text-align: left;
      border: 1px solid #ddd;
    }

    table th {
      background-color: #f4f4f4;
      color: #555;
      font-weight: 400;
    }

    table tr:nth-child(even) {
      background-color: #fafafa;
    }

    /* Horizontal rules */
    hr {
      border: 0;
      border-top: 1px solid #ddd;
      margin: 2rem 0;
    }

    /* Code block inline */
    pre code {
      background-color: transparent;
      color: #d6336c;
      padding: 0;
      border: none;
    }

    /* Custom classes */
    .container {
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    /* Responsive design */
    @media (max-width: 768px) {
      body {
        margin: 10px;
      }

      h1 {
        font-size: 1.5rem;
      }

      h2 {
        font-size: 1.4rem;
      }

      h3 {
        font-size: 1.2rem;
      }

      p {
        font-size: 0.95rem;
      }

      ul,
      ol {
        padding-left: 1.2rem;
      }
    }
  }
`;

export function ChangeLog() {
  return (
    <div class={className} style="margin:-20px 20px 0px 20px;">
      <div k-html={marked(changelog.replace('# Changelog', '').trim())}></div>
    </div>
  );
}
