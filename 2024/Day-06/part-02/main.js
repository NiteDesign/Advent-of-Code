
const fs = require('fs')

var distinctPositions = 0;
var distinctLoopPositions = 0;

var loopCounter = 0;
//Load input txt
var inputMap = fs.readFileSync('input.txt').toString().split("\n");

var posX = 4;
var posY = 6;

console.log(inputMap[posY].charAt(posX));

let movingDirection = "GoUp";

let obstructMap = [];

//Iterating each row(y)
for (let yLoop = 0; yLoop < inputMap.length; yLoop++) {
  //Iterating each char(x)

  console.log("Y: " + yLoop);
  for (let xLoop = 0; xLoop < inputMap.length; xLoop++) {
    console.log("X: " + xLoop);
    obstructMap = [];
    console.log(obstructMap);
    console.log(inputMap);
    obstructMap = inputMap;
    console.log(obstructMap);
    obstructMapx = obstructMap[yLoop].substring(0,xLoop)+'#'+obstructMap[yLoop].substring(xLoop+1);
    obstructMap[yLoop] = obstructMapx;

    //reset loopCounter
    loopCounter = 0;
    posX = 4;
    posY = 6;
    movingDirection = "GoUp";

    while (movingDirection !== "DONE"){
      console.log("WHILE STATMENT");
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
          console.log("Exited Map - NOT BLOCKING");
          distinctLoopPositions = distinctLoopPositions + 1;
          movingDirection = "DONE";
          break;
        case "Looping":
          console.log("Looper");
          distinctLoopPositions = distinctLoopPositions + 1;
          movingDirection = "DONE";
          break;
      }

    }

  }
}

function moveRight(){
    console.log("move right");
    for (let x = posX; x < obstructMap[posY].length + 2; x++) {

      if (x == obstructMap[posY].length + 1){
        movingDirection = "Exit";
        break;
        return;
      }


      if (obstructMap[posY].charAt(x) == "."){
        distinctPositions = distinctPositions + 1;
        let obstructMapx = obstructMap[posY].substring(0,x)+'X'+obstructMap[posY].substring(x+1);
        obstructMap[posY] = obstructMapx;
        //reset loopCounter
        loopCounter = 0;
      }

      if (obstructMap[posY].charAt(x) == "#"){
        posX = x - 1;
        loopCounter = loopCounter + 1;
        movingDirection = "GoDown";
        return;
      }
    }


}

function moveDown(){
  console.log("move down");
  for (let y = posY; y < obstructMap.length + 1; y++) {

    if (y == obstructMap.length){
      movingDirection = "Exit";
      break;
      return;
    }

    if (obstructMap[y].charAt(posX) == "."){
      distinctPositions = distinctPositions + 1;
      let obstructMapx = obstructMap[y].substring(0,posX)+'X'+obstructMap[y].substring(posX+1);
      obstructMap[y] = obstructMapx;
      //reset loopCounter
      loopCounter = 0;
    }

    if (obstructMap[y].charAt(posX) == "#"){
      posY = y - 1;
      loopCounter = loopCounter + 1;
      movingDirection = "GoLeft";
      return;
    }
  }
}

function moveLeft(){
  console.log("move left");

  for (let x = posX; x > -2; x--) {

    if (x == -1){
      movingDirection = "Exit";
      break;
      return;
    }

    if (obstructMap[posY].charAt(x) == "."){
      distinctPositions = distinctPositions + 1;
      let obstructMapx = obstructMap[posY].substring(0,x)+'X'+obstructMap[posY].substring(x+1);
      obstructMap[posY] = obstructMapx;
      //reset loopCounter
      loopCounter = 0;
    }

    if (obstructMap[posY].charAt(x) == "#"){
      posX = x + 1;
      loopCounter = loopCounter + 1;
      movingDirection = "GoUp";
      return;
    }
  }

}

function moveUp(){
  console.log("move up");
  for (let y = posY; y > -2; y--) {

    if (y == -1){
      movingDirection = "Exit";
      break;
      return;
    }

    console.log(obstructMap);
    if (obstructMap[y].charAt(posX) == "."){

      distinctPositions = distinctPositions + 1;
      let obstructMapx = obstructMap[y].substring(0,posX)+'X'+obstructMap[y].substring(posX+1);
      obstructMap[y] = obstructMapx;
      //reset loopCounter
      loopCounter = 0;

    }

    if (obstructMap[y].charAt(posX) == "#"){
      posY = y + 1;
      loopCounter = loopCounter + 1;
      movingDirection = "GoRight";
      return;
    }

  }
}
