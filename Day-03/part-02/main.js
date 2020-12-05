// --- Part Two ---
// Time to check the rest of the slopes - you need to minimize the probability of a sudden arboreal stop, after all.
//
// Determine the number of trees you would encounter if, for each of the following slopes, you start at the top-left corner and traverse the map all the way to the bottom:
//
// Right 1, down 1.
// Right 3, down 1. (This is the slope you already checked.)
// Right 5, down 1.
// Right 7, down 1.
// Right 1, down 2.
// In the above example, these slopes would find 2, 7, 3, 4, and 2 tree(s) respectively; multiplied together, these produce the answer 336.
//
// What do you get if you multiply together the number of trees encountered on each of the listed slopes?

const fs = require('fs')

var arrayData = fs.readFileSync('input.txt').toString().split("\n");

var treeArray = [];
var arraySlopes = [
  // ["1","1"],
  // ["3","1"],
  // ["5","1"],
  // ["7","1"],
  ["1","2"]
]

// Get each array item and iterate

for (var s = 0; s < arraySlopes.length; s++) {
  var numTrees = 0;
  var slopeX = Number(arraySlopes[s][0]);
  var slopeY = Number(arraySlopes[s][1]);
  var x = 0;
  var mapData = "";
  for (var y = slopeY; y < arrayData.length; y = y + slopeY) {
    x = x + slopeX;
    str = arrayData[y].replace(/\r?\n|\r/g, "");
    mapData = str;
    do{
      mapData += mapData;
    }
    while(x > mapData.length);
    var mapObject = mapData.charAt(x);
    // console.log(mapData);
    // console.log("Object: " + mapObject);
    if(mapObject == "#"){
      numTrees += 1;
    }
  }
  treeArray.push(numTrees);
}

var treeTotal = 1;
for (var t = 0; t < treeArray.length; t++) {
  console.log("Tree Count: " + treeArray[t]);
  treeTotal = treeTotal * treeArray[t];
}

console.log("Total Trees: " + treeTotal);
