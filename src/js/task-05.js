const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const handleNameInput = () => {
  if (nameInput.value.trim() !== "") {
    nameOutput.textContent = nameInput.value.trim();
  }
  else {nameOutput.textContent = "Anonymous"};
};

nameInput.addEventListener("input", handleNameInput);
