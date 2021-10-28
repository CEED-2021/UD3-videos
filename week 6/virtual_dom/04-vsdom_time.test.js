/**
 * @jest-environment jsdom
*/
const fs = require("fs");
const HTML_FILE = './timer.html';
const HTML_FROM_FILE = fs.readFileSync(HTML_FILE);

const { installHandlers } = require('./timer.js')

describe('testing timers', () => {
  it('TO-DO', () => {
    expect(true).toBe(false);
  })
})