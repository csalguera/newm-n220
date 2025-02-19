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

// for loop iterates per each element in instruments array
for (let i = 0; i < instruments.length; i++) {
  // list element is created and assigned to the variable liEl
  const liEl = document.createElement('li')
  // text content of liEl variable is assigned the value of the element at the current index (i) of instruments length
  liEl.textContent = `${instruments[i]}`
  // liEl is appended to ulRef
  ulRef.appendChild(liEl)
}