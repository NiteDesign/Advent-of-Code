
const fs = require('fs')

var distinctPositions = 0;

//Load input txt
let data = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('')
  .map(Number);

const diskMap = [];

console.log(data);

for (let x = 0; x < data.length; x++){
  let y = x +1;
  let tempBlock = data[data.length - y];

  if (x % 2 === 0){


  } else {
    if (data[x] > tempBlock){

    }

  }
  if (data[x])
  for(let z = data[x]; z > 0; z--){
  if(data[x] )
  console.log(tempBlock);






  //Add data to disk
  // for(let y = data[x]; y> 0; y--){
  //   if (x % 2 === 0){
  //     diskMap.push(x/2);
  //   } else {
  //     diskMap.push('.');
  //   }
  // }


}

console.log(diskMap);

//re-arrange diskMap

diskMap.forEach((block, i, dmapArray) => {
  if(block === '.'){
    while (true){
      let tempBlock = dmapArray.pop();
      if (tempBlock === '.'){
        continue;
      } else {
        dmapArray[i] = tempBlock;
        break;
      }
    }
  }
});

console.log(diskMap);

let checkSum = 0;

diskMap.forEach((block, i, dmapArray) => {

  checkSum = checkSum + (block * i);

});

console.log(checkSum);

