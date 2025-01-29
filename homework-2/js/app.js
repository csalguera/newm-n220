// cached element references
const msg = document.getElementById("external-msg");
const btn = document.getElementById("external-btn");

// variables
let initialNum = 0;

// functions
function eatCupcake() {
  // function will not run when initialNum variable is greater than or equal to 6
  if (initialNum >= 6) return;
  // initialNum variable will be incremented prior to being used
  ++initialNum;
  // display message in console
  console.log(
    `You ate ${initialNum} ${initialNum === 1 ? "cupcake" : "cupcakes"}!`
  );
  // update the textContent of element to render message to user in html
  msg.textContent = `${6 - initialNum} Cupcakes Remaining`;
  // if initialNum is greater than 5, then the disableBtn function is called
  if (initialNum > 5) disableBtn();
}

function disableBtn() {
  // element will be disabled
  btn.disabled = true;
  // textContent is updated
  btn.innerText = "Out of stock";
}
