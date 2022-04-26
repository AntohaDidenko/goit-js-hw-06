const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

const res = {};

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  res.Login = email.value;
  res.Password = password.value;
  // console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
  console.log(res);
}