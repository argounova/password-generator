// User variables
var passwordLength;
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");

function writePassword() {
  var empty = [];
  var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]", ";"];
  var password = "";

  // Use this number to determine the length of the password
  let passwordLength = (parseInt(prompt("Enter a number between 8 and 128"))) - 1;
  
  // If lowercase is true, the alpha variable is added to the password array
  if (confirm("Include lowercase letters?")) {
      includedChars1 = empty.concat(alpha).join("");
      console.log(empty);
      console.log(includedChars1);
  }
  // If uppercase is true, the alpha variable is converted to uppercase and is added to the password array
  if (confirm("Include uppercase letters?")) {
      includedChars2 = (empty.concat(alpha.map(element => {
      return element.toUpperCase()
      }).join(""))) + includedChars1;
      console.log(empty);
      console.log(includedChars2);
  }
  // If number is true, the numeric variable is added to the password array
  if (confirm("Include numbers?")) {
      includedChars3 = empty.concat(numeric).join("") + includedChars2;
      console.log(empty);
      console.log(includedChars3);
  }
  // If special is true, the characters variable is added to the password array
  if (confirm("Include special characters?")) {
      includedChars4 = empty.concat(specialChars.join("")) + includedChars3;
      console.log(empty);
      console.log(includedChars4);
  }
  // For loop to randomize selection of characters
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * includedChars4.length);
    password += includedChars4.substring(randomNumber, randomNumber +1);
   }
   document.getElementById("password").value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);