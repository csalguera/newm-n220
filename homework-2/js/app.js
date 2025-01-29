const msg = document.getElementById("external-msg");
const btn = document.getElementById("external-btn");

let initialNum = 0;

function eatCupcake() {
  if (initialNum >= 6) return;
  ++initialNum;
  console.log(
    `You ate ${initialNum} ${initialNum === 1 ? "cupcake" : "cupcakes"}!`
  );
  msg.textContent = `${6 - initialNum} Cupcakes Remaining`;
  if (initialNum > 5) disableBtn();
}

function disableBtn() {
  btn.disabled = true;
  btn.innerText = "Out of stock";
}
