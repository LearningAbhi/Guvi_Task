const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var radius = +userInput[0]
var vol = (4/3*(Math.PI*(Math.pow(radius,3)))).toFixed(3);
console.log("Volume of Spheere is: "+vol);
//start-here
//Your code goes here … replace this line with your code logic 

//end-here
});
