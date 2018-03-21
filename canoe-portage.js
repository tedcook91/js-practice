// To be run in the console

var rodsDistance = prompt("What is the distance in rods?");

var meters = rodsDistance / 5.0292;
var furlong = rodsDistance * 40;
var mile = meters / 1609.34;
var foot = meters * .3048;
var hours = mile / 3.1;

console.log(`It will take ${hours} hours to make the trek.`)
