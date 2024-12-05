// --- Day 4: Ceres Search ---
// "Looks like the Chief's not here. Next!" One of The Historians pulls out a device and pushes the only button on it. After a brief flash, you recognize the interior of the Ceres monitoring station!
//
// As the search for the Chief continues, a small Elf who lives on the station tugs on your shirt; she'd like to know if you could help her with her word search (your puzzle input). She only has to find one word: XMAS.
//
// This word search allows words to be horizontal, vertical, diagonal, written backwards, or even overlapping other words. It's a little unusual, though, as you don't merely need to find one instance of XMAS - you need to find all of them. Here are a few ways XMAS might appear, where irrelevant characters have been replaced with .:
//
//
// ..X...
// .SAMX.
// .A..A.
// XMAS.S
// .X....
// The actual word search will be full of letters instead. For example:
//
// MMMSXXMASM
// MSAMXMSMSA
// AMXSXMAAMM
// MSAMASMSMX
// XMASAMXAMM
// XXAMMXXAMA
// SMSMSASXSS
// SAXAMASAAA
// MAMMMXMMMM
// MXMXAXMASX
// In this word search, XMAS occurs a total of 18 times; here's the same word search again, but where letters not involved in any XMAS have been replaced with .:
//
// ....XXMAS.
// .SAMXMS...
// ...S..A...
// ..A.A.MS.X
// XMASAMX.MM
// X.....XA.A
// S.S.S.S.SS
// .A.A.A.A.A
// ..M.M.M.MM
// .X.X.XMASX
// Take a look at the little Elf's word search. How many times does XMAS appear?
//
//
// --- Part Two ---
// The Elf looks quizzically at you. Did you misunderstand the assignment?
//
// Looking for the instructions, you flip over the word search to find that this isn't actually an XMAS puzzle; it's an X-MAS puzzle in which you're supposed to find two MAS in the shape of an X. One way to achieve that is like this:
//
// M.S
// .A.
// M.S
// Irrelevant characters have again been replaced with . in the above diagram. Within the X, each MAS can be written forwards or backwards.
//
// Here's the same example from before, but this time all of the X-MASes have been kept instead:
//
// .M.S......
// ..A..MSMS.
// .M.S.MAA..
// ..A.ASMSM.
// .M.S.M....
// ..........
// S.S.S.S.S.
// .A.A.A.A..
// M.M.M.M.M.
// ..........
// In this example, an X-MAS appears 9 times.
//
// Flip the word search from the instructions back over to the word search side and try again. How many times does an X-MAS appear?


const fs = require('fs')

let resultTotal = 0;

//Load input txt
let inputArray = fs.readFileSync('input.txt').toString().split("\n");

const masArray = inputArray.slice(0,inputArray.length - 2);

masArray.forEach(searchMxM);
masArray.forEach(searchMxS);
masArray.forEach(searchSxS);
masArray.forEach(searchSxM);


function searchMxM(data, index) {
  //Regex search
  var regex = /M.M/g, result, indices = [];
  while ( (result = regex.exec(data)) ) {
    indices.push(result.index);
    let x = index;
    let y = result.index;
      if(inputArray[x + 1].charAt(y + 1) == "A" && inputArray[x + 2].charAt(y) == "S" && inputArray[x + 2].charAt(y + 2) == "S"){
        console.log("Found MxM start at row(" + x + ") char(" + y + ")");
        resultTotal = resultTotal + 1;
      }
    regex.lastIndex = result.index + 1;
  }
}

function searchSxS(data, index) {
  //Regex search
  var regex = /S.S/g, result, indices = [];
  while ( (result = regex.exec(data)) ) {
    indices.push(result.index);
    let x = index;
    let y = result.index;
      if(inputArray[x + 1].charAt(y + 1) == "A" && inputArray[x + 2].charAt(y) == "M" && inputArray[x + 2].charAt(y + 2) == "M"){
        console.log("Found SxS start at row(" + x + ") char(" + y + ")");
        resultTotal = resultTotal + 1;
      }
    regex.lastIndex = result.index + 1;
  }
}

function searchMxS(data, index) {
  //Regex search
  var regex = /M.S/g, result, indices = [];
  while ( (result = regex.exec(data)) ) {
    indices.push(result.index);
    let x = index;
    let y = result.index;
      if(inputArray[x + 1].charAt(y + 1) == "A" && inputArray[x + 2].charAt(y) == "M" && inputArray[x + 2].charAt(y + 2) == "S"){
        console.log("Found MxS start at row(" + x + ") char(" + y + ")");
        resultTotal = resultTotal + 1;
      }
    regex.lastIndex = result.index + 1;
  }
}

function searchSxM(data, index) {
  //Regex search
  var regex = /S.M/g, result, indices = [];
  while ( (result = regex.exec(data)) ) {
    indices.push(result.index);
    let x = index;
    let y = result.index;
      if(inputArray[x + 1].charAt(y + 1) == "A" && inputArray[x + 2].charAt(y) == "S" && inputArray[x + 2].charAt(y + 2) == "M"){
        console.log("Found SxM start at row(" + x + ") char(" + y + ")");
        resultTotal = resultTotal + 1;
      }
    regex.lastIndex = result.index + 1;
  }
}


console.log(resultTotal);

