
const fs = require('fs')

let distinctPositions = 0;

//Load input txt
let inputMap = fs.readFileSync('input.txt').toString().split("\n");

let posX = 0;
let posY = 0;

let movingDirection = "GoUp";


//while (movingDirection != "Exit"){
  switch (movingDirection){

    case "GoUp":
      console.log("Move Up");
      movingDirection = moveUp(4,6);
      console.log(movingDirection);
      break;
    case "GoDown":
      console.log("Move Down");
      movingDirection = moveDown(posX,posY);
      break;
    case "GoLeft":
      console.log("Move Left");
      movingDirection = moveLeft(posX,posY);
      break;
    case "GoRight":
      console.log("Move Right");
      movingDirection = moveRight(posX,posY);
      break;
    case "Exit":
      console.log("Exit");
      break;
  }
  console.log("end while, run again");
//}


function moveRight(posX, posY){
  for (let x = posX; x < inputMap[posY].length; x++) {
    console.log("Moving Right");

    if (inputMap[posY].charAt(x) == "."){
      distinctPositions = distinctPositions + 1;
      inputMap = inputMap[posY].substring(0,x)+'X'+inputMap[posY].substring(x+1);
    }

    if (inputMap[posY].charAt(x) == "#"){
      return "GoDown"
    }
  }
}

function moveDown(posX, posY){

  for (let y = posY; y < inputMap.length; y++) {
    console.log("Moving Down");
    if (inputMap[y].charAt(posX) == "."){
      distinctPositions = distinctPositions + 1;
      inputMap = inputMap[y].substring(0,posX)+'X'+inputMap[y].substring(posX+1);
    }

    if (inputMap[y].charAt(posX) == "#"){
      return "GoLeft"
    }
  }

}

function moveLeft(posX, posY){
  for (let x = posX; x < inputMap[posY].length; x--) {
    console.log("Moving Left");

    if (inputMap[posY].charAt(x) == "."){
      distinctPositions = distinctPositions + 1;
      inputMap = inputMap[posY].substring(0,x)+'X'+inputMap[posY].substring(x+1);
    }

    if (inputMap[posY].charAt(x) == "#"){
      return "GoUp"
    }
  }
}

function moveUp(posX, posY){


  for (let y = posY; y > 0; y--) {

    console.log(posY);
    console.log(y);
    console.log(inputMap[y]);
    console.log(inputMap[y].charAt(posX));

    if (inputMap[y].charAt(posX) == "."){
      console.log("Moving Up");
      distinctPositions = distinctPositions + 1;
      inputMap = inputMap[y].substring(0,posX)+'X'+inputMap[y].substring(posX+1);
    }

    if (inputMap[y].charAt(posX) == "#"){
      console.log("-----------------Set MovingDirection--------------------");
      movingDirection = "GoRight";
    }
  }
}