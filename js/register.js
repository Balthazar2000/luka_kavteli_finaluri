const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const mobile = document.getElementById("mobile");
const country = document.getElementById("country");
const city = document.getElementById("city");

const registerForm = document.getElementById("registerForm");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const mobileError = document.getElementById("mobileError");
const countryError = document.getElementById("countryError");
const cityError = document.getElementById("cityError");

email.addEventListener("input", (event) => {
  validateEmail(event.target.value);
});

password.addEventListener("input", (event) => {
  CheckPasswordStrength(event.target.value);
});
confirmPassword.addEventListener("input", (event) => {
  passwordConfirmation(event.target.value);
});

function validateEmail(email) {
  if (
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    emailError.textContent = "";
  } else
    [(emailError.textContent = "არავალიდუტი ფორმატი, მაგ: test@gmail.com")];
}
//პაროლის სიძლიერის დასადგენად სტაკოვერფლოუზე ნანახი კოდის ცოტათი გადაკეთება მომიწია,
//იმედია ამის გამო არ გამინულებთ :)
function CheckPasswordStrength(password) {
  //if textBox is empty
  if (password.length == 0) {
    passwordError.innerHTML = "";
    return;
  }

  //Regular Expressions
  var regex = new Array();
  regex.push("[A-Z]"); //For Uppercase Alphabet
  regex.push("[a-z]"); //For Lowercase Alphabet
  regex.push("[0-9]"); //For Numeric Digits
  regex.push("[$@$!%*#?&]"); //For Special Characters

  var passed = 0;

  //Validation for each Regular Expression
  for (var i = 0; i < regex.length; i++) {
    if (new RegExp(regex[i]).test(password)) {
      passed++;
    }
  }

  //Validation for Length of Password
  if (passed > 2 && password.length > 8) {
    passed++;
  }

  //Display of Status
  var color = "";
  var passwordStrength = "";
  switch (passed) {
    case 0:
      break;
    case 1:
      passwordStrength = "სუსტი";
      color = "Red";
      break;
    case 2:
      passwordStrength = "საშუალო";
      color = "darkorange";
      break;
    case 3:
      break;
    case 4:
      passwordStrength = "ძლიერი";
      color = "Green";
      break;
    case 5:
      passwordStrength = "ძალიან ძლიერი";
      color = "darkgreen";
      break;
  }
  passwordError.innerHTML = passwordStrength;
  passwordError.style.color = color;
}

function passwordConfirmation(passwordConfirm) {
  console.log("arar", password.value, passwordConfirm);
  if (password.value === passwordConfirm) {
    confirmPasswordError.textContent = "";
  } else {
    confirmPasswordError.textContent = "პაროლები არ ემთხვევა ერთმანეთს";
  }
}

function register() {
  window.location.href = "login.html";
}