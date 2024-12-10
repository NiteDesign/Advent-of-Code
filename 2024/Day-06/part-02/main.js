
const fs = require('fs')

var distinctPositions = 0;
var distinctLoopPositions = 0;

let loopCounter = 0;
//Load input txt
let inputMap = fs.readFileSync('input.txt').toString().split("\n");

var posX = 67;
var posY = 89;


let movingDirection = "GoUp";

let obstructMap = [];

//Iterating each row(y)
for (let yLoop = 0; yLoop < inputMap.length; yLoop++) {
  //Iterating each char(x)
  for (let xLoop = 0; xLoop < inputMap.length; xLoop++) {

    console.log("X: " + xLoop);
    console.log("Y: " + yLoop);
    inputMap = fs.readFileSync('input.txt').toString().split("\n");

    if (inputMap[yLoop].charAt(xLoop) == "."){
      obstructMap.length = 0;
      obstructMap = inputMap;
      obstructMapx = obstructMap[yLoop].substring(0,xLoop)+'0'+obstructMap[yLoop].substring(xLoop+1);
      obstructMap[yLoop] = obstructMapx;

      loopCounter = 0;
      posX = 67;
      posY = 89;
      movingDirection = "GoUp";
    } else if (inputMap[yLoop].charAt(xLoop) == "#") {
      movingDirection = "Skipping";
    }

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
          movingDirection = "DONE";
          break;
        case "Skipping":
          movingDirection = "DONE";
          break;
        case "Looping":
          distinctLoopPositions = distinctLoopPositions + 1;
          movingDirection = "DONE";
          break;
      }

    }

  }
}

console.log(distinctLoopPositions);

function moveRight(){

  //console.log("Move Right");
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

      if (obstructMap[posY].charAt(x) == "#" || obstructMap[posY].charAt(x) == "0"){
        posX = x - 1;
        loopCounter = loopCounter + 1;
        if(loopCounter > 20){
          movingDirection = "Looping";
          return;
        } else {
          movingDirection = "GoDown";
          return;
        }
      }

    }
}

function moveDown(){
  //console.log("Move Down");
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

    if (obstructMap[y].charAt(posX) == "#" || obstructMap[y].charAt(posX) == "0"){
      posY = y - 1;
      loopCounter = loopCounter + 1;
      if(loopCounter > 20){
        movingDirection = "Looping";
        return;
      } else {
        movingDirection = "GoLeft";
        return;
      }
    }
  }
}

function moveLeft(){
  //console.log("Move Left");
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

    if (obstructMap[posY].charAt(x) == "#" || obstructMap[posY].charAt(x) == "0"){
      posX = x + 1;
      loopCounter = loopCounter + 1;
      if(loopCounter > 20){
        movingDirection = "Looping";
        return;
      } else {
        movingDirection = "GoUp";
        return;
      }
    }
  }
}

function moveUp(){
  //console.log("Move Up");
  for (let y = posY; y > -2; y--) {

    if (y == -1){
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

    if (obstructMap[y].charAt(posX) == "#" || obstructMap[y].charAt(posX) == "0"){
      posY = y + 1;
      loopCounter = loopCounter + 1;
      if(loopCounter > 20){
        movingDirection = "Looping";
        return;
      }else{
        movingDirection = "GoRight";
        return;
      }
      return;
    }

  }
}
