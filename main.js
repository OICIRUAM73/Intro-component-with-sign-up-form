function processForm(e) {
  if (e.preventDefault) e.preventDefault();
  checkEmptyValue(document.getElementById("firstName"));
  checkEmptyValue(document.getElementById("lastName"));
  checkEmptyValue(document.getElementById("password"));
  validateEmail(document.getElementById("email"));
  return false;
}

function checkEmptyValue(element) {
  var parentElement = element.parentElement;
  if (element.value === "") {
    parentElement.classList.add("has-error");
  } else {
    parentElement.classList.remove("has-error");
  }
}

function validateEmail(element) {
  var parentElement = element.parentElement;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(element.value)) {
    parentElement.classList.remove("has-error");
  } else {
    parentElement.classList.add("has-error");
  }
}

var form = document.getElementById('my-form');
if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}