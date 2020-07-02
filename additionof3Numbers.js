const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var firstNum = +userInput[0];
var secondNum = +userInput[1];
var thirdNum = +userInput[2];
console.log(firstNum+secondNum+thirdNum);
//start-here
//Your code goes here … replace this line with your code logic 

//end-here
});
