//Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
let friends = ["Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
function dataHandling(input, name){
for (var i = 0; i < input.length; i++) {
    if(name == friends[i])
    {
        return name+" is my Friend";
        break;
    }
}
  return name + " is not my Friend";
}
let found = dataHandling(friends,"Jeff");
dataHandling(friends);
console.log(found);
