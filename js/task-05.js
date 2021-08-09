const inputEl = document.querySelector("[type ='text']")
console.log(inputEl)

const spanEl = document.querySelector('#name-output')
console.log(spanEl)

inputEl.addEventListener('input', onInputChange)

function onInputChange(event) {
  const input = event.currentTarget

  spanEl.textContent = input.value ? input.value : 'незнакомец'
}
