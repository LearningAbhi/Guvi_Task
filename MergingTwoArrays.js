//Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
var friends1 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];

var friends2 = [
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];

var friends = [...friends1,...friends2];

function dataHandling(input){
    friends.sort()
console.log(friends)
}
  
dataHandling(friends)
