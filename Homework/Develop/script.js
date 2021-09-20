// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberOfCharacters;
var specialCharsAllowed;
var numbersAllowed;
var lowercaseAllowed;
var uppercaseAllowed;


/*    Pseudocoding----------
  1. Need to know how many characters the password will have
  2. Need to know are special characters included
  3. Need to know if numbers are included
  4. Need to know if uppercase letters are included
  5. Need to know if lowercase letters are included

  - Build final list of possible characters
  6. We need a way to store all possible characters allowed in the password 

  How can we build our password one letter at a time?
    For each character needed, grab a random element from the allowed list





*/

function askHowManyCharacters(){
//....
//...
}

function generatePassword(){
  var numberOfCharacters = window.prompt ("How many characters do you want in your password? (8-128)");
  var specialCharsAllowed = window.confirm ("Do you want special characters in your password?");
  var numbersAllowed = window.confirm ("Do you want numbers in your password?");
  var lowercaseAllowed = window.confirm ("Do you want lowercase letters in your password?");
  var uppercaseAllowed = window.confirm ("Do you want uppercase letters in your password?");
  
numberOfCharacters = parseInt(numberOfCharacters);
console.log (numberOfCharacters);

  var result = "";
  for ( var i = 0; i < numberOfCharacters; i++ ) {
    result += characterSet.charAt(Math.floor(Math.random() * 
    numberOfCharacters));
 }
  return result;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


