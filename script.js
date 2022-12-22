let generateBtn = document.querySelector('#generate');
// let password = document.getElementById('password');

function generatePassword() {
  let newPassword = "";
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
  passwordChars = passwordChars.join("");
  // For loop to randomize selection of characters
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * passwordChars.length);
    newPassword += passwordChars.substring(randomNumber, randomNumber + 1);
   }
   console.log(newPassword);
   document.getElementById('password').value = newPassword;
}

generateBtn.addEventListener('click', generatePassword);