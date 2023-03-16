const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const changeSizeSymbols = () => {
  text.style.fontSize = `${fontSizeControl.value}px`
};
fontSizeControl.addEventListener("click", changeSizeSymbols);