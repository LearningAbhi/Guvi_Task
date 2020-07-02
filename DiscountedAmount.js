const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {


var actualCost = +userInput[0];
var soldCost = +userInput[1];
var discAmt = actualCost - soldCost;
var discAmtPer = parseFloat((discAmt/actualCost)*100).toFixed(2)
console.log("% of Discount: "+discAmtPer)
//start-here
//Your code goes here … replace this line with your code logic 

//end-here
});
