// modules
import { homeLocation, storeLocation } from "./utility.js"

// variables
/*
 * password is declared as let because passwords often change for security
 * the other variables are declared as const because the conditions for creating passwords typically increase in restrictions, not decrease
 * ie once a restriction is placed, it is not lifted
 */
let password = "(d0nteatTheScript)"
const passwordSpaceCheck = hasSpaceAtBeginning(password)
const passwordMinimumCharacterCheck = hasMinimumCharacters(password)
const passwordContainsStringCheck = hasString(password)

// function checks if the argument has an empty string at index 0, ie if it begins with a space
function hasSpaceAtBeginning(str) {
  return str[0] === ' '
}

// function checks if the argument is the length of 8 or greater
function hasMinimumCharacters(str) {
  return str.length >= 8
}

// function checks if the argument contains the string 'eat'
function hasString (str) {
  return str.includes('eat')
}

// conditionals
/*
 * This conditional prevents the console logs from printing in the index.html and login.html
 * the console logs make use of the ternary operator to conditionally render a differenct message based on if the conditions are true
 */
if (!homeLocation && !storeLocation) {
  console.log('The password', passwordSpaceCheck ? 'includes' : 'does not include', 'a space in the beginning.')
  console.log('The password', passwordMinimumCharacterCheck ? 'has' : 'does not have', 'a minimum of 8 characters.');
  console.log('The password', passwordContainsStringCheck ? 'contains' : 'does not contain', 'the word "eat".'); 
}