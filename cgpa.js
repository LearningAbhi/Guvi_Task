const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var cgpa = 0;
for(var i =0; i<userInput.length; i++)
 {
     if(userInput[i]>10)
      {
          userInput[i] = userInput[i]/10;
         
      }
     cgpa = cgpa + +userInput[i];
     
 }
 
 console.log("The total CGPA is :" +(cgpa/userInput.length));

//Your code goes here … replace this line with your code logic 

//end-here
});
