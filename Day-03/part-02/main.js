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

var numTrees = 0;
var x = 0;
var treeArray = [];
var arraySlopes = [
  ["1","1"],
  ["3","1"],
  ["5","1"],
  ["7","1"],
  ["1","2"]
]
// Get each array item and iterate

for (var s = 0; s < arraySlopes.length; s++) {
  var numTrees = 0;
  var xIncrement = Number(arraySlopes[s][0]);
  var yIncrement = Number(arraySlopes[s][1]);

  var x = 0;
  for (var y = yIncrement; y < arrayData.length; y = y + yIncrement) {
    x = x + xIncrement;
    repeatMap = Math.ceil(x / arrayData[y].length);
    console.log("X: " + x);
    console.log("Y: " + y);
    var map = extendMap(arrayData[y], repeatMap, x);
    var mapObject = map.charAt(x);
    if(mapObject == "#"){
      numTrees += 1;
    }
  }
  treeArray.push(numTrees);
}

var treeTotal = 1;
console.log("Tree Count: " + treeArray[0]);
for (var t = 0; t < treeArray.length; t++) {
  console.log("Tree Count: " + treeArray[t]);
  treeTotal = treeTotal * treeArray[t];
}

function extendMap(str, repeatMap, mapPos){
  var newMap = "";
  repeatMap++;
  for(var i = 0; i < repeatMap; i++){
    str = str.replace(/\r?\n|\r/g, "");
    newMap = newMap + str;
  }
  return newMap;
}

console.log("Total Trees: " + treeTotal);
