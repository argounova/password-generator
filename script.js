let generateBtn = document.querySelector('#generate');
let password = document.getElementById('password');

function generatePassword() {
  let passwordLength = document.getElementById('passwordLength').value;
  let passwordChars = [];
  let includedChars = [];
  let numericChars = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]", ";"];
    // Creates an alert window if the user chooses a number outside of the given range  
  if (passwordLength < 7 || passwordLength >= 128) {
    alert("Please choose a number between 8 and 128!");
    return;
  }
    // If lowercase is true, alpha is added to the password array
    // If lowercase is false, password array is set equal to the passwordChars array     
  if (document.getElementById('firstCheckboxStretched').checked) {
    passwordChars.push(document.getElementById('firstCheckboxStretched').value);
    // passwordChars.concat(alphaChars.map(element => {
    //   return element.toLowerCase()})).join("");
    console.log(passwordChars);
    // console.log(includedChars);
  } else {
    passwordChars = alphaChars;
    console.log(passwordChars);
    // console.log(includedChars);
  }
    // If uppercase is true, the alpha letiable is converted to uppercase and is added to the password array
    // If uppercase is false, the password array is set equal to the previous array
  if (document.getElementById('secondCheckboxStretched').checked) {
    includedChars2 = (passwordChars.concat(alphaChars).join("")) + includedChars;
    console.log(passwordChars);
    console.log(includedChars2);
  } else {
    includedChars2 = includedChars1;
    console.log(passwordChars);
    console.log(includedChars2);
  }
  // If number is true, the numeric letiable is added to the password array
  // If number is false, the password array is set equal to the previous array
  if (document.getElementById('thirdCheckboxStretched').checked) {
    includedChars3 = passwordChars.concat(numeric).join("") + includedChars2;
    console.log(passwordChars);
    console.log(includedChars3);
  } else {
    includedChars3 = includedChars2;
    console.log(passwordChars);
    console.log(includedChars3);
  }
  // If special is true, the characters letiable is added to the password array
  // If special is false, the password array is set equal to the previous array
  if (document.getElementById('fourthCheckboxStretched').checked) {
    includedChars4 = passwordChars.concat(specialChars.join("")) + includedChars3;
    console.log(passwordChars);
    console.log(includedChars4);
  } else {
    includedChars4 = includedChars3;
    console.log(passwordChars);
    console.log(includedChars4);
  }
  // For loop to randomize selection of characters
  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * includedChars4.length);
    password += includedChars4.substring(randomNumber, randomNumber +1);
   }
   document.getElementById('password').value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', generatePassword);