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

    h2 {
      color: #0159be;
      padding-bottom: 13px;
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
      margin: 10px 0 0 0;
      padding-left: 1.5rem;
    }

    ul li,
    ol li {
      margin-bottom: 0.8rem;
      font-size: 1rem;
    }

    ul li::marker {
      color: #007acc;
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
  const changelogList = changelog
    .replace('# Changelog', '')
    .trim()
    .split(/\n##\s/g)
    .map((block) => '## ' + block.trim().replace(/^##\s+/g, ''));
  return (
    <div class={className}>
      <div k-for="item in changelogList" class="demo-section">
        <div k-html={marked(item)}></div>
      </div>
    </div>
  );
}
