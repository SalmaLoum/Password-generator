//Create varaibles for lower case, upper case, special case, and numerical characters
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

var numChars = [];
var chosenPassword = "";
//Variables that will be used later when calling out.

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  return finishedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function to generate random password.
function generatePassword() {
  var password = "";
  for (var i = 0; i < numChars; i++) {
    var random = Math.floor(Math.random() * chosenPassword.length);
  }
  return password;
}

//Generate password based on prompts
//checks the user's input and cofirm they put in a number between 8 and 128, and that it is numeric.
//Checks if no options for the password was chosen.
//Pushing the randomly generated characters into chosenPassword Push array.
