import { html, render } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';

const readmeSrc = new URL('../../README.md', import.meta.url).href;

const demo = window.document.body.querySelector<HTMLDivElement>('#demo');

fetch(readmeSrc)
  .then(response => response.text())
  .then(readme => {
    const content = marked.parse(readme, {async: false});
    render(html`${unsafeHTML(content)}`, demo!);
  });
