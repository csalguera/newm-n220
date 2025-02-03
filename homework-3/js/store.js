// modules
import { homeLocation, loginLocation, roundToTwoDecimals } from './utility.js'

// variables
/*
 * itemPrice is declared as a const because the price of an item will generally fluctuate through discounts
 * totalAfterTax and discountedTotalAfterTax variables are const because their value is assigned from function calls that return values
 * the variables within those functions (ie salesTax) are declared as let because the sales tax can vary from state to state
 */
export const itemPrice = 40.99
export const totalAfterTax = applyTax(itemPrice)
export const eligibleForDiscount = determineDiscountEligibility(totalAfterTax)
export const discountedTotalAfterTax = applyDiscount(totalAfterTax)

// function accepts a num as an argument to return a total of the num along with the applicable sales tax
function applyTax(num) {
  // sales tax is set to 7% or 0.07 for Indiana
  let salesTax = 0.07
  // returns the product of the num and 1.07
  // invokes the function roundToTwoDecimals to round to the nearest cent
  return roundToTwoDecimals(num * (1 + salesTax))
}

// functions determines the eligibility of the item for discount
function determineDiscountEligibility(num) {
  // variable is assigned the value of boolean data type whether num is greater than 50
  let eligible = num > 50
  // msg variable is declaed but not defined
  let msg
  // if eligible variable is true, then if block will execute
  if (eligible) {
    // msg is assigned a value
    msg = `This item is eligible for a discount.`
  // otherwise if variable is false, then the else block will execute
  } else {
    // msg is assigned a value
    msg = `This item is not eligible for a discount.`
  }
  // msg is returned
  return msg
}

// function returns the total price of an item after discount
function applyDiscount(num) {
  // the discount variable is defined as 10% or 0.1
  let discount = 0.1
  // the difference between the original total (num) and the total with discount is returned
  return roundToTwoDecimals(num - (num * discount))
}

// conditionals
/*
 * This conditional prevents the console logs from printing in the index.html and login.html
 */
if (!homeLocation && !loginLocation) {
  console.log('The total price of this item after tax is:', totalAfterTax);
  console.log(eligibleForDiscount);
  console.log('The discounted total would have been:', discountedTotalAfterTax);
}