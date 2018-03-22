// To be run in the console

var richter = prompt("What is the measurement on the Richter scale?");

var joules = Math.pow(10, ((1.5 * richter)+4.8));

var tnt = joules / ((4.184) * Math.pow(10, 9))

console.log(joules)
console.log(tnt)