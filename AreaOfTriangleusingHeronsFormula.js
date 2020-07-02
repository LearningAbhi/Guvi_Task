const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

console.log("Here area of the triangle is calculated on herons formula  \n"  + "So all the three sides are given here")
var side1 = +userInput[0];
var side2 = +userInput[1];
var side3 = +userInput[2];

var p = (side1+side2+side3)/2;

console.log("Area of Triangle  is: "+Math.sqrt(p*(p-side1)*(p-side2)*(p-side3)));
//start-here
//Your code goes here … replace this line with your code logic 

//end-here
});
