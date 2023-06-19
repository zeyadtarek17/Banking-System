const showAlert = (message) => {
  const alert = document.getElementById("a1");
  alert.style.visibility = "visible";
  alert.style.background = "red";
  alert.textContent = message;
  setTimeout(() => {
    alert.style.visibility = "hidden";
    alert.style.backgroundColor = "#0be49c";
    alert.textContent = "logged in successfully";
  }, 3000);
};

function validateRegistrationForm() {
  const fieldsArr = [
    "full name",
    "username",
    "national id",
    "address",
    "phone number",
    "email",
    "password",
    "password confirm",
  ];

  for (let i = 0; i < fieldsArr.length; i++) {
    const key = document.forms["myForm2"][fieldsArr[i]].value;
    if (key == "") {
      showAlert("please enter your " + fieldsArr[i]);
      return false;
    }
  }
  if (
    document.forms["myForm2"]["password"].value !=
    document.forms["myForm2"]["password confirm"].value
  ) {
    showAlert("wrong password confirmation");
    return false;
  }
  const alert = document.getElementById("a1");
  alert.style.visibility = "visible";
  alert.textContent = "signed up successfully";
  setTimeout(() => {
    window.location.replace("landingPage.html");
  }, 3000);
  return false;
}
