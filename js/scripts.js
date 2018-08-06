var userInput = prompt("Please enter a sentence:");
userInput;

//Returns the first and last letter of input as a new string capitalized.
var capitalized = function(userInput) {
  var stringLength = userInput.length;
  var firstLetter = userInput.charAt(0);
  var secondLetter = userInput.charAt(stringLength - 1);
  var capitalized = firstLetter + secondLetter;
  var capitalized = capitalized.toUpperCase();
  return capitalized;
}

//Takes the capitalized two letters and reverses order. Returns new string.

var reversed = function(capitalized) {
  var firstLetter = capitalized.charAt(0);
  var secondLetter = capitalized.charAt(1);
  var reversed = secondLetter + firstLetter;
  return reversed;
}


//Output text

var outputText = function(userInput) {
  var output = reversed(capitalized(userInput));
  return output;
}

//Adds middle letter of original input to the beginning.
var middleLetter = function(userInput, output) {
  var stringLength = userInput.length;
  var stringSpot = stringLength / 2;
  var middleLetter = userInput.charAt(stringSpot);
  var endResult = middleLetter + userInput + output;
  return endResult;
}

var text = middleLetter(userInput, outputText(userInput));

//Reverses order of letters.
function reverseString(string) {
  var splitString = string.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

text = reverseString(text);

alert(text);
