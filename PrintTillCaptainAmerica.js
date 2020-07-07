//Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
let friends = ["Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
function dataHandling(input){
for (var i = 0; i<= friends.length; i++) {
    
    if(friends[i] === "CaptianAmerica")
     {
         console.log(friends[i]);
         break;
     }
     console.log(friends[i]);
}
}
dataHandling(friends);
