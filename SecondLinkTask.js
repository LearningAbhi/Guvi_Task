//Question 1:
Output: 1234567891011
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = “”;
 
for (var i = 1; i < 11; i--) {  // Answer : for(var i = 0; i<11;i++)
 new_string += numsArr[i] 
}
console.log(new_string);

//Question 2:
Output: 1,2,3,4,5,6,7,8,9,10,11
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = “”;
 
for (var i = 1; i < 11; i++) {
 new_string += numsArr[i] + , 
}
console.log(new_string);

//ANSWER 2:
Output: 1,2,3,4,5,6,7,8,9,10,11
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {   // Changed condtion
 new_string += numsArr[i] + ", "
}
new_string = new_string.substring(0,new_string.length - 1); 
console.log(new_string);


//QUESTION 3:
Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
Output: 11 10 9 8 7 6 5 4 3 2 1
var new_string = “”;
 
for (var i = 11; i > 0; i — ) {
 new_string += numsArr[i] + “ “ 
}
console.log(new_string);

//ANSWER 3:

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = numsArr.length -1 ; i >= 0; i -- ) { // instead of index as 11 took 10 and for second condition instead of i>0 changed to i>=0
 new_string += numsArr[i] + " " ;
}
new_string = new_string.trim(); // Added trim method to remove the last whitespace
console.log(new_string);


//QUESTION 4:
Write a code to replace the array value — If the number is even, replace it with ‘even’.
Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = odd
 }
}
console.log(numsArr);

//ANSWER
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = "even" // Replaced odd with even
 }
}
console.log(numsArr);

//QUESTION 5:
Write a code to replace the array value — If the index is even, replace it with ‘even’.
Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = even
 }
}
console.log(numsArr);
//ANSWER
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(i %2 == 0 )  //CONDTION CHANGED
 {
 numsArr[i] = "even" //EVEN PUT IN STRING
 }
}
console.log(numsArr);


//QUESTION 6:
Write a code to add all the numbers in the array
Output: 66
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 var sum;
 sum += numsArr[i]
}
console.log(sum);

//ANSWER:
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 var sum=0; //Declare sum outside loop and init to 0
for (var i = 0; i <=10; i++) {

 sum += numsArr[i]
}
console.log(sum);

//QUESTION 7:
Write a code to add the even numbers only
Output: 30
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++) {
 if(numsArr[i]%2==0);
 sum += numsArr[i]
}
console.log(sum);

//ANSWER

//Write a code to add the even numbers only
//Output: 30
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) //REMOVED SEMICOLON {
 if(numsArr[i]%2==0)
 {					//DEFINED SCOPE
 sum += numsArr[i]
}
}
console.log(sum);

//QUESTION 8:
Write a code to add the even numbers and subract the odd numbers
Output: 94
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2!=0);
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(sum);


//ANSWER
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var evenSum = 100;
var oddSum = 0;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2!== 0)
 {
 oddSum += numsArr[i]
 }
 else
 {
 evenSum += numsArr[i]
 }
}
console.log(evenSum - oddSum);

//QUESTION 9
Write a code to print inner arrays
Output:
Array(5) [ 1, 2, 3, 4, 5 ]
Array(6) [ 6, 7, 8, 9, 10, 11 ]
var numsArr = [[1, 2, 3, 4, 5][ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++); {
 console.log( numsArr[i])
}

//ANSWER
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
 console.log( "Array("+numsArr[i].length+") [" +numsArr[i]+"]")
}


//QUESTION 10:
Write a code to print elements in the inner arrays
Output: 1234567891011
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ )
     str_all +=inner_array[j]
}
console.log(str_all);

//ANSWER
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=""; // changed from 0 to empty string
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
for(var j = 0 ; j < inner_array.length;j++ ) // instead of i++ its should be j++
 {
     str_all = str_all+inner_array[j];}
}
console.log(str_all);

//QUESTION 11:
Write a code to replace the array value — If the index is even, replace it with ‘even’.
Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ )
      if(numsArr[i] %2 == 0 )
      {
         numsArr[i] = even
       }
}
console.log(numsArr);


//ANSWER
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 
 for(var j = 0 ; j < inner_array.length;j++ ) // changed from i++ to j++
 {
      if(inner_array[j] %2 == 0 ) //CHANGED ARRAY NAME FROM numsArr to inner_array
      {
         numsArr[i][j] = "even" // added j dimention
       }
    }
}
console.log(numsArr);

//QUESTION 12:
Write a code to print elements in the inner arrays in reverse
Output: 11 10 9 8 7 6 5 4 3 2 1
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length; j < 0 ;j-- )
     str_all +=inner_array[j]
}
console.log(str_all);

//ANSWER
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all= "";
for (var i = numsArr.length-1; i>=0; i--) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length-1; j>= 0 ;j-- )
     str_all = str_all+inner_array[j]+" ";
}
console.log(str_all.trim());


//QUESTION 13:
Write a code to add elements in the inner arrays based on odd or even values
Output:
36
30
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(numsArr[i]%2!=0)
 {
 sum_odd += numsArr[i]
 }
 else
 {
 sum_even += numsArr[i]
 }
}
}
console.log(sum_odd);
console.log(sum_even);

//ANSWER	
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(inner_array[j]%2!==0)
 {
 sum_odd += inner_array[j]
 }
 else
 {
 sum_even += inner_array[j]
 }
}
}
console.log(sum_odd);
console.log(sum_even);
































