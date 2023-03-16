const inputSymbols = document.querySelector("#validation-input");
const dataLength = inputSymbols.dataset.length;

const handleSymbolsInput = () => {
  const inputValueLength = inputSymbols.value.length;

  if (inputValueLength === Number(dataLength)) {
    inputSymbols.classList.add("valid");
    inputSymbols.classList.remove("invalid");
  } else {
    inputSymbols.classList.add("invalid");
    inputSymbols.classList.remove("valid");
  }
};

inputSymbols.addEventListener("blur", handleSymbolsInput);

