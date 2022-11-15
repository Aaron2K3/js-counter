"use strict";

const counterButtons = document.getElementById("counter-buttons");

let counterDisplay = document.getElementById("counter-display");
let counterNum = 0;

counterButtons.addEventListener("click", (e) => {
  const action = e.target.dataset.action;
  if (action === "count-down") {
    counterDisplay.textContent = counterNum -= 1;
  } else if (action === "count-up") {
    counterDisplay.textContent = counterNum += 1;
  }
});
