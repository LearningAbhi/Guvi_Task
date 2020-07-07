//OBJECT QUESTION 1:
//What the output
myobject = {1:one,”11":1,”name”:”arun”}
console.log(myobject.11); 
console.log(myobject.name);
//answer : We will be getting error.

//Write out an object literal to represent the data below.
//Guvi, Geek, 6, IIT-M RP,Chennai.
//Answer
var myObj = {
    firstName : "Guvi",
    secondName: "Geek",
    age : 6,
    college : "IIT-M",
    city : "Chennai"
    
}

console.log(myObj);


//How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
//Guvi, Geek, 6, IIT-M RP,Chennai.
//Amazon, Inc, 31, SP Infocity, Chennai.
//Google, Alphabet, 34 Amphitheater Parkway, MountainView.
//Tesla, Inc , 32, 333 Santana Row,San Jose.

// I can use onjects inside a object. As all these data set are similar, I can represent those in similar key value pair. I have written the code below

/*Guvi, Geek, 6, IIT-M RP,Chennai.
Amazon, Inc, 31, SP Infocity, Chennai.
Google, Alphabet, 34 Amphitheater Parkway, MountainView.
Tesla, Inc , 32, 333 Santana Row,San Jose.
*/
var arrOfObj = {
 guvi : 
{
	compFirstName: "Guvi",
	compSecondName: "Geek",
	age : 6,
	address: "IIT-M",
	city: "Chennai"
},
amazon:
{
    compFirstName: "Amazon",
    compSecondName: "Inc",
    age : 31,
    address: "SP Infocity",
    city: "Chennai"
    
},
 google :{
    compFirstName: "Google",
    compSecondName:"Alphabet",
    age : 34,
    address : "32 Amphitheater Parkway",
    city: "MountainView"
},
 tesla :{
     compFirstName: "Tesla",
     compSecondName: "Inc",
     age : 32,
     address : "333 Santana Row",
     city : "san Jose"
     
 }
}

console.log(arrOfObj);


