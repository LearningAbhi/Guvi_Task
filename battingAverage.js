const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {


var avg, total=0;


for(var i=0;i<userInput.length;i++)
{
    total = total+ +userInput[i];
}
console.log("Batting Average is :" +(total/userInput.length));
//start-here
//Your code goes here … replace this line with your code logic 

//end-here
});
