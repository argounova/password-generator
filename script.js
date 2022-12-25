let generateBtn = document.querySelector('#generate');
let copyBtn = document.querySelector('#copyClipboard');
let contactForm = document.getElementById('contact-form');
let navContact = document.getElementById('nav-contact');
let navAbout = document.getElementById('nav-about');

$('#staticBackdrop').on('hidden.bs.modal', function () {
  $('input[type=checkbox]').each(function() {
    this.checked = false;
  });
  $('input[type=text]').each(function() {
    this.value = "";
  });
});

function navigateContact(e) {
  e.preventDefault();
  $('#password-section').hide();
  $('#about-section').hide();
  $('#contact-section').show();
}

function navigateAbout(e) {
  e.preventDefault();
  $('#password-section').hide();
  $('#about-section').show();
  $('#contact-section').hide();
}

function contactSubmit(e) {
  e.preventDefault();
  emailjs.init('ZElOBNy_cU2ZofiP0');
  console.log(this);
  this.contact_number.value = Math.random() * 100000 | 0;
  emailjs.sendForm('service_peaz7nq', 'contact_formPasswordGen', this)
    .then(function() {
      console.log('Email sent');
    }, function(error) {
      console.log('Email failed to send...', error);
    });
}

function copyClipboard() {
  let copyPassword = document.getElementById('password');
  copyPassword.select();
  copyPassword.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyPassword.value);
}

function generatePassword() {
  let newPassword = "";
  let passwordLength = document.getElementById('passwordLength').value;
  let passwordChars = new Array();
  let selections = document.querySelectorAll('input[type=checkbox]');

  // Creates an alert window if the user chooses a number outside of the given range  
  if (passwordLength < 7 || passwordLength >= 128) {
    alert("Please choose a number between 8 and 128!");
    document.getElementById('passwordLength').focus();
    return false;
  }
  for (let i = 0; i < selections.length; i++) {
    if (selections[i].checked) {
      passwordChars.push(selections[i].value);
    }
  }
  passwordChars = passwordChars.join("");
  // For loop to randomize selection of characters
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * passwordChars.length);
    newPassword += passwordChars.substring(randomNumber, randomNumber + 1);
   }
   console.log(newPassword);
   document.getElementById('password').value = newPassword;
  
  // Displays the copy button
  $('#copyClipboard').show();
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyClipboard);
contactForm.addEventListener('submit', contactSubmit);
navContact.addEventListener('click', navigateContact);
navAbout.addEventListener('click', navigateAbout);