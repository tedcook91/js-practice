

var airTemp = prompt("What's the current temperature in degrees F?")
var airSpeed = prompt("What's the current wind speed in mph?")

var wctIndex = 35.74 + 0.6215 * airTemp 
- 35.75 * Math.pow(airSpeed, 0.16) 
 + 0.4275 * airTemp * Math.pow(airSpeed, 0.16)

 console.log(wctIndex)