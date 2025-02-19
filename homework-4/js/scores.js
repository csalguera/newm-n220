// import findAverage function from utilities.js file
import { findAverage, appendElements } from "./utilities.js"

// initialize list of scores as an array
const scores = [
  95,
  72,
  88,
  45,
  60,
  79,
  82,
  91,
  50,
  38,
]

// cached element references
const ulRef = document.querySelector('ul')
const scoreRef = document.querySelector('#score')

appendElements(scores, 'li', ulRef)

// invoke find average function and pass scores array as an argument, then assign the value returned to the average variable
const average = findAverage(scores)

// assign the value of average to the text content of scoreRef
scoreRef.textContent = average