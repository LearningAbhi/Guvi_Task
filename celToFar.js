const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var tempInCel = +userInput[0];
console.log("Temprature in Farhnaite : "+ ((tempInCel/5)*9+32));
//start-here
//Your code goes here … replace this line with your code logic 

//end-here
});
