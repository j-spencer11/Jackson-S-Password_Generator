// Assignment Code
var generateBtn = document.querySelector("#generate");

// Starting Values
var numberOfCharacters = 0;
var specialCharsAllowed = false;
var numbersAllowed = false;
var lowerCaseAllowed = false;
var upperCaseAllowed = false;
function askAllTheQuestions() {
  // Finding out length of password and cancelling prompt if choosing to
  var askNumberOfCharacters = window.prompt("How many characters would you like in the password? (Min. of 8, Max. of 128");
  console.log(askNumberOfCharacters)
  numberOfCharacters = parseInt(askNumberOfCharacters);
  if (!isNaN(numberOfCharacters)) {



   
    console.log(numberOfCharacters);

    if (numberOfCharacters >= 8 && numberOfCharacters <= 128) {



      // Finding out if special characters want to be included
      specialCharsAllowed = window.confirm("Would you like special characters included? ('Ok' for yes. 'Cancel' for no)");

      console.log(specialCharsAllowed);

      //Finding out if numbers want to be included
      numbersAllowed = window.confirm("Would you like numbers included? ('Ok' for yes. 'Cancel' for no)");

      console.log(numbersAllowed);

      //Finding out if lowercase letters want to be included
      lowerCaseAllowed = window.confirm("would you like lowercase letters included? ('Ok' for yes. 'Cancel' for no)");

      console.log(lowerCaseAllowed);

      //Finding out if uppercase letters are allowed
      upperCaseAllowed = window.confirm("Would you like uppercase letters included? ('Ok' for yes. 'Cancel' for no)");

      console.log(upperCaseAllowed);
    } else {
      window.alert("Value must be between 8 and 128 characters!");
      askAllTheQuestions();
    }
  }
}
//Functions for getting type of characters preferred

function getSpecialCharacter() {
  var symbols = "";
  if (specialCharsAllowed) {
    symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  return symbols;
}

function getNumber() {
  var numbers = "";
  if (numbersAllowed) {
    numbers = "1234567890";
  }
  return numbers;
}

function getLowerCase() {
  var lower = "";
  if (lowerCaseAllowed) {
    lower = "qwertyuiopasdfghjklzxcvbnm";
  }
  return lower;
}

function getUpperCase() {
  var upper = "";
  if (upperCaseAllowed) {
    upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  }
  return upper;
}

function characterSet() {
  var characters = (getSpecialCharacter() + getNumber() + getLowerCase() + getUpperCase());
  return characters;
}
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  askAllTheQuestions();

  var result = "";
  var allCharacters = characterSet();

  for (var i = 0; i < numberOfCharacters; i++) {
    result += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    console.log(result)
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


