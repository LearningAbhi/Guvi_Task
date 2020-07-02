const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var height = +userInput[0];
var breadth = +userInput[1];
var length = +userInput[2];

console.log("Volume of triangular prisme is: "+(breadth*length*height)/2);
console.log("Volume of triangular prisme is: "+(breadth*length*height));
//start-here
//Your code goes here … replace this line with your code logic 

//end-here
});
