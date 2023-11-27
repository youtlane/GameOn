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
const formsReser = document.querySelector(".formsReservation");
const modalok = document.querySelector(".hide");
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
//********************************** a refaire le  close of passed modal icon */
// close form
closeIcon.addEventListener('click', function () {
  // Masquer le formulaire
  console.log('closeIcon');
  modalbg.style.display = "none";  
  modalok.style.display = "none";

  
});
//********************************************************************************* */


// close modal passed btn fermer
 const mdpassedclose = document.getElementById('mdclose');
 mdpassedclose.addEventListener('click', function () {
  console.log('closeIcon');

  modalbg.style.display = "none";
  
});


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function verifInput(condition, nameForm, errorMessage) {
  console.log("verifInput");
  return new Promise((resolve) => {
    console.log("verifInput in", condition);

    if (condition) {
      nameForm.setAttribute('data-error-visible', 'true');
      nameForm.setAttribute('data-error', errorMessage);
      resolve(true); // Error exists
    } else {
      nameForm.setAttribute('data-error-visible', 'false');
      resolve(false); // No error
    }
  });
}

async function validateForm() {
  console.log('o ');
  let errorExist = false;

  // Validate First Name
  const firstName = document.getElementById('first').value;
  const firstNameForm = document.getElementById('firstNameForm');
  const firstNameCondition = firstName.length < 2;
  const firstNameError = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
  if (await verifInput(firstNameCondition, firstNameForm, firstNameError)) {
    errorExist = true;
  }

  // Validate Last Name
  const lastName = document.getElementById('last').value;
  const lastNameForm = document.getElementById('lastNameForm');
  const lastNameCondition = lastName.length < 2;
  const lastNameError = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
  if (await verifInput(lastNameCondition, lastNameForm, lastNameError)) {
    errorExist = true;
  }

  // Validate Email
  const email = document.getElementById('email').value;
  const emailForm = document.getElementById('emailForm');
  const emailCondition = !emailRegex.test(email);
  const emailError = 'Email non valide.';
  if (await verifInput(emailCondition, emailForm, emailError)) {
    errorExist = true;
  }

  // Validate birthdate
  const birthdate = document.getElementById('birthdate').value;
  const birthdateForm = document.getElementById('birthdateForm');
  const birthdateCondition = !birthdate || new Date(birthdate) < new Date('1900-01-01') || new Date(birthdate) > new Date('2005-12-31');
  const birthdateError = 'Vous devez entrer votre date de naissance.';
  if (await verifInput(birthdateCondition, birthdateForm, birthdateError)) {
    errorExist = true;
  }

  // Validate Quantity
  const quantity = document.getElementById('quantity').value;
  const quantityForm = document.getElementById('quantityForm');
  const quantityCondition = quantity === '' || quantity.length < 0;
  const quantityError = 'Veuillez entrer un numéro.';

  console.log();
  if (await verifInput(quantityCondition, quantityForm, quantityError)) {
    errorExist = true;
  }

  // Validate Location
  const selectedLocation = document.querySelector('input[name="location"]:checked');
  const selectedLocationForm = document.getElementById('selectedLocationForm');
  const locationCondition = !selectedLocation;
  const locationError = 'Vous devez choisir une option.';
  if (await verifInput(locationCondition, selectedLocationForm, locationError)) {
    errorExist = true;
  }

  // Validate conditions générales
  const checkbox1 = document.getElementById('checkbox1');
  const checkbox1Form = document.getElementById('checkbox1Form');
  const checkboxCondition = !checkbox1.checked;
  const checkboxError = 'Vous devez vérifier que vous acceptez les termes et conditions.';
  if (await verifInput(checkboxCondition, checkbox1Form, checkboxError)) {
    errorExist = true;
  }


  console.log('isValid ', errorExist);

  // Resolve with the result of the validation
  return !errorExist;
}

async function validate() {
  event.preventDefault();

  // Empêcher le comportement de soumission par défaut du formulaire

  try {
    const isValid = await validateForm();
    console.log("xmen", isValid);
    if (isValid) {
      //document.forms["reserve"].submit();
      formsReser.style.display = "none";
      modalok.style.display = "block";
    }
  } catch (error) {
    console.error('Une erreur est survenue lors de la validation:', error);
  }
}
