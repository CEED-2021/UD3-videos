/**
 * @jest-environment jsdom
*/

const fs = require("fs");
const HTML_FROM_FILE = fs.readFileSync("./test.html");

describe('testing virtual DOM', () => {

  beforeEach(() => {

    const HTML = `
      <html>
        <head>
        </head>
        <body>
          <div id="hola">banana</div>
        </body>
      </html>
    `
    document.documentElement.innerHTML = HTML_FROM_FILE
  })

  it('finds an element', () => {
    d = document.getElementById('hola')
    console.log(d)
  });
})
