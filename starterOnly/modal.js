function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeIcon = document.querySelector(".close");


if (modalbg == null) throw new Error("No modal background found");
if (closeIcon == null) throw new Error("No close icon found");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close form
closeIcon.addEventListener('click', function () {
  // Masquer le formulaire
  modalbg.style.display = "none";
});


function validateForm() {
  let errorExist = false;
  
  // Validate First Name
  const firstName = document.getElementById('first').value;
  const firstNameForm = document.getElementById('firstNameForm');
  const conditionFirstName = firstName.length < 2;
  const firstNameError = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.'
  verifInput(conditionFirstName, firstNameForm, errorExist, firstNameError);

  // Validate Last Name
  const lastName = document.getElementById('last').value;
  const lastNameForm = document.getElementById('lastNameForm');
  const lastNameCondition = lastName.length < 2
  const lastNameError = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
  verifInput(lastNameCondition, lastNameForm, errorExist, lastNameError);


  // Validate Email
  const email = document.getElementById('email').value;
  const emailForm = document.getElementById('emailForm');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailForm.setAttribute('data-error-visible', 'true');
    emailForm.setAttribute('data-error', 'Email non valide.');
    errorExist = true;
  } else {
    emailForm.setAttribute('data-error-visible', 'false');
  }

  // Validate birthdate
  const birthdate = document.getElementById('birthdate').value;
  const birthdateForm = document.getElementById('birthdateForm');
  if (!birthdate) {
    birthdateForm.setAttribute('data-error-visible', 'true');
    birthdateForm.setAttribute('data-error', 'Vous devez entrer votre date de naissance.');
    errorExist = true;
  } else {
    birthdateForm.setAttribute('data-error-visible', 'false');
  }
  // Validate Quantity
  const quantity = document.getElementById('quantity').value;
  const quantityForm = document.getElementById('quantityForm');
  if (quantity === '' || quantity < 0) {
    quantityForm.setAttribute('data-error-visible', 'true');
    quantityForm.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
    errorExist = true;
  } else {
    quantityForm.setAttribute('data-error-visible', 'false');
  }
  
  // Validate Location
  const selectedLocation = document.querySelector('input[name="location"]:checked');
  const selectedLocationForm = document.getElementById('selectedLocationForm');
  if (!selectedLocation) {
    selectedLocationForm.setAttribute('data-error-visible', 'true');
    selectedLocationForm.setAttribute('data-error', 'Vous devez choisir une option.');
    errorExist = true;
  } else {
    selectedLocationForm.setAttribute('data-error-visible', 'false');
  }

  // Validate conditions générales
  const checkbox1 = document.getElementById('checkbox1');
  const checkbox1Form = document.getElementById('checkbox1Form');
  console.log('ppp ', checkbox1Form);
  if (!checkbox1.checked) {
    checkbox1Form.setAttribute('data-error-visible', 'true');
    checkbox1Form.setAttribute('data-error', 'Vous devez vérifier que vous acceptez les termes et conditions.');
    errorExist = true;
  } else {
    checkbox1Form.setAttribute('data-error-visible', 'false');
  }

  // Si il existe un problème je ne submit pas
  if (errorExist) {
    return false;
  }

  // Si tout est OK je submit le formulaire
  document.forms["reserve"].submit();
}


function verifInput(condition, nameForm, errorExist, errorMessage) {
  if (condition) {
    nameForm.setAttribute('data-error-visible', 'true');
    nameForm.setAttribute('data-error', errorMessage);
    errorExist = true;
  } else {
    nameForm.setAttribute('data-error-visible', 'false');
  }
}


function validate() {
  console.log('validate');
}
