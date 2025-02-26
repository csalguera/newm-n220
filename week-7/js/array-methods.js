const itemsUlRef = document.querySelector('#items')
const cartUlRef = document.querySelector('#cart')
const removeBtnRef = document.querySelector('#remove-item')

const items = [
  'Apple',
  'Orange',
  'Plum',
  'Pear',
  'Hairy Potato',
]

const cart = []

const addItemToCart = (e) => {
  cart.push(e.target.dataset.name)
  showCart()
}

const removeItemFromCart = () => {
  cart.shift()
  showCart()
}

const showCart = () => {
  cartUlRef.innerHTML = ''
  for (let i = 0; i < cart.length; i++) {
    cartUlRef.innerHTML += `<li>${cart[i]}</li>`
  }
}

for (let i = 0; i < items.length; i++) {
  const newLi = document.createElement('li')
  newLi.innerText = items[i]
  const newBtn = document.createElement('button')
  newBtn.innerText = '+'
  newBtn.dataset.name = items[i]
  newBtn.onclick = addItemToCart
  newLi.appendChild(newBtn)
  itemsUlRef.appendChild(newLi)
}

removeBtnRef.addEventListener('click', removeItemFromCart)