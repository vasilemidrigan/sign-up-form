"use strict";

const form = document.getElementById("form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const password = document.getElementById("email");
const email = document.getElementById("password");

form.addEventListener("click", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const passwordValue = password.value.trim();
  const emailValue = email.value.trim();
}
