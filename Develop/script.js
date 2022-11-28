//Create varaibles for lower case, upper case, special case, numerical

var numChars = [];
var chosenPassword = [];
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

//These are the variables that will be used later when calling out.
var confirmSpecial;
var confirmNum;
var confirmUpper;
var confirmLower;

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  return finishedPassword;
}

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var Password = generatePassword();
    passwordText.value = Password;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate password based on prompts
function generatePassword() {
  var password = "";
  for (var i = 0; i < numChars; i++) {
    var random = Math.floor(Math.random() * chosenPassword.length);
    password = password + chosenPassword[random];
  }
  return password;
}

//Function prompt asking user for number of characters, and holding in a variable, validating user's input.

function getPrompts() {
  chosenPassword = [];
  numChars = parseInt(
    prompt("Please chose a number between 8-128 for your password's characters")
  );

  if (isNaN(numChars) || numChars < 8 || numChars > 128) {
    alert("Before continuing, please input a number between 8 - 128.");
    return false;
  }

  //checks the user's input and cofirm they put in a number between 8 and 128, and that it is numeric.
  // Variables for character selections.
  else {
    confirmSpecial = confirm(
      "Would you like the password to contain Special Characters?"
    );
    confirmNum = confirm("Would you like the password to contain Numbers?");
    confirmUpper = confirm(
      "Would you like the password to contain Uppercase Letters?"
    );
    confirmLower = confirm(
      "Would you like the password to contain Lowercase Letters?"
    );
  }

  //Checks if no options for the password was chosen.
  if (!confirmSpecial && !confirmNum && !confirmUpper && !confirmLower) {
    alert("There were no selected options.");
    return false;
  }
  if (confirmSpecial) {
    chosenPasswordPush(specialChars);
  }
  if (confirmNum) {
    chosenPasswordPush(numericalNums);
  }
  if (confirmUpper) {
    chosenPasswordPush(upperLetters);
  }
  if (confirmLower) {
    chosenPasswordPush(lowerLetters);
  }
  return true;
}

//Pushing the randomly generated characters into chosenPassword Push array.
function chosenPasswordPush(array) {
  for (var i = 0; i < array.length; i++) {
    chosenPassword.push(array[i]);
  }
}
