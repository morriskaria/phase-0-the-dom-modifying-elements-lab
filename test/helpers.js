const chai = require('chai')
global.expect = chai.expect
const fs = require('fs')
const path = require('path')
const babel = require('babel-core');
const { JSDOM } = require('jsdom'); // Add this line

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    presets: ['env']
  }
);

const src = babelResult.code

// Set up the DOM environment for the tests
// ...existing code...

const dom = new JSDOM(html, { runScripts: "dangerously" });
global.window = dom.window;
global.document = dom.window.document;
global.Node = dom.window.Node;
global.HTMLElement = dom.window.HTMLElement;

// Run the transpiled JS code in the jsdom window context
const scriptEl = dom.window.document.createElement('script');
scriptEl.textContent = src;
dom.window.document.body.appendChild(scriptEl);