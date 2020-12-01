// --- Part Two ---
// The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.
// Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.
// In your expense report, what is the product of the three entries that sum to 2020?

const fs = require('fs')

var array = fs.readFileSync('input.txt').toString().split("\n");

for (var i = 0; i < array.length; i++) {
  for (var x = 1; x < array.length; x++) {
    var sumA = Number(array[i]) + Number(array[x]);
    for (var y = 0; y < array.length; y++){
      if((y != i) && (y != x)){
        var sumB = sumA + Number(array[y]);
        if (sumB == 2020){
          var product = (Number(array[i]) * Number(array[y]) * Number(array[x]));
          console.log("Match Found: " + product);
          return;
        }
      }
    }
  }
}
