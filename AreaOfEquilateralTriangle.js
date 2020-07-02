const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var a = +userInput[0]

console.log("Area of Equilateral Triangle :" +(Math.sqrt(3)* Math.pow(a,2))/4)
//start-here
//Your code goes here … replace this line with your code logic 

//end-here
});
