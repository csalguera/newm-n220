// modules
import * as home from './home.js'

// cached element references
const homeMsgs = document.getElementById('home-msgs')

// DOM manipulation
const perimMsg = document.createElement('p')
const areaMsg = document.createElement('p')

perimMsg.textContent = `The perimeter of the specified circle is ${home.perimeter}`
areaMsg.textContent = `The area of the specified circle is ${home.area}`

homeMsgs.appendChild(perimMsg)
homeMsgs.appendChild(areaMsg)