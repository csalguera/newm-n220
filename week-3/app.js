const applePrice = 0.49
let pickedApples = 4
pickedApples += 10
pickedApples -= 4
const totalForApples = applePrice * pickedApples

console.log(`Cost of apples: ${totalForApples}`);
console.log(`Too many apples: ${pickedApples > 5}`);
pickedApples -= 6
console.log(`Too many apples: ${pickedApples > 5}`);
