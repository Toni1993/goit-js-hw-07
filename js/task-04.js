const decrementBtn = document.querySelector('.decrement')
const incrementBtn = document.querySelector('.increment')
const valueEl = document.querySelector('#value')

function createCounter() {
  let current = 0

  function increment() {
    return (current = current + 1)
  }

  function decrement() {
    return (current = current - 1)
  }

  return { increment, decrement }
}

let counter = createCounter()

incrementBtn.addEventListener('click', () => {
  valueEl.innerHTML = counter.increment()
})

decrementBtn.addEventListener('click', () => {
  valueEl.innerHTML = counter.decrement()
})
