const input = document.querySelector('input')
const butCreate = document.querySelector('button[data-action="render"]')
const div = document.getElementById('boxes')
const butRemove = document.querySelector('button[data-action="destroy"]')

function createBoxes() {
  for (let i = 1; i <= input.value; i++) {
    const newDiv = document.createElement('div')
    div.appendChild(newDiv)
    if (newDiv === div.children[0]) {
      newDiv.style.height = `30px`
      newDiv.style.width = `30px`
    } else {
      newDiv.style.height = newDiv.previousElementSibling.clientHeight + 10 + 'px'
      newDiv.style.width = newDiv.previousElementSibling.clientWidth + 10 + 'px'
    }
    newDiv.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
  }
  input.value = 0
}

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

butCreate.addEventListener('click', createBoxes)

butRemove.addEventListener('click', () => {
  div.innerHTML = ''
})
