let timer;
let counter;

const TIMEOUT = 5;

function getButton() {
  return document.getElementById('start');
}

function getCounter() {
  return document.getElementById('counter');
}

function installHandlers() {
  getButton().addEventListener('click', startCountDown);
}

function startButtonEnabled(enabled) {
  getButton().disabled = !enabled;
}

function startCountDown() {
  counter = TIMEOUT;
  tick();
  startButtonEnabled(false);
  timer = setInterval(tick, 1000);
}

function tick() {
  if(counter == 0) {
    boom();
    return
  }
  
  getCounter().innerHTML = counter.toString();
  counter -= 2;
}

function boom() {
  clearInterval(timer);
  getCounter().innerHTML = "Boom!!!"
  startButtonEnabled(true);
}

// Jest version
module.exports = { 
  installHandlers 
}

// Browser version
// export { 
//   installHandlers 
// }