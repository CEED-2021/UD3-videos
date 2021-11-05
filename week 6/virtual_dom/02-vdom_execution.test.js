/**
 * @jest-environment jsdom
*/
const fs = require("fs");
const HTML_FILE = './colors.html';
const HTML_FROM_FILE = fs.readFileSync(HTML_FILE);

function changeColor(event) {
  let parent = document.getElementById('parent');
  let color = getComputedStyle(event.target).backgroundColor;
  parent.style.backgroundColor = color
}

function installHandlers() {
  let childs = document.getElementsByClassName('child');
  for(let child of childs) {
    child.onclick = changeColor;
  }
}

describe('testing virtual DOM', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = HTML_FROM_FILE
  })

  it('changes the color of an element', () => {
    // Arrange
    const parent = document.getElementById('parent');
    const red = document.querySelector('.red');

    installHandlers();

    // Act
    const event = new Event('click', { bubbles: true, cancelable: false });
    red.dispatchEvent(event);

    // Assert
    const parentColor = window.getComputedStyle(parent).backgroundColor;
    expect(parentColor).toBe('red');
  });
})
