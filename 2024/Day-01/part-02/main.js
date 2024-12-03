// --- Part Two ---
// Your analysis only confirmed what everyone feared: the two lists of location IDs are indeed very different.
//
// Or are they?
//
// The Historians can't agree on which group made the mistakes or how to read most of the Chief's handwriting, but in the commotion you notice an interesting detail: a lot of location IDs appear in both lists! Maybe the other numbers aren't location IDs at all but rather misinterpreted handwriting.
//
// This time, you'll need to figure out exactly how often each number from the left list appears in the right list. Calculate a total similarity score by adding up each number in the left list after multiplying it by the number of times that number appears in the right list.
//
// Here are the same example lists again:
//
// 3   4
// 4   3
// 2   5
// 1   3
// 3   9
// 3   3
// For these example lists, here is the process of finding the similarity score:
//
// The first number in the left list is 3. It appears in the right list three times, so the similarity score increases by 3 * 3 = 9.
// The second number in the left list is 4. It appears in the right list once, so the similarity score increases by 4 * 1 = 4.
// The third number in the left list is 2. It does not appear in the right list, so the similarity score does not increase (2 * 0 = 0).
// The fourth number, 1, also does not appear in the right list.
// The fifth number, 3, appears in the right list three times; the similarity score increases by 9.
// The last number, 3, appears in the right list three times; the similarity score again increases by 9.
// So, for these example lists, the similarity score at the end of this process is 31 (9 + 4 + 0 + 0 + 9 + 9).
const fs = require('fs')
const list1 = [];
const list2 = [];

let totalSimilarity = 0;

//Load input txt
let inputArray = fs.readFileSync('input.txt').toString().split("\n");

function buildlistFunction(value) {
  newValue = value.split("   ");
  list1.push(newValue[0]);
  list2.push(newValue[1]);
}

function getSimScore(value) {
  let simScore = 0 ;
  for (let x = 0; x < list2.length; x++) {
    if (Number(value) == Number(list2[x])) {
      simScore = simScore + 1;
    }
  }

  totalSimilarity = totalSimilarity + (Number(value) * simScore);

}


//Build List1 and List2 arrays
inputArray.forEach(buildlistFunction);

//Sort the arrays items small to large
list1.sort(function(a,b){return a - b});
list2.sort(function(a,b){return a - b});


//Iterate the list to calculate the similarity
list1.forEach(getSimScore);


//Output TotalSimilarity
console.log(totalSimilarity);

