const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {


var fNumber = +userInput[0];
var sNumber = +userInput[1];

console.log("Addition of two number is :" +(fNumber+sNumber));
console.log("Subtraction of two number is :" +(fNumber-sNumber));
console.log("Multiplication of two number is :" +(fNumber*sNumber));
console.log("Division of two number is :" +(fNumber/sNumber));
console.log("Modular of two number is :" +(fNumber%sNumber));
console.log("Exponentiation of two number is :" +(fNumber**sNumber));
console.log("Increment of two number is :" +(++fNumber) +","+(++sNumber));
console.log("Decrement of two number is :" +(--fNumber)+","+(--sNumber));


//Your code goes here … replace this line with your code logic 

//end-here
});
