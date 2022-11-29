//Create varaibles for lower case, upper case, special case, and numerical characters

//Variables that will be used later when calling out.
var specialChars = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "/",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var numericalNums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var possibleChars = [];
var chosenPassword = "";

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
//Function to generate password with first prompt.
function generatePassword() {
  var passwordLength = window.prompt(
    "Please choose a number between 8-128 for your password's characters"
  );

  //isNaN is checking if it's not a number and paseInt is changing into an int.
  //Validates that the user's input is a number between 8 and 128, and that it is numeric.
  if (
    passwordLength < 8 ||
    passwordLength > 128 ||
    isNaN(parseInt(passwordLength))
  ) {
    window.alert("You will need to add a number between 8 and 128 to proceed");
    return;
  }

  //Generate password based on prompts with confirm interaction.
  var upperCaseChars = window.confirm(" Do you want any upper case letters?");
  var lowerCaseChars = window.confirm(" Do you want any lower case letters?");
  var symbolChars = window.confirm(" Do you want any special characters?");
  var numChars = window.confirm(" Do you want any numbers?");

  //an empty array to push the characters in it
  var password = [];

  //keeping track of all the pre-added characters
  var counter = 0;

  // Passwords ordered in Upper, Lower, Special, numerical order.
  if (upperCaseChars == true) {
    possibleChars = possibleChars.concat(upperLetters);
    var random = Math.floor(Math.random() * upperLetters.length);
    password.push(upperLetters[random]);
    counter++;
  }
  if (lowerCaseChars == true) {
    possibleChars = possibleChars.concat(lowerLetters);
    var random = Math.floor(Math.random() * lowerLetters.length);
    password.push(lowerLetters[random]);
    counter++;
  }
  if (symbolChars == true) {
    possibleChars = possibleChars.concat(specialChars);
    var random = Math.floor(Math.random() * specialChars.length);
    password.push(specialChars[random]);
    counter++;
  }
  if (numChars == true) {
    possibleChars = possibleChars.concat(numericalNums);
    var random = Math.floor(Math.random() * numericalNums.length);
    password.push(numericalNums[random]);
    counter++;
  }

  //generating a random number and the counter is to make sure it doesn't add any more characters than confirmed.
  for (var i = 0; i < passwordLength - counter; i++) {
    var random = Math.floor(Math.random() * possibleChars.length);
    password.push(possibleChars[random]);
  }

  //to remove commas turning an array into a string.
  return password.join("");
}
