var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Whats up You clicked a button!");
  var passwordHere = "hello"

  // var obj = {
  //   name: "Andres",
  //   code: function(){
  //     console.log("I am coding")
  //   },
  //   age: 21,
  //   nested: {
  //     something: [{name: ""}]
  //   }
  // }

  // obj.nested.something[0].name
  //1. I am prompted about the password criteria
  //  a. create a variable that can be returned
  //  b. password should be 8-128 character
  //  c. Password needs lowercase, uppercase, numbers, special characters

  alert("Password must be 8-128 characters");
  alert("Password needs at least 1 of each: uppercase, lowercase, number, and special character");

  //2. Input needs to be validated
  let passwordLength = parseInt(prompt("How long is your password going to be?"));
  console.log(passwordLength)
  let minLen = 8
  let maxLen = 128
  if (isNaN(passwordLength) || passwordLength < minLen || passwordLength > maxLen) {
    console.log("requirements not met")
    return generatePassword()
  }

  let confirmLower = confirm("Do you want lowercase characters?")

  let confirmUpper = confirm("Do you want uppercase characters?")

  let confirmNumbers = confirm("Do you want numbers?")

  let confirmSpecialChar = confirm("Do you want special characters?")
  if (!confirmLower && !confirmUpper && !confirmNumbers && !confirmSpecialChar) {
    console.log("requirements not met")
    return generatePassword()
  }
  //3. Password is spawned once criteria is met 
  let possiblilties = []
  if (confirmLower) {
    possiblilties = possiblilties.concat(lowerCasedCharacters)
  }
  if (confirmUpper) {
    possiblilties = possiblilties.concat(upperCasedCharacters)
  }

  if (confirmNumbers) possiblilties = possiblilties.concat(numericCharacters)

  if (confirmSpecialChar) possiblilties = possiblilties.concat(specialCharacters);

  //two more if statements

  //select a random char out of possiblities in a loop for the lenght of the desired password
  let generatedPassword = ""
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * possiblilties.length)
    let randomChar = possiblilties[randomIndex]

    generatedPassword += randomChar
  }



  return generatedPassword;
}
//Two ways to solve: 1. Either enforce special characters
//2. re-run the generate password function.

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
