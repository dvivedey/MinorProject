// JavaScript code for form validation
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  // Prevent form submission if validation fails
  if (!validateForm()) {
    event.preventDefault();
  }
});

function validateForm() {
  resetValidation();

  let isValid = true;

  // Validate name
  const nameInput = document.getElementById('name');
  if (!nameInput.value.trim()) {
    isValid = false;
    nameInput.classList.add('is-invalid');
  }

  // Validate date of birth
  const dobInput = document.getElementById('dob');
  if (!dobInput.value) {
    isValid = false;
    dobInput.classList.add('is-invalid');
  }

  // Validate gender (at least one option must be selected)
  const genderInputs = document.querySelectorAll('input[name="gender"]:checked');
  if (genderInputs.length === 0) {
    isValid = false;
    document.getElementById('male').classList.add('is-invalid');
    document.getElementById('female').classList.add('is-invalid');
    document.getElementById('nonBinary').classList.add('is-invalid');
  }

  // Validate email
  const emailInput = document.getElementById('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    isValid = false;
    emailInput.classList.add('is-invalid');
  }

  // Validate phone number
  const phoneInput = document.getElementById('phone');
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneInput.value)) {
    isValid = false;
    phoneInput.classList.add('is-invalid');
  }

  // Validate street address
  const streetAddressInput = document.getElementById('streetAddress');
  if (!streetAddressInput.value.trim()) {
    isValid = false;
    streetAddressInput.classList.add('is-invalid');
  }

  // Validate city
  const cityInput = document.getElementById('city');
  if (!cityInput.value.trim()) {
    isValid = false;
    cityInput.classList.add('is-invalid');
  }

  // Validate state
  const stateInput = document.getElementById('state');
  if (!stateInput.value) {
    isValid = false;
    stateInput.classList.add('is-invalid');
  }

  // Validate zip code
  const zipInput = document.getElementById('zip');
  const zipRegex = /^\d{5}$/;
  if (!zipRegex.test(zipInput.value)) {
    isValid = false;
    zipInput.classList.add('is-invalid');
  }

  return isValid;
}

function resetValidation() {
  const inputs = document.querySelectorAll('.form-control');
  inputs.forEach(input => {
    input.classList.remove('is-invalid');
  });
}




  // Add validation for other fields as per instructions

  return isValid;
}

function resetValidation() {
  // Remove 'is-invalid' class from all input fields
  const inputs = document.querySelectorAll('.form-control');
  inputs.forEach(input => {
    input.classList.remove('is-invalid');
  });
}


// JavaScript code for form submission handling
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Validate form
  if (!validateForm()) {
    return;
  }

  // If form is valid, proceed with submission
  const formData = {
    name: document.getElementById('name').value,
    // Add other form fields here
  };

  // Process the form data (e.g., send it to a server, display confirmation message)
  console.log('Form submitted:', formData);

  // Display confirmation message (you can customize this)
  alert('Thank you for registering!');
});


// JavaScript code for form submission handling
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Validate form
  if (!validateForm()) {
    return;
  }

  // If form is valid, proceed with submission
  const formData = {
    name: document.getElementById('name').value,
    // Add other form fields here
  };

  // Process the form data (e.g., send it to a server, display confirmation message)
  console.log('Form submitted:', formData);

  // Display confirmation message (you can customize this)
  alert('Thank you for registering!');
});
