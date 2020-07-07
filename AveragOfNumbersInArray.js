const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];

var sum= counter = 0;
console.log(typeof(sum))
for(var i = 0; i < friendsInfo.length; i++)

 {
     if(typeof(friendsInfo[i]) == "number")
      {
          console.log(friendsInfo[i])
          sum = sum+friendsInfo[i];
          
          counter++;
      }
 }
 console.log("Average of the numbers present in the Array :" +(sum/counter));