// modules
import { location } from './utility.js'

// variables
/*
 * itemPrice is declared as a const because the price of an item will generally fluctuate through discounts
 * totalAfterTax and discountedTotalAfterTax variables are const because their value is assigned from function calls that return values
 * the variables within those functions (ie salesTax) are declared as let because the sales tax can vary from state to state
 */
const itemPrice = 40.99
const totalAfterTax = applyTax(itemPrice)
const eligibleForDiscount = determineDiscountEligibility(totalAfterTax)
const discountedTotalAfterTax = applyDiscount(totalAfterTax)

// function accepts a num as an argument to return a total of the num along with the applicable sales tax
function applyTax(num) {
  // sales tax is set to 7% or 0.07 for Indiana
  let salesTax = 0.07
  // returns the product of the num and 1.07
  // invokes the function roundToTwoDecimals to round to the nearest cent
  return roundToTwoDecimals(num * (1 + salesTax))
}

// function accepts an argument to round to the nearest hundredth (to the nearest cent in terms of dollars)
function roundToTwoDecimals(num) {
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

function determineDiscountEligibility(num) {
  let eligible = num > 50
  let msg
  if (eligible) {
    msg = `This item is eligible for a discount.`
  } else {
    msg = `This item is not eligible for a discount.`
  }
  return msg
}

function applyDiscount(num) {
  let discount = 0.1
  return roundToTwoDecimals(num - (num * discount))
}

if (!location.includes("/index.html") && !location.includes("/login.html")) {
  console.log('The total price of this item after tax is:', totalAfterTax);
  console.log(eligibleForDiscount);
  console.log('The discounted total would have been:', discountedTotalAfterTax);
}