// cached element references
const menuItemsRef = document.querySelector('#menu')
const cartRef = document.querySelector('#cart')
const noItemsRef = document.querySelector('#no-items')

const menuItems = [
  { name: 'Hamburger', price: 2.99 },
  { name: 'Cheeseburger', price: 3.99 },
  { name: 'Cheese Pizza', price: 3.99 },
  { name: 'Pepperoni Pizza', price: 4.99 },
  { name: 'Sausage Pizza', price: 4.99 },
  { name: 'Caesar Salad', price: 3.99 },
  { name: 'Fries', price: 1.99 },
  { name: 'Onion Rings', price: 2.49 }
]

let cart = []

for (let i = 0; i < menuItems.length; i++) {
  const liEl = document.createElement('li')
  liEl.textContent = menuItems[i].name
  const btnEl = document.createElement('button')
  btnEl.textContent = '+'
  btnEl.dataset.name = `${menuItems[i].name}`
  btnEl.dataset.price = `${menuItems[i].price}`
  btnEl.addEventListener('click', addToCart)
  const divEl = document.createElement('div')
  divEl.classList.add('menu-item-li')
  divEl.appendChild(btnEl)
  divEl.appendChild(liEl)
  menuItemsRef.appendChild(divEl)
}

function addToCart(evt) {
  const dataset = evt.target.dataset
  const item = { name: dataset.name, price: dataset.price }
  cart.push(item);
  showCart()
  displayEmptyTableMsg()
}

function showCart() {
  cartRef.innerHTML = ''
  let sum = 0
  for (let i = 0; i < cart.length; i++) {
    cartRef.innerHTML += '<tr>'
    cartRef.innerHTML += `<td colspan="4">${cart[i].name} ${cart[i].price} <textarea class="instructions"></textarea> <button data-name="${cart[i].name}" data-price=${cart[i].price} class="remove-btn">-</button</td>`
    cartRef.innerHTML += '</tr>'
    sum += cart[i].price
  }
  cartRef.innerHTML += `<tr style="display: ${cart.length ? 'table-row' : 'none'};">`
  cartRef.innerHTML += '<td>Total</td>'
  cartRef.innerHTML += `<td colspan="3">$0.00</td>`
  cartRef.innerHTML += '</tr>'
  const instructionsRefs = document.querySelectorAll('.instructions')
  instructionsRefs.forEach(area => {
    area.addEventListener('change', updateInstructions)
  })
  const removeBtnRefs = document.querySelectorAll('.remove-btn')
  removeBtnRefs.forEach(btn => {
    btn.addEventListener('click', removeItemFromCart)
  })
}

function updateInstructions(evt) {
  
}

function displayEmptyTableMsg() {
  if (cart.length) {
    noItemsRef.style.display = 'none'
  } else {
    noItemsRef.style.display = 'table-cell'
  }
}

function removeItemFromCart(evt) {
  const dataset = evt.target.dataset
  const item = { name: dataset.name, price: dataset.price }
  cart = cart.filter(el => el.name !== item.name)
  showCart()
  displayEmptyTableMsg()
}