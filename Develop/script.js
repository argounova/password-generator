// User variables
var passwordLength;

var lowercase;
// var uppercase;
// var numeric;
// var special;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");

// Write password to the #password input
function writePassword() {
  // Use this number to determine the length of the password
  let passwordLength = (parseInt(prompt("Enter a number between 8 and 128"))) - 1;
  
  // Password variables
  var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var alphaUpper = alpha.map(element => {
    return element.toUpperCase();
  });
  var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]", ";"];
  // This variable will be a string including all of the characters chosen by the user
  var allChars = alpha.concat(numeric, specialChars, alphaUpper);
  var includedChars = allChars.join(""); /*alpha.join(""), numeric.join("");*/
  var password = "";
  
  // If lowercase is true, the alpha variable is added to the password array
  // lowercase = confirm("Include lowercase letters?");
  // lowercase = alpha

  // If uppercase is true, the alpha variable is converted to uppercase and is added to the password array
  // uppercase = confirm("Include uppercase letters?")

  // If number is true, the numeric variable is added to the password array
  // number = confirm("Include numbers?")

  // If special is true, the characters variable is added to the password array
  // special = confirm("Include special characters?")
  
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * includedChars.length);
    password += includedChars.substring(randomNumber, randomNumber +1);
   }
   document.getElementById("password").value = password;
   
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
