const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {


var radius = +userInput[0];
console.log("Diameter of the Circle is :"+(radius*2));
console.log("Area of the Circle is :"+(Math.PI*(radius*radius)));
console.log("circumference  of the Circle is :"+(Math.PI*2*radius));
//Your code goes here … replace this line with your code logic 

//end-here
});
