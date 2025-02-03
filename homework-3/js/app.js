// modules
import * as home from './home.js'
import * as store from './store.js'
import { location } from './utility.js'

// cached element references
const homeMsgs = document.getElementById('home-msgs')

// DOM manipulation
if (!location.includes("/store.html") && !location.includes("/login.html")) {
  const perimMsg = document.createElement('p')
  const areaMsg = document.createElement('p')
  
  perimMsg.textContent = `The perimeter of the specified circle is ${home.perimeter}`
  areaMsg.textContent = `The area of the specified circle is ${home.area}`
  
  homeMsgs.appendChild(perimMsg)
  homeMsgs.appendChild(areaMsg)
}