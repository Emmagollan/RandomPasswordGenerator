var generateBtn = document.querySelector("#generate");

function generatePassword() {

  let uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

  let resultArray = [];
  let userArray = [];

  //user will be prompted with these questions
  let lengthOfPassword = prompt ("Choose the length of your password, it must be between 8-128 characters");
  let numbers = confirm ("Would you like numbers in your password?");
  let uppercase = confirm ("Would you like uppercase letters in your password?");
  let lowercase = confirm ("Would you like lowercase letters in your password?");
  let specialCharacters = confirm ("Would you like special characters in your password?");

  if (numbers){
    resultArray = resultArray.concat(numbArray);
  
  }

  if (uppercase){
    resultArray = resultArray.concat(uppercaseArray);

  }

  if (lowercase){
    resultArray = resultArray.concat(lowercaseArray);

  }

  if (specialCharacters){
    resultArray = resultArray.concat(characterArray);

  }


  for (var i = 0; i < lengthOfPassword; i++) {
      userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 

  }

  return userArray.join("") ;

}

// Write password to the #password input
function writePassword() {
  
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
