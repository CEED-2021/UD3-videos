function changeColor(event) {
  let parent = document.getElementById('parent');
  let color = getComputedStyle(event.target).backgroundColor;
  parent.style.backgroundColor = color
}

function installHandlers() {
  let childs = document.getElementsByClassName('child');

  for (let child of childs) {
    child.onclick = changeColor;
  }
}

try {
  module.exports = {
    installHandlers
  }
} catch(e) {}
