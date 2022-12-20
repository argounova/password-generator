// User variables
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");

function writePassword() {
  let passwordLength = document.getElementById('passwordLength').value;
  var empty = [];
  var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]", ";"];
  var password = "";
    // Creates an alert window if the user chooses a number outside of the given range  
  if (passwordLength < 7 || passwordLength >= 128) {
    alert("Please choose a number between 8 and 128!");
    return;
  }
    // If lowercase is true, the alpha variable is added to the password array
    // If lowercase is false, the password array is set equal to the empty array     
  if (document.getElementById('firstCheckboxStretched').checked) {
    includedChars1 = empty.concat(alpha).join("");
    console.log(empty);
    console.log(includedChars1);
  } else {
    includedChars1 = empty;
    console.log(empty);
    console.log(includedChars1);
  }
    // If uppercase is true, the alpha variable is converted to uppercase and is added to the password array
    // If uppercase is false, the password array is set equal to the previous array
  if (document.getElementById('secondCheckboxStretched').checked) {
    includedChars2 = (empty.concat(alpha.map(element => {
    return element.toUpperCase()
    }).join(""))) + includedChars1;
    console.log(empty);
    console.log(includedChars2);
  } else {
    includedChars2 = includedChars1;
    console.log(empty);
    console.log(includedChars2);
  }
  // If number is true, the numeric variable is added to the password array
  // If number is false, the password array is set equal to the previous array
  if (document.getElementById('thirdCheckboxStretched').checked) {
    includedChars3 = empty.concat(numeric).join("") + includedChars2;
    console.log(empty);
    console.log(includedChars3);
  } else {
    includedChars3 = includedChars2;
    console.log(empty);
    console.log(includedChars3);
  }
  // If special is true, the characters variable is added to the password array
  // If special is false, the password array is set equal to the previous array
  if (document.getElementById('fourthCheckboxStretched').checked) {
    includedChars4 = empty.concat(specialChars.join("")) + includedChars3;
    console.log(empty);
    console.log(includedChars4);
  } else {
    includedChars4 = includedChars3;
    console.log(empty);
    console.log(includedChars4);
  }
  // For loop to randomize selection of characters
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * includedChars4.length);
    password += includedChars4.substring(randomNumber, randomNumber +1);
   }
   document.getElementById('password').value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);