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
  const firstName = document.getElementById('first').value;
  const firstNameError = document.querySelector('.formData[data-error="Erreur de prénom"]');
  let errorExist = false;
  
  if (firstName.length < 2) {
    firstNameError.setAttribute('data-error-visible', 'true');
    errorExist = true;
  } else {
    firstNameError.setAttribute('data-error-visible', 'false');
  }

  // Validate Last Name
  const lastName = document.getElementById('last').value;
  const lastNameError = document.querySelector('.formData[data-error="Erreur de nom"]');
  if (lastName.length < 2) {
    lastNameError.setAttribute('data-error-visible', 'true');
    errorExist = true;
  } else {
    lastNameError.setAttribute('data-error-visible', 'false');
  }

  // Validate Email
  const email = document.getElementById('email').value;
  const emailError = document.querySelector('.formData[data-error="Mail non valide"]')
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.setAttribute('data-error-visible', 'true');
    errorExist = true;
  } else {
    emailError.setAttribute('data-error-visible', 'false');
  }

  // Validate Quantity
  const quantity = document.getElementById('quantity').value;
  const quantityError = document.querySelector('.formData[data-error="Quantité non valide"]');
  console.log(document.getElementById('quantity').value, quantity === '', isNaN(quantity));
  if (quantity === '' || quantity < 0) {
    quantityError.setAttribute('data-error-visible', 'true');
    errorExist = true;
  } else {
    quantityError.setAttribute('data-error-visible', 'false');
  }
  
  // Validate Location
  const selectedLocation = document.querySelector('input[name="location"]:checked');
  const selectedLocationError = document.querySelector('.formData[data-error="Erreur de localisation"]');
  if (!selectedLocation) {
    selectedLocationError.setAttribute('data-error-visible', 'true');
    errorExist = true;
  } else {
    selectedLocationError.setAttribute('data-error-visible', 'false');
  }

  // Validate conditions générales
  const checkbox1 = document.getElementById('checkbox1');
  const checkbox1Error = document.querySelector('.formData[data-error="Erreur de conditions générales"]');
  if (!checkbox1.checked) {
    checkbox1Error.setAttribute('data-error-visible', 'true');
    errorExist = true;
  } else {
    checkbox1Error.setAttribute('data-error-visible', 'false');
  }
  
  // Si il existe un problème je ne submit pas
  if (errorExist) {
    return false;
  }

  // Si tout est OK je submit le formulaire
  document.forms["reserve"].submit();
}


function validate() {
  console.log('validate');
}
