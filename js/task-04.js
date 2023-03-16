
let counterValue = 0;
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const counterSpan = document.querySelector("#value");

incrementBtn.addEventListener("click", () => {
  counterSpan.textContent = ++counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterSpan.textContent = --counterValue;
});