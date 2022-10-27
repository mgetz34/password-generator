//generated alert messages 

alert("New Password Length? Must be between 8-128 characters")

alert("Include lowercase characters?")

alert("Include uppercase characters?")

alert("Include numbers?")

alert("Include special characters?")

//generated password variables 

var passwordLengthMin = (8);

var passwordLengthMax = (128);

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=",
"+", "[", "]", "{", "}", ";", ":", "<", ">", "?", "/", "?", "|", "/", ".", ","];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


