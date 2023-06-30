var generateBtn = document.querySelector("#generate");

// create variable to save special characters
// create variable to save numbers
// create variable for lowercase all letters from A thru Z 
// create variable for uppercase all letters from A thru Z 

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+=-[]<>?/";

function generatePassword() {
  var savedPassword = "";
  var passwordSize = window.prompt("Choose a password between 8 and 128 characters");

  // Check if password size is within the valid range
  if (passwordSize >= 8 && passwordSize <= 128) {

    var isSpecialCharacter = window.confirm("Do you want to include special characters in your password?");
    var isLowerCase = window.confirm("Do you want to include lowercase characters in your password?");
    var isUpperCase = window.confirm("Do you want to include uppercase characters in your password?");
    var isNumber = window.confirm("Do you want to include numbers in your password?");

    // Check if at least one character type is selected
    if (isSpecialCharacter || isLowerCase || isUpperCase || isNumber) {
      var availableCharacters = "";

      if (isSpecialCharacter) {
        availableCharacters += specialCharacters;
      }
      if (isLowerCase) {
        availableCharacters += lowerCase;
      }
      if (isUpperCase) {
        availableCharacters += upperCase;
      }
      if (isNumber) {
        availableCharacters += numbers;
      }

      // Generate the password
      for (var i = 0; i < passwordSize; i++) {
        var randomIndex = Math.floor(Math.random() * availableCharacters.length);
        savedPassword += availableCharacters[randomIndex];
      }
    } else {
      window.alert("You must pick at least one character");
      return "";
    }
  } else {
    window.alert("Uh oh! Something is wrong, you are outside the password range.");
    return "";
  }

  return savedPassword;
}

// Write password to #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);