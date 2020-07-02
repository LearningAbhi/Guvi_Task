const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var lenInMet = parseFloat(userInput[0]);
var lenInMile = (lenInMet/1609).toFixed(4);

console.log("Length in miles : "+ lenInMile)
//start-here
//Your code goes here … replace this line with your code logic 

//end-here
});
