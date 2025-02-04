// modules
import * as home from './home.js'
import * as store from './store.js'
import * as login from './login.js'
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
  const eligibilityMsg = document.createElement('p')
  const discountMsg = document.createElement('p')
  
  totalMsg.textContent = `The total price of this item after tax is ${roundToTwoDecimals(store.totalAfterTax)}`
  eligibilityMsg.textContent = `This item is ${store.eligibleForDiscount ? 'not' : ''} eligible for a discount.`
  discountMsg.textContent = `The discounted total would have been ${roundToTwoDecimals(store.discountedTotalAfterTax)}`
  
  storeMsgs.appendChild(totalMsg)
  storeMsgs.appendChild(eligibilityMsg)
  storeMsgs.appendChild(discountMsg)
}