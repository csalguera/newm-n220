// modules
import { appendElements } from "./utilities.js"

// instruments initialized as array
const instruments = [
  'Piano',
  'Guitar',
  'Violin',
  'Drums',
  'Saxophone',
  'Flute',
]

// cached element reference for unordered list (ul element)
const ulRef = document.querySelector('ul')

// invoke function to create elements and append them to ul
appendElements(instruments, 'li', ulRef)