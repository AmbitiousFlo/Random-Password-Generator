// Assignment code here
var generateBtn = document.querySelector("#generate");

// create variable to save special characters
// create variable to save numbers
// create variable for lowercase all letters from A thru Z 
// create variable for uppercase all letters from A thru Z 

var lowerCase = ['abcdefghijklmnopqrstuvwxyz']
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var number = ['0123456789']
var specialCharacter = ['!@#$%^&*()_+=-[]<>?/']

function generatePassword()
var savedPassword = ""
var passwordSize = window.prompt("choose a password size between 8 and 128 characters")

if (passwordSize >= 8 && passwordSize <= 128) {
  var isspecialCharacter = window.confirm("Do you want to include special characters in your password")
  var islowerCase = window.confirm("Do you want to include lowecase characters in your password")
  var isupperCase = window.confirm("Do you want to include uppercase characters in your password")
  var isnumber = window.confirm("Do you want to include numbers in your password")


  if (isspecialCharacter === true) {
    var randomIndex = Math.floor(Math.random() * specialCharacter.length)
    savedPassword = savedPassword + specialCharacter[randomIndex]
  }

  if (islowerCase === true) {
    var randomIndex = Math.floor(Math.random() * lowerCase.length)
    savedPassword = savedPassword + lowerCase[randomIndex]
  }

  if (isupperCase === true) {
    var randomIndex = Math.floor(Math.random() * upperCase.length)
    savedPassword = savedPassword + upperCase[randomIndex]
  }

  if (isnumber === true) {
    var randomIndex = Math.floor(Math.random() * number.length)
    savedPassword = savedPassword + number[randomIndex]
  }

  if (isspecialCharacter === false && isnumber === false && isupperCase === false && islowerCase === false)
    window.alert("You must pick one character type")
  return

} else {
  window.alert("Sorry, you are outside the password range")
}
return savedPassword

// First prompt (window.prompt - user input) - ask user how many characters they would like in their password?
// - If the password size is outside of 8 - 128 characters, you alert the user that says "invalid"

// second prompt (window.confirm - boolean -true or false ) - confirm special character

// third prompt (window.confirm - boolean -true or false ) - confirm numbers character

// fourth prompt (window.confirm - boolean -true or false ) - confirm lowercase character

// fifth prompt (window.confirm - boolean -true or false ) - confirm uppercase character

// ------------------------------------------------------------------------------------------------------------------------

// varuserLength = window.prompt("Please provide the size of your password")

// var islowerCase=window.confirm("Include Lowercase")

// window.alert("invalid")

// console.log(userLength)

// console.log(islowerCase)

// Write password ro #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // return the final password

  passwordText.value = password;
}

function getPrompts() {
  characterLength = prompt("How many characters do you want your password to be? (8-128)");

  if (isNaN(characterLength) || characterLength > 128) {
    alert("Character length has to be a number, 8 - 128 digits. Please try again.");
    return false;
  }

  if (confirm("Would you like lowercase letters in your password?")) {
    choiceAr = choiceAr.concat(lowerCase);
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    choiceAr = choiceAr.concat(upperCase);
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceAr = choiceAr.concat(numbers);
  }
  if (confirm("Would you like symbols in your password?")) {
    choiceAr = choiceAr.concat();
  }
  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
