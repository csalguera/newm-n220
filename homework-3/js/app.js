// modules
import * as home from './home.js'
import * as store from './store.js'
import { storeLocation, loginLocation, roundToTwoDecimals } from './utility.js'

// cached element references
const homeMsgs = document.getElementById('home-msgs')

// DOM manipulation
if (!storeLocation && !loginLocation) {
  const perimMsg = document.createElement('p')
  const areaMsg = document.createElement('p')
  
  perimMsg.textContent = `The perimeter of the specified circle is ${roundToTwoDecimals(home.perimeter)}`
  areaMsg.textContent = `The area of the specified circle is ${roundToTwoDecimals(home.area)}`
  
  homeMsgs.appendChild(perimMsg)
  homeMsgs.appendChild(areaMsg)
}