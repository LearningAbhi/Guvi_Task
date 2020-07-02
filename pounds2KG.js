const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var pou = parseFloat(userInput[0]);
var kg = (pou/2.205).toFixed(4);

console.log("Weight in KG : "+ kg)
//start-here
//Your code goes here … replace this line with your code logic 

//end-here
});
