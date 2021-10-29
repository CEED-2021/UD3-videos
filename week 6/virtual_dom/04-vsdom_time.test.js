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

  it('sets counter to 5 when clicked', () => {
    startButton.dispatchEvent(click);

    expect(counterElement.innerHTML).toBe('5')
  })

  it('disables button when clicked', () => {
    startButton.dispatchEvent(click);

    expect(startButton.disabled).toBe(true)
  })

  describe('timer functionallity', () => {

    beforeEach( () => {
      jest.useFakeTimers();
      startButton.dispatchEvent(click);
    })

    afterEach(() => {
      jest.useRealTimers();
    })

    it('decrements counter by 1 counter 1 second', () => {
      jest.advanceTimersByTime(1000);
      // Or we could do, in this case:
      // jest.runOnlyPendingTimers();
      expect(counterElement.innerHTML).toBe('4');
    })

    describe('when the timer is over', () => {
      
      beforeEach(() => {
        jest.advanceTimersByTime(5000);        
      })

      it('explodes the bomb', () => {
        expect(counterElement.innerHTML).toBe('Boom!!!');  
      })

      it('enables the button', () => {
        expect(startButton.disabled).toBe(false)
      })
    })
  })
  
})