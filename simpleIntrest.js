const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

console.log("Here lets consider the 1st user input as principal amount, 2nd as tenure and 3rd as intrest rate")
var pAmount = +userInput[0];
var tenure = +userInput[1];
var iRate = +userInput[2]/100;

var si =  parseFloat(pAmount*(1+(iRate*tenure))).toFixed(2)
console.log("Simple intrest: "+si);
//start-here
//Your code goes here … replace this line with your code logic 

//end-here
});
