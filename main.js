"use strict";
// Constants
const form = document.getElementById("form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const inputErrorState = document.querySelectorAll(".input_error_state");

// =====================================================================

// Password regexp constant:

// The valid password should contain at least:
// - one capital letter
// - one number
// - at least 8 characters
const validPassword = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

// ========================  Display error function
function displayError(inputField) {
  // First Name and Last Name Error
  if (inputField === firstName || inputField === lastName) {
    inputField.classList.add("input_error_state");
    inputField.parentElement.children[1].classList.remove("hidden");
    inputField.parentElement.children[2].classList.remove("hidden");
    if (inputField === firstName) {
      inputField.parentElement.children[2].innerHTML =
        "Please enter your first name.";
    } else {
      inputField.parentElement.children[2].innerHTML =
        "Please enter your last name.";
    }
  }
  // Email Error
  if (inputField === email) {
    if (email.validity.valueMissing) {
      email.classList.add("input_error_state");
      email.parentElement.children[1].classList.remove("hidden");
      email.parentElement.children[2].classList.remove("hidden");
      email.parentElement.children[2].innerHTML =
        "Please enter the email address.";
    } else if (email.validity.typeMismatch) {
      email.classList.add("input_error_state");
      email.parentElement.children[1].classList.remove("hidden");
      email.parentElement.children[2].classList.remove("hidden");
      email.parentElement.children[2].textContent =
        "Please provide a valid email address.";
    }
  }
  // Password Error
  if (inputField === password) {
    if (!validPassword.test(password.value)) {
      password.classList.add("input_error_state");
      password.parentElement.children[1].classList.remove("hidden");
      password.parentElement.children[2].classList.remove("hidden");
      password.parentElement.children[2].innerHTML =
        "Min 8 characters, one nr. and one letter.";
    }
  }
}
// First Name Input Event Listener
firstName.addEventListener(
  "input",
  function () {
    if (firstName.value !== "") {
      firstName.classList.remove("input_error_state");
      firstName.parentElement.children[1].classList.add("hidden");
      firstName.parentElement.children[2].classList.add("hidden");
    } else {
      displayError(firstName);
      console.log("First Name Empty!");
    }
  },
  true
);
// Last Name Input Event Listener
lastName.addEventListener(
  "input",
  function () {
    if (lastName.value !== "") {
      lastName.classList.remove("input_error_state");
      lastName.parentElement.children[1].classList.add("hidden");
      lastName.parentElement.children[2].classList.add("hidden");
    } else {
      displayError(lastName);
      console.log("Last Name Empty!");
    }
  },
  true
);
// Email Input Event Listener
email.addEventListener(
  "input",
  function () {
    if (email.validity.valid) {
      email.parentElement.children[2].classList.add("hidden");
      email.parentElement.children[1].classList.add("hidden");
      email.classList.remove("input_error_state");
    } else {
      displayError(email);
    }
  },
  true
);
// Password Input Event Listener
password.addEventListener(
  "input",
  function () {
    if (validPassword.test(password.value)) {
      password.parentElement.children[1].classList.add("hidden");
      password.parentElement.children[2].classList.add("hidden");
      password.classList.remove("input_error_state");
    } else {
      displayError(password);
    }
  },
  true
);
// Submit Input Event Listener
form.addEventListener("submit", function (e) {
  // First Name Submit
  if (firstName.value === "") {
    displayError(firstName);
    e.preventDefault();
  }
  // Last Name Submit
  if (lastName.value === "") {
    displayError(lastName);
    e.preventDefault();
  }
  // Email Submit
  if (!email.validity.valid) {
    displayError(email);
    e.preventDefault();
  }
  // Password Submit
  if (!validPassword.test(password.value)) {
    displayError(password);
    e.preventDefault();
  }
});
