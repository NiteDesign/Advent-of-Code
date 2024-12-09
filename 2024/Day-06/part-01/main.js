
const fs = require('fs')

var distinctPositions = 0;

//Load input txt
var inputMap = fs.readFileSync('input.txt').toString().split("\n");

var posX = 67;
var posY = 89;

console.log(inputMap[posY].charAt(posX));

let movingDirection = "GoUp";


while (movingDirection !== "DONE"){

  switch (movingDirection){
    case "GoUp":
      moveUp();
      break;
    case "GoDown":
      moveDown();
      break;
    case "GoLeft":
      moveLeft();
      break;
    case "GoRight":
      moveRight();
      break;
    case "Exit":
      console.log(distinctPositions);
      movingDirection = "DONE";
      break;
  }

}



function moveRight(){

    for (let x = posX; x < inputMap[posY].length + 2; x++) {

      if (x == inputMap[posY].length + 1){
        movingDirection = "Exit";
        break;
        return;
      }


      if (inputMap[posY].charAt(x) == "."){
        distinctPositions = distinctPositions + 1;
        let inputMapx = inputMap[posY].substring(0,x)+'X'+inputMap[posY].substring(x+1);
        inputMap[posY] = inputMapx;
      }

      if (inputMap[posY].charAt(x) == "#"){
        posX = x - 1;
        movingDirection = "GoDown";
        return;
      }
    }


}

function moveDown(){

  for (let y = posY; y < inputMap.length + 1; y++) {

    if (y == inputMap.length){
      movingDirection = "Exit";
      break;
      return;
    }

    if (inputMap[y].charAt(posX) == "."){
      distinctPositions = distinctPositions + 1;
      let inputMapx = inputMap[y].substring(0,posX)+'X'+inputMap[y].substring(posX+1);
      inputMap[y] = inputMapx;
    }

    if (inputMap[y].charAt(posX) == "#"){
      posY = y - 1;
      movingDirection = "GoLeft";
      return;
    }
  }
}

function moveLeft(){


  for (let x = posX; x > -2; x--) {

    if (x == -1){
      movingDirection = "Exit";
      break;
      return;
    }

    if (inputMap[posY].charAt(x) == "."){
      distinctPositions = distinctPositions + 1;
      let inputMapx = inputMap[posY].substring(0,x)+'X'+inputMap[posY].substring(x+1);
      inputMap[posY] = inputMapx;
    }

    if (inputMap[posY].charAt(x) == "#"){
      posX = x + 1;
      movingDirection = "GoUp";
      return;
    }
  }

}

function moveUp(){
  for (let y = posY; y > -2; y--) {

    if (y == -1){
      movingDirection = "Exit";
      break;
      return;
    }

    if (inputMap[y].charAt(posX) == "."){

      distinctPositions = distinctPositions + 1;
      let inputMapx = inputMap[y].substring(0,posX)+'X'+inputMap[y].substring(posX+1);
      inputMap[y] = inputMapx;

    }

    if (inputMap[y].charAt(posX) == "#"){
      posY = y + 1;
      movingDirection = "GoRight";
      return;
    }

  }
}
