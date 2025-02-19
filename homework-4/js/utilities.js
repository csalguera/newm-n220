/**
 * Iterates through an array and sums all of the values.
 * The sum is then divided by the number of values in the array.
 * @param {Array} arr Array to iterate over
 * @returns The sum of all the values in array divived by the number of values.
 */
export const findAverage = (arr) => {
  // sum is initialized as 0
  let sum = 0
  // for loop iterates through each element of array
  for (let i = 0; i < arr.length; i++) {
    // the value at each index is added to sum
    sum += arr[i]
  }
  // the sum is divided by the length of the array and the value is returned
  return sum / arr.length
}

/**
 * Iterates through an array and creates elements of the tagName to append to a cached referenced element.
 * @param {Array} arr Array to iterate over.
 * @param {string} tagName The type of element/tag to create in the DOM.
 * @param {Element} ref The cached referenced parent element to append the created child element to.
 */
export const appendElements = (arr, tagName, ref) => {
  // for loop iterates through each element of arr
  for (let i = 0; i < arr.length; i++) {
    // an element of tagName is created
    const element = document.createElement(tagName)
    // if the tagName value is 'img'
    if (tagName === 'img') {
      // then the src attribute is set to the current element's url propery (dot notation)
      element.src = arr[i].url
      // alt attribute is set to Image i, with i being the current iteration/index of the loop
      element.alt = `Image ${i}`
      // height is set to 300 pixels
      element.height = '300'
    } else {
      // otherwise, then the text content is set to value of the current element/index in the array
      element.textContent = `${arr[i]}`
    }
    // element is appended to parent element (ref)
    ref.appendChild(element)
  }
}