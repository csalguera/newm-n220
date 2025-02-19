console.log("Let's talk arrays.");

const zodiacSigns = [
  'Libra',
  'Cancer',
  'Leo',
  'Taurus',
  'Scorpio',
  'Aquarius',
  'Gemini',
  'Virgo',
  'Pisces',
  'Aries',
  'Sagittarius',
  'Capricorn',
]

console.log(zodiacSigns);
console.table(zodiacSigns);
console.log('2nd Zodiac:', zodiacSigns[1]);
console.log('# of  Zodiacs:', zodiacSigns.length);

const zodiacSignsUlRef = document.getElementById('zodiac-signs')

for (let i = 0; i < zodiacSigns.length; i++) {
  // console.log('For Loop:', zodiacSigns[i]);
  zodiacSignsUlRef.innerHTML += `<li>${zodiacSigns[i]}</li>`
}

// zodiacSigns.forEach((sign, idx) => {
//   zodiacSignsUlRef.innerHTML += `<li>${zodiacSigns[idx]}</li>`
// })

// let whileI = 0
// while (whileI < zodiacSigns.length) {
//   console.log('While Loop:', zodiacSigns[whileI]);
//   whileI++
// }

// let whileDoI = 0
// do {
//   console.log('Do-While Loop:', zodiacSigns[whileDoI]);
//   whileDoI++
// } while (whileDoI < zodiacSigns.length)

const gradeStatsSectionRef = document.querySelector('#grade-stats')
const grades = [ 21, 6, 79, 8, 86, 4, 2, 84, 57, 10 ]

let sum = 0
for (let i = 0; i < grades.length; i++) {
  sum += grades[i]
}

gradeStatsSectionRef.innerHTML += `<h4>Avg: ${sum / grades.length}</h4>`
