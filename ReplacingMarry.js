//Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friends = ["Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
function dataHandling(input){
for (var i = 0; i < input.length; i++) {
    
    if(friends[i] === "Mari")
    {
        friends[i] = "Munnabai"
        break;
    }
}
}
dataHandling(friends);
