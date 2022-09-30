// User variables
var charLength;
var lowercase;
var uppercase;
var numeric;
var special;
// Password variables
var length;
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]", ";"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let charLength = parseInt(prompt("Enter a number between 8 and 128"));
  if (charLength < 8 || charLength > 128) {
    alert("Please enter a number between 8 and 128");
  }
  let lowercase = prompt("Would you like to include lowercase letters?  Type 'yes' or 'no':");
  if (lowercase !== "yes" && lowercase !== "no") {
    alert("Please type yes or no");
  }
  let uppercase = prompt("Would you like to include uppercase letters?  Type 'yes' or 'no':");
  if (uppercase !== "yes" && uppercase !== "no") {
    alert("Please type yes or no");
  }
  let number = prompt("Would you like to include numbers?  Type 'yes' or 'no':");
  if (number !== "yes" && number !== "no") {
    alert("Please type yes or no");
  }
  let special = prompt("Would you like to include special characters?  Type 'yes' or 'no':");
  if (special !== "yes" && special !== "no") {
    alert("Please type yes or no");
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
