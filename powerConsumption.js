const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {


console.log("Here we are taking 3 user Inputs \n 1.Watts/hour \n 2.Number of Days \n 3. Cost/unit")

var wattsPerHour = userInput[0];
var numberOfDays = userInput[1];
var costPerUnit = userInput[2];
console.log("Amount user need to pay for"+"numberOfDays"+"is :"+
    ((wattsPerHour*24*numberOfDays)/1000)*costPerUnit);

//Your code goes here … replace this line with your code logic 

//end-here
});
