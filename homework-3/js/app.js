// modules
import * as home from './home.js'
import * as store from './store.js'
import { homeLocation, storeLocation, loginLocation, roundToTwoDecimals } from './utility.js'

// cached element references
const homeMsgs = document.getElementById('home-msgs')
const storeMsgs = document.getElementById('store-msgs')

// DOM manipulation
if (!storeLocation && !loginLocation) {
  const perimMsg = document.createElement('p')
  const areaMsg = document.createElement('p')
  
  perimMsg.textContent = `The perimeter of the specified circle is ${roundToTwoDecimals(home.perimeter)}`
  areaMsg.textContent = `The area of the specified circle is ${roundToTwoDecimals(home.area)}`
  
  homeMsgs.appendChild(perimMsg)
  homeMsgs.appendChild(areaMsg)
}

if (!homeLocation && !loginLocation) {
  const totalMsg = document.createElement('p')
  
  totalMsg.textContent = `The total price of this item after tax is ${roundToTwoDecimals(store.totalAfterTax)}`
  
  storeMsgs.appendChild(totalMsg)
}