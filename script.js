// Assignment code here

var confirmLength;
var confirmLowercase;
var confirmUppercase;
var confirmNumeric;
var confirmSpecialChar;

function generatePassword(){
   confirmLength = prompt(("How many characters would you like it to contain?"))
   confirmLowercase = confirm("Would you like to include Lowercase characters?")
   confirmUppercase = confirm("Would you like to include Uppercase characters?")
   confirmNumeric = confirm ("Would you like to include Numbers?")
   confirmSpecialChar = confirm("Would you like to include Special characters?")
  
  if (confirmLength <=7 || confirmLength >= 129 ){
    alert("Length of password may not be longer than 129 characters and shorter than 7.")
  }

  if (confirmLowercase === false || confirmUppercase === false || confirmNumeric === false
    || confirmSpecialChar === false){
      passwordText.value = password;
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


