/**
 * @jest-environment jsdom
*/
const fs = require("fs");
const HTML_FILE = './timer.html';
const HTML_FROM_FILE = fs.readFileSync(HTML_FILE);

const { installHandlers } = require('./timer.js')

describe('testing timers', () => {

  let counterElement;
  let startButton;
  const click = new Event('click');

  beforeEach(() => {
    document.documentElement.innerHTML = HTML_FROM_FILE
    
    installHandlers();
    counterElement = document.getElementById('counter');
    startButton = document.getElementById('start');
  })

  it('Sets counter to 5 when clicked', () => {
    startButton.dispatchEvent(click);

    expect(counterElement.innerHTML).toBe('5')
  })

  it('Disables button when clicked', () => {
    startButton.dispatchEvent(click);

    expect(startButton.disabled).toBe(true)
  })

  xit('Decrements by 1 counter after 1 second', () => {

  })
})