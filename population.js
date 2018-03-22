var userInput = prompt("How many years into the future?")

var current = 307357870;
var secondsYear = 365 * 24 * 60 * 60 * userInput;
var birth = secondsYear / 7;
var death = secondsYear / 13;
var immigrant = secondsYear /35;

var total = current + birth - death + immigrant;

console.log(`Ther will be approximately ${total} people in the US in ${userInput} year(s).`)