//QUESTION 1:
Find the culprit
fix.html
<!DOCTYPE html>
<html>
<body>
 <script>
 alert( “I’m JavaScript!’);
 </script>
 Whats the error in this ?
</body>
</html>

//ANSWER

in alert function the qutoes were incorrect.
<!DOCTYPE html>
<html>
<body>
 <script>
 alert( 'I’m JavaScript!');
 </script>
 Whats the error in this ?
</body>
</html>

//QUESTION 2:
Find the culprit and invoke the alert
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
scripts.js
alert(“I’m invoked!”);

//Answer:
File name is incorrect. It should be scripts.js

<!DOCTYPE html>
<html>
<body>

</body>
 <script src="./scripts.js"></script>
</html>


//QUESTION 3:

Explain the below how it works
explain.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working

//ANSWER

The above code we wont be getting any alert as in js we have written alert in wrong way and format.
We cant break our alert statement in between. The below code will work properly.


alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert('World')
alert(3 + 1 + 2); // this is multiple line code and its working


//QUESTION 4:

Fix the below to alert Guvi geek
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( admin ); // "Guvi geek"

//ANSWER
//Just add one space between fname and lname
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+ " "+ lname;
alert( admin ); // "Guvi geek"


//QUESTION 5:

Fix the below to alert hello Guvi geek
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( 'hello ${name}' );

//ANSWER
Dont know why the template literal dint work

let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+" "+lname;
alert( "hello " +name );




//QUESTION 6:
Fix the below to alert sum of two numbers
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);

//ANSWER
Convering the string to number in prompt itself
let a = +prompt("First number?");
let b = +prompt("Second number?");
alert(a + b);

//QUESTION 7
If you run the below scritpt you will get “Code is Blasted”
Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

//ANSWER:
In the expression var a = "2" > "12", the value true will be assigned to var a as we are comparing to strings.
So now in the if statement if(a) means if(true) and as it satisfied the condtion it went to the loop and we got the op as "Code is Blasted"
To get code is diffused simply removed the quotes from 2 and 12 or interchange the places of 2 and 12 in the comparision. So that false
will be stored in var a.

var a = "12" > "2"; or var a = 2 > 12

//QUESTION 8:
How to get the success in console.
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

//ANSWER
I think we can pass either null or undefined


//QUESTION 9:
How to get the correct score in console.
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four" +value);
} else if (value === 6) {
      console.log("You hit a Six" +value);
} else {
      console.log("I couldn't figure out"+value);
}

//ANSWER
Convert the prompt value to integer

let value = +prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four "+value);
} else if (value === 6) {
      console.log("You hit a Six "+value);
} else {
      console.log("I couldn't figure out "+value );
}


//QUESTION 10:
Fix the code to welcome the boss
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
 let message = "welcome boss";
}
else
{
 let message = "Go away";
}
  console.log(message);
  
 //ANSWER
 Remove let in side if else block for message
 let message;
if (null || 2 || undefined )
{
  message = "welcome boss";
}
else
{
  message = "Go away";
}
  console.log(message);
  
  
  //QUESTION 11:
  Fix the code to welcome the boss
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let message;
let lock = 2;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);
  
  //ANSWER
  In if block we need to have atleast 1 truthy value. So if we make lock falsey by assignning 0 it will go to else block.
  let message;
let lock = 0;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);
  
  
  //QUESTION 12:
  Fix the code to welcome the boss
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let message;
let lock = 2;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);
  
  //ANSWER
   In if block we need to have  LOCK AS  truthy value. So if we make lock falsey by assignning 0 it will go to else block.
  let message;
  let message;
let lock = 0;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);
  
 
 //QUESTION 13:
Change the code to print
3
2
1
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
//You can change only 2 characters
let i = 3;
while (i) {
  console.log( --i );
}

//ANSWER:
Insted of predecrement in console do post decrement
let i = 3;
while (i) {
  console.log( i-- );
} 
  
  
 //QUESTION 14:
 Change the code to print 1 to 10 in 4 lines
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
  
// ANSWER
We can use simple for loop to achieve it 
for(var i =1;i<=10;i++)
{
	console.log(i);
}


//QUESTION 15:
Change the code to print even numbers
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 1) {
  console.log(num)
}  

//ANSWER
i have changed only one character in num+=1 expression. instead of 1 i gave 2
for (let num = 2; num <= 20; num += 2) {
  console.log(num)
}  



//QUESTION 16
Change the code to print all the gifts
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log('Wrapped ${'gifts[i]'} and added a bow!');
}
//ANSWER

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log('Wrapped ' +gifts[i] + ' and added a bow!');
}
  
  
 //QUESTION 17:
 Fix the code to disarm the bomb.
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}
//ANSWER
We can change the threshhold value in while loop to something greather than 0

let countdown = 100;
while (countdown > 10) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

//QUESTION 18:
Whats the msg printed and why?
var lemein = “0”;
var lemeout = 0;
var msg = “”;
if (lemein) {
 msg += “hi”;
 }
if (lemeout) {
 msg += ‘Hello’;
}
console.log(msg);


//ANSWER 
The answer is hi as in lemein we have stored a string . and apart from emptry string all other string provides truthsy value.
So when we checked the condtion in if statement it satisfies the condtion and it went inside.
But in lemeout we have assigned numerical value 0/ Which corresponds to Falsey value.
So in if statement it doesnt satisfies the condition and we dint go inside the statement.



//QUESTION 19:
Whats the msg printed and why? Guess you answer before running it.
var lemein = “0”;
var lemeout = 0;
var msg = “”;
if (lemein) {
 msg += “hi”;
 }
if (lemeout) {
 msg += ‘Hello’;
}
console.log(msg);

//ANSWER:
The answer is hi as in lemein we have stored a string . and apart from emptry string all other string provides truthsy value.
So when we checked the condtion in if statement it satisfies the condtion and it went inside.
But in lemeout we have assigned numerical value 0/ Which corresponds to Falsey value.
So in if statement it doesnt satisfies the condition and we dint go inside the statement.





  
  
  
  
  
  
  
  
  
  
  
  






























































