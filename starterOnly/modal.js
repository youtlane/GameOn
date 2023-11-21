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
const firstName = document.getElementById('first').value;
const firstNameForm = document.getElementById('firstNameForm');
const lastName = document.getElementById('last').value;
const lastNameForm = document.getElementById('lastNameForm');
const email = document.getElementById('email').value;
const emailForm = document.getElementById('emailForm');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const birthdate = document.getElementById('birthdate').value;
const birthdateForm = document.getElementById('birthdateForm');
const quantity = document.getElementById('quantity').value;
const quantityForm = document.getElementById('quantityForm');
const selectedLocation = document.querySelector('input[name="location"]:checked');
const selectedLocationForm = document.getElementById('selectedLocationForm');
const checkbox1 = document.getElementById('checkbox1');
const checkbox1Form = document.getElementById('checkbox1Form');




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


// Fonction submit du formulaire
function validate() {
  // Vérification de la validation du formulaire avant submit
  if (this.validateForm()) {
    document.forms["reserve"].submit();
  } else {
    return false;
  }
}


// Fields verification
function verifInput(condition, nameForm, errorExist, errorMessage) {
  if (condition) {
    nameForm.setAttribute('data-error-visible', 'true');
    nameForm.setAttribute('data-error', errorMessage);
    errorExist = true;
  } else {
    nameForm.setAttribute('data-error-visible', 'false');
  }
}


function validateForm() {
  let errorExist = false;

  // Validate First Name
  
  const firstNamecondition = firstName.length < 2;
  const firstNameError = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.'
  verifInput(firstNamecondition, firstNameForm, errorExist, firstNameError);

  // Validate Last Name
  
  const lastNameCondition = lastName.length < 2
  const lastNameError = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
  verifInput(lastNameCondition, lastNameForm, errorExist, lastNameError);

  // Validate Email
  
  
  const emailCondition = !emailRegex.test(email);
  const emailError = 'Email non valide.'
  verifInput(emailCondition, emailForm, errorExist, emailError);

  // Validate birthdate
  
  const birthdateCondition = !birthdate;
  const birthdateError = 'Vous devez entrer votre date de naissance.';
  verifInput(birthdateCondition , birthdateForm, errorExist, birthdateError);

  // Validate Quantity
  
  const quantityCondition = quantity.length < 0
  const quantityError = 'Veuillez entrer une numéro.'
  verifInput(quantityCondition, quantityForm, errorExist, quantityError);

  // Validate Location
  
  const loacationCondition = !selectedLocation ;
  const locationError = 'Vous devez choisir une option.'
  verifInput(loacationCondition, selectedLocationForm, errorExist, locationError);

  // Validate conditions générales
  
  const checkboxCondition = !checkbox1.checked ;
  const checkboxError = 'Vous devez vérifier que vous acceptez les termes et conditions.'
  verifInput(checkboxCondition, checkbox1Form, errorExist, checkboxError);

  // Si il existe un problème je ne submit pas 
  if (errorExist) {
    return false;
  }

  // Si tout est OK je submit le formulaire
  // document.forms["reserve"].submit();
}



