// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

const randomGen = {
  lower: lowercaseLetter,
  upper: uppercaseLetter,
  number: number,
  symbol: randomSymbol
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function writePassword() {
  window.prompt("Would you like you password to be between 8 - 128 characters?")
  window.prompt("Would you like numbers in your password?")
  window.prompt("would you like uppercase letters in your password?")
  window.prompt("would you like lowercase letters in your password?")
  window.prompt("would you like special characters in your password?")
}


function lowercaseLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}

function uppercaseLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}

function number() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

function randomSymbol() {
  const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~" ;
  return Symbols[Math.floor(Math.random() * symbols.length)];

}


function writePassword() {
  genPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = genPassword;
}
