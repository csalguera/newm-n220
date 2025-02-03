// constants
const location = window.location.href
export const homeLocation = location.includes("/index.html")
export const storeLocation = location.includes("/store.html")
export const loginLocation = location.includes("/login.html")

// functions
// function accepts an argument to round to the nearest hundredth (to the nearest cent in terms of dollars)
export function roundToTwoDecimals(num) {
  // the argument/num is formatted into a string to two decimal places
  num = num.toFixed(3)
  // variable idx is assigned the value of the index of where '.' (the decimal) is found within the string
  const idx = num.indexOf('.')
  // variable decimalToRound is assigned the value of all the numbers (as a string) after the decimal point through the slice method and idx variable
  let decimalToRound = num.slice(idx + 1)
  // new array is defined, initially empty
  const decimalArr = []
  // for loop iterates per character in decimalToRound string
  for (let i = 0; i < decimalToRound.length; i++) {
    // each character is pushed to the decimalArr as an integer data type
    decimalArr.push((parseInt(decimalToRound[i])))
  }
  // if block will essentially round the numbers through bracket notation
  if (decimalArr[2] >= 5) {
    decimalArr[1] += 1
    // if the given number is equal to 10, it will be set to 0 and the number preceding it will be rounded up
    if (decimalArr[1] === 10) {
      decimalArr[0] += 1
      decimalArr[1] = 0
    }
  }
  decimalArr[2] = 0
  // the decimalArr is joined as a string with no spaces along with the decimal point ('.'), it is then parsed into a float
  let roundedFloat = parseFloat(`.${decimalArr.join('')}`)
  // num is parsed as an int which truncates the decimal portion
  num = parseInt(num)
  // finally the sum of num and roundedFloat is returned
  return num + roundedFloat
}