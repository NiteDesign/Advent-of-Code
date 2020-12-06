// --- Part Two ---
// Ding! The "fasten seat belt" signs have turned on. Time to find your seat.
//
// It's a completely full flight, so your seat should be the only missing boarding pass in your list. However, there's a catch: some of the seats at the very front and back of the plane don't exist on this aircraft, so they'll be missing from your list as well.
//
// Your seat wasn't at the very front or back, though; the seats with IDs +1 and -1 from yours will be in your list.
//
// What is the ID of your seat?

const fs = require('fs')

var arrayBoardingPasses = fs.readFileSync('input.txt').toString().split("\n");
var arraySeatIDs = [];
for (var i = 0; i < arrayBoardingPasses.length; i++) {
  var row = 0;
  var y = 1;
  var column = 0;
  var z = 1;
  for(var x = 0; x < 8; x++) {
    if(arrayBoardingPasses[i].charAt(x) == "B"){
      row = row + (64 / y);
    }
    y = y + y;
  }

  for(var x = 7; x < 10; x++) {
    if(arrayBoardingPasses[i].charAt(x) == "R"){
      column = column + (4 / z);
    }
    z = z + z;
  }

  var seatId = (row * 8) + column;

  arraySeatIDs.push(seatId);

}

arraySeatIDs.sort(function(a, b){return b-a});


for (var i = 0; i < arraySeatIDs.length; i++) {
  var locateSeadID = 0;
  locateSeadID = arraySeatIDs[i] - arraySeatIDs[i + 1];
  if(locateSeadID != "1"){
    var mySeatID = arraySeatIDs[i] - 1;
    break;
  }
}
console.log("My Seat ID: " + mySeatID);
console.log("Highest Seat ID: " + arraySeatIDs[0]);
