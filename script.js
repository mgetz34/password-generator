//generated alert messages 

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
  "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=",
  "+", "[", "]", "{", "}", ";", ":", "<", ">", "?", "/", "?", "|", "/", ".", ","];


// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  //alert, confirm; returns true/false, 

  var emptyArray = [];

  // GIVEN I need a new, secure password
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  var passwordLength = prompt("New Password Length? Must be between 8-128 characters")


  // THEN I choose a length of at least 8 characters and no more than 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid input");
    return null;
  }


  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and / or special characters

  var lowercaseConfirm = confirm("Include lowercase characters?")
  var uppercaseConfirm = confirm("Include uppercase characters?")
  var numbersConfirm = confirm("Include numbers?")
  var specialCharactersConfirm = confirm("Include special characters?")

  // WHEN I answer each confirm
  // THEN my input should be validated and at least one character type should be selected
  if (!lowercaseConfirm && !uppercaseConfirm && !numbersConfirm && !specialCharactersConfirm) {
    alert("Must select at least one of the former criteria");
    return null;
  }

  //as the below "ifs" become true, the contents of their respected arrays will be added to the emptyArray above

  if (lowercaseConfirm) {

  }
  if (uppercaseConfirm) {

  }
  if (numbersConfirm) {

  }
  if (specialCharactersConfirm) {

  }


  //The final array will consist of the requested UC, LC, #, and SCs the user requested

  //Then the final array will be randomized and set to a length specified by the user on the first prompt

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page


  return 'hello Michael'
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


