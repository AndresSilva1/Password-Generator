// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Whats up You clicked a button!");
  var passwordHere =


    //1. I am prompted about the password criteria
    //  a. create a variable that can be returned
    //  b. password should be 8-128 character
    //  c. Password needs lowercase, uppercase, numbers, special characters

    alert("Password must be 8-128 characters");
  alert("Password needs at least 1 of each: uppercase, lowercase, number, and special character");

  //2. Input needs to be validated
  let passwordLength = 128;
  let passwordCrit = 
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("requirements meet")
  }
  else if (anotherCondition) {
    statement
  }
  //3. Password is spawned once criteria is met 

  return "Generate password will go here Man!";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
