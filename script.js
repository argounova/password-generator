let generateBtn = document.querySelector('#generate');
let copyBtn = document.querySelector('#copyClipboard');

$('#staticBackdrop').on('hidden.bs.modal', function () {
  $('input[type=checkbox]').each(function() {
    this.checked = false;
  });
  $('input[type=text]').each(function() {
    this.value = "";
  });
});

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