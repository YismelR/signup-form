// Abstraction
function isEmptyValidator(input, content) {
  const inputValue = document.querySelector(`[name=${input}]`).value;
  const inputErr = document.querySelector(`#error-msg-${input}`);
  const img = document.querySelector(`#${input}-img`);

  if (inputValue === "") {
    inputErr.textContent = content;
    img.classList.remove("hidden");
    return true;
  } else {
    img.classList.add("hidden");
    inputErr.textContent = "";
    return false;
  }
}

function isEmailValidator(input, content) {
  const inputValue = document.querySelector(`[name=${input}]`).value;
  const inputErr = document.querySelector(`#error-msg-${input}`);
  const node = document.querySelector(`[name=${input}]`);
  const img = document.querySelector(`#${input}-img`);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(inputValue)) {
    node.classList.add("error-color");
    inputErr.textContent = content;
    img.classList.remove("hidden");
    return true;
  } else {
    img.classList.add("hidden");
    node.classList.remove("error-color");
    inputErr.textContent = "";
    return false;
  }
}

document.querySelector("#myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isFormInvalid = false;

  isFormInvalid =
    isEmptyValidator("fname", "First Name cannot be empty") || isFormInvalid;
  isFormInvalid =
    isEmptyValidator("lname", "Last Name cannot be empty") || isFormInvalid;
  isFormInvalid =
    isEmptyValidator("password", "Password cannot be empty") || isFormInvalid;
  isFormInvalid =
    isEmailValidator("email", "Looks like this is not an email") ||
    isFormInvalid;

  if (!isFormInvalid) {
    console.log("Submitted");
  }
});
