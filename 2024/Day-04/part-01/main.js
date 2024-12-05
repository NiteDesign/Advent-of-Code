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

const fs = require('fs')

let resultTotal = 0;

//Load input txt
let inputArray = fs.readFileSync('input.txt').toString().split("\n");


inputArray.forEach(searchHorizontalForwards);
inputArray.forEach(searchHorizontalBackwards);


const vertDownArray = inputArray.slice(0,inputArray.length - 3);
vertDownArray.forEach(searchVerticalDown);
vertDownArray.forEach(searchDiagDownLtR);
vertDownArray.forEach(searchDiagDownLtRBackwards);
vertDownArray.forEach(searchDiagDownRtL);
vertDownArray.forEach(searchDiagDownRtLBackwards);



const vertUpArray = inputArray.slice(0,inputArray.length - 3);
vertUpArray.forEach(searchVerticalUp);



function searchHorizontalForwards(data) {
  count = (data.match(/XMAS/g) || []).length
  resultTotal = resultTotal + count;
}

function searchHorizontalBackwards(data) {
  count = (data.match(/SAMX/g) || []).length
  resultTotal = resultTotal + count;
}

function searchVerticalDown(data, index) {
  //Regex search
  var regex = /X/g, result, indices = [];
  while ( (result = regex.exec(data)) ) {
    indices.push(result.index);
    let x = index + 1;
    if(inputArray[x].charAt(result.index) == "M" && inputArray[x + 1].charAt(result.index) == "A" && inputArray[x + 2].charAt(result.index) == "S"){
      resultTotal = resultTotal + 1;
    }
  }
}

function searchVerticalUp(data, index) {
  //Regex search
  var regex = /S/g, result, indices = [];
  while ( (result = regex.exec(data)) ) {
    indices.push(result.index);
    let x = index + 1;
    if(inputArray[x].charAt(result.index) == "A" && inputArray[x + 1].charAt(result.index) == "M" && inputArray[x + 2].charAt(result.index) == "X"){
      resultTotal = resultTotal + 1;
    }
  }
}


function searchDiagDownLtR(data, index) {
  //Regex search
  var regex = /X/g, result, indices = [];
  while ( (result = regex.exec(data)) ) {
    indices.push(result.index);
    let x = index + 1;
    let y = result.index;
    if (result.index <= inputArray[x].length - 3){
      if(inputArray[x].charAt(y + 1) == "M" && inputArray[x + 1].charAt(y + 2) == "A" && inputArray[x + 2].charAt(y + 3) == "S"){
        resultTotal = resultTotal + 1;
      }
    }
  }
}

function searchDiagDownLtRBackwards(data, index) {
  //Regex search
  var regex = /S/g, result, indices = [];
  while ( (result = regex.exec(data)) ) {
    indices.push(result.index);
    let x = index + 1;
    let y = result.index;
    if (result.index <= inputArray[x].length - 3){
      if(inputArray[x].charAt(y + 1) == "A" && inputArray[x + 1].charAt(y + 2) == "M" && inputArray[x + 2].charAt(y + 3) == "X"){
        resultTotal = resultTotal + 1;
      }
    }
  }
}


function searchDiagDownRtL(data, index) {
  //Regex search
  var regex = /X/g, result, indices = [];
  while ( (result = regex.exec(data)) ) {
    indices.push(result.index);
    let x = index + 1;
    let y = result.index;
    if (result.index >= 3){
      if(inputArray[x].charAt(y - 1) == "M" && inputArray[x + 1].charAt(y - 2) == "A" && inputArray[x + 2].charAt(y - 3) == "S"){
        resultTotal = resultTotal + 1;
      }
    }
  }
}

function searchDiagDownRtLBackwards(data, index) {
  //Regex search
  var regex = /S/g, result, indices = [];
  while ( (result = regex.exec(data)) ) {
    indices.push(result.index);
    let x = index + 1;
    let y = result.index;
    if (result.index >= 3){
      if(inputArray[x].charAt(y - 1) == "A" && inputArray[x + 1].charAt(y - 2) == "M" && inputArray[x + 2].charAt(y - 3) == "X"){
        resultTotal = resultTotal + 1;
      }
    }
  }
}


console.log(resultTotal);

