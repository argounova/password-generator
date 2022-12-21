let generateBtn = document.querySelector('#generate');
let password = document.getElementById('password');

function generatePassword() {
  let passwordLength = document.getElementById('passwordLength').value;
  let passwordChars = new Array();
  let selections = document.querySelectorAll('input[type=checkbox');

  // Creates an alert window if the user chooses a number outside of the given range  
  if (passwordLength < 7 || passwordLength >= 128) {
    alert("Please choose a number between 8 and 128!");
    return;
  }

  for (let i = 0; i < selections.length; i++) {
    if (selections[i].checked) {
      passwordChars.push(selections[i].value);
    }
  }
  let newPassword = passwordChars.join("");

  // For loop to randomize selection of characters
  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * newPassword.length);
    password += newPassword.substring(randomNumber, randomNumber +1);
   }
   document.getElementById('password').value = password;
}

generateBtn.addEventListener('click', generatePassword);