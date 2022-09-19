// Assignment code here
var allLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var allUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ['!','@', '#', '$', '%','^','&','*','~',];

var confirmLength = ''
var confirmLowerCase;
var confirmUpperCase;
var confirmNumeric;
var confirmSpecialChar;


function generatePassword(){
   confirmLength = prompt(("How many characters would you like it to contain?"))
   if (confirmLength <=7 || confirmLength >= 129 ){
    alert("Length of password may not be longer than 129 characters and shorter than 7.")
    
  }


    confirmLowerCase = confirm("Would you like to include Lowercase characters?");
    confirmUpperCase = confirm("Would you like to include Uppercase characters?");
    confirmNumeric = confirm ("Would you like to include Numbers?");
    confirmSpecialChar = confirm("Would you like to include Special characters?");

if (confirmLowerCase === false && confirmUpperCase === false && confirmNumeric === false && 
  confirmSpecialChar === false){ alert('Please chose at least one parameter')
    confirmLowerCase = confirm("Would you like to include Lowercase characters?");
    confirmUpperCase = confirm("Would you like to include Uppercase characters?");
    confirmNumeric = confirm ("Would you like to include Numbers?");
    confirmSpecialChar = confirm("Would you like to include Special characters?");
  }

  var passwordCharacters = ''

  if (confirmLowerCase){
    passwordCharacters = passwordCharacters.concat(allLower)
}

if (confirmUpperCase){
  passwordCharacters = passwordCharacters.concat(allUpper)
}

if (confirmNumeric) {
  passwordCharacters = passwordCharacters.concat(numbers)
}

if (confirmSpecialChar){
  passwordCharacters = passwordCharacters.concat(specialChar)
}

var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword
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



 