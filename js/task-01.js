const elCategories = document.querySelector('#categories')

const elItems = elCategories.querySelectorAll('.item')
console.log(`В списке ${elItems.length} категории`)

elItems.forEach(elem => {
  console.log('Категория:', elem.querySelector('h2').textContent)
  console.log('Количество элементов:', elem.querySelectorAll('li').length)
})
