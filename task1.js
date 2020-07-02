const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
});

// TASK 1.1. Declaring variable and priniting without assigning values
var firVar,secVar,thiVar,forVar;
console.log(firVar+" "+secVar+" "+thiVar+" "+forVar);

//TASK 1.2. Printing the value of myVar
var myvar= 1;
console.log(myvar);

//TASK 1.3. Declare variables to store your first name, last name, marital //status, country and age in multiple lines
var  firstName;
var lastName;
var maritalStatus;
var country; 
var age;

// TASK 1.4.Declare variables to store your first name, last name, marital status,
    //country and age in single lines
var firstName1,lastName1,maritalStatus1,country1,age1;

//TASK 1.5. Declare variables and assign string, boolean, undefined and //null data types

    var str = "Hello World"
    var bool = true;
    var und;
    var nul = null;
    console.log(str,bool,und,nul);

// TASK 1.6.  Convert the string to integer
var num1 = "10";
var num2 = "20";
var num3 = "30";
console.log(+num1 + parseInt(num2)+ Number(num3));

//TASK 1.7. Truthy and Falsy values

var falsey1 = 0;
var falsey2 = null;
var num = 3;
if(num == 5)// falsey3

var truthy1 = 3;
var truthy2 = "hello";
var truthy3 = true;
if(num == 3)
















