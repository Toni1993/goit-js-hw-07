const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы']
const items = ingredients.map(ingredient => {
  const itemEl = document.createElement('li')
  itemEl.textContent = ingredient
  return itemEl
})
console.log(items)

const list = document.createElement('ul')
const title = document.createElement('h1')
title.textContent = 'Ингредиенты'
list.append(...items)
document.body.append(title)
document.body.append(list)
