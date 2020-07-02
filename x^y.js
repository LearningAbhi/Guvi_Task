const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {


var x = userInput[0];
var y = userInput[1];
console.log("X raised to the power y is: "+ (x**y));
//start-here
//Your code goes here … replace this line with your code logic 

//end-here
});
