"use strict";
// Variables
const form = document.getElementById("form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

// The valid password should contain at least:
// - one capital letter
// - one number
// - at least 8 characters
const validPassword = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

// Display error function
function displayError() {
  // First Name Error
  if (firstName.value === "") {
    console.log("firstName empty");
    firstName.parentElement.children[1].classList.remove("hidden");
    firstName.parentElement.children[2].classList.remove("hidden");
    firstName.parentElement.children[2].innerHTML =
      "Please enter your first name.";
  }
  // Last Name Error
  if (lastName.value === "") {
    console.log("firstName empty");
    lastName.parentElement.children[1].classList.remove("hidden");
    lastName.parentElement.children[2].classList.remove("hidden");
    lastName.parentElement.children[2].innerHTML =
      "Please enter your last name.";
  }
  // Email Error
  if (email.validity.valueMissing) {
    console.log("email valuemissing error");
    email.parentElement.children[2].classList.remove("hidden");
    email.parentElement.children[1].classList.remove("hidden");
    email.parentElement.children[2].innerHTML =
      "Please enter the email address.";
  } else if (email.validity.typeMismatch) {
    console.log("email type mismatch error");
    email.parentElement.children[2].classList.remove("hidden");
    email.parentElement.children[1].classList.remove("hidden");
    email.parentElement.children[2].textContent =
      "Please provide a valid email address.";
  }
  // Password Error
  if (!validPassword.test(password.value)) {
    console.log("PASS ERROR!!!");
    password.parentElement.children[2].classList.remove("hidden");
    password.parentElement.children[1].classList.remove("hidden");
    password.parentElement.children[2].innerHTML =
      "Please enter a password with minimum 8 characters at least one number and one letter..";
  }
}
// First Name Input Event Listener
firstName.addEventListener("input", function () {
  if (firstName) {
    console.log("First Name Not Empty!");
    firstName.parentElement.children[1].classList.add("hidden");
    firstName.parentElement.children[2].classList.add("hidden");
  } else {
    displayError();
    console.log("First Name Empty!");
  }
});
// Last Name Input Event Listener
lastName.addEventListener("input", function () {
  if (lastName) {
    console.log("Last Name Not Empty!");
    lastName.parentElement.children[1].classList.add("hidden");
    lastName.parentElement.children[2].classList.add("hidden");
  } else {
    displayError();
    console.log("Last Name Empty!");
  }
});
// Email Input Event Listener
email.addEventListener("input", function () {
  if (email.validity.valid) {
    email.parentElement.children[2].classList.add("hidden");
    email.parentElement.children[1].classList.add("hidden");
  } else {
    displayError();
  }
});
// Password Input Event Listener
console.log(password.value);
password.addEventListener("input", function () {
  if (validPassword.test(password.value)) {
    console.log("password matches");
    password.parentElement.children[1].classList.add("hidden");
    password.parentElement.children[2].classList.add("hidden");
  } else {
    console.log("password NOT  match");
    displayError();
  }
});
// Submit Input Event Listener
form.addEventListener("submit", function (e) {
  // First Name Submit
  if (firstName.value === "") {
    displayError();
    e.preventDefault();
  }
  // Last Name Submit
  if (lastName.value === "") {
    displayError();
    e.preventDefault();
  }
  // Email Submit
  if (!email.validity.valid) {
    displayError();
    e.preventDefault();
  }
  // Password Submit
  if (!validPassword.test(password.value)) {
    displayError();
    e.preventDefault();
  }
});
