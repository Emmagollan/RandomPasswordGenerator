// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  window.prompt("Would you like you password to be between 8 - 128 characters?")
  window.prompt("Would you like numbers in your password?")
  window.prompt("would you like uppercase letters in your password?")
  window.prompt("would you like lowercase letters in your password?")
  window.prompt("would you like special characters in your password?")


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
