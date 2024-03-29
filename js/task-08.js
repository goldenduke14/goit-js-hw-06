const form = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email || !password) {
    alert("Будь ласка, заповніть усі поля.");
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    form.reset();
  }
}
form.addEventListener("submit", onFormSubmit);