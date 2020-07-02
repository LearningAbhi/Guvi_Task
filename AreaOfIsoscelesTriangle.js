const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var base = +userInput[0]
var height = +userInput[1]
console.log("Area of isosceles  Triangle :" +(base*height)/2)
//start-here
//Your code goes here … replace this line with your code logic 

//end-here
});
