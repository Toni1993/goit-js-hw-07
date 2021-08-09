const inputEl = document.querySelector('#validation-input')
const lengthEl = inputEl.dataset.length

inputEl.addEventListener('blur', onblurInput)
function onblurInput(event) {
  if (event.currentTarget.value.length === Number(lengthEl)) {
    event.currentTarget.classList.add('valid')
    event.currentTarget.classList.remove('invalid')
  } else {
    event.currentTarget.classList.add('invalid')
    event.currentTarget.classList.remove('valid')
  }
}
