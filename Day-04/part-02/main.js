// --- Part Two ---
// The line is moving more quickly now, but you overhear airport security talking about how passports with invalid data are getting through. Better add some data validation, quick!
//
// You can continue to ignore the cid field, but each other field has strict rules about what values are valid for automatic validation:
//
// byr (Birth Year) - four digits; at least 1920 and at most 2002.
// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
// pid (Passport ID) - a nine-digit number, including leading zeroes.
// cid (Country ID) - ignored, missing or not.

const fs = require('fs')

var arrayData = fs.readFileSync('input.txt').toString().split("\r\n");
var passPortArray = [];
var passPort = "";
var numValidPassports = 0;
var validParameters = [
  "byr:",
  "iyr:",
  "eyr:",
  "hgt:",
  "hcl:",
  "ecl:",
  "pid:"
]

// Build passport array
for (var i = 0; i < arrayData.length; i++) {
  if(arrayData[i].length > 1){
    passPort = passPort.concat(' ', arrayData[i]);
  }else {
    passPortArray.push(passPort.trim());
    passPort = "";
  }
}

for (var i = 0; i < passPortArray.length; i++) {
  var validPassort = fnValidatePassprt(passPortArray[i]);
  if(validPassort == "true"){
    numValidPassports += 1;
  }
}

function fnValidatePassprt(data){

  dataFields = data.toString().split(" ");
  var numValidParams = 0;
  var validCountry = "false";

  for (var x = 0; x < dataFields.length; x++) {
    data = dataFields[x].toString().split(":");
    if(data[0] == ("byr")){
      if ((data[1].length == 4) && (data[1] >= 1920 && data[1] <= 2002)){
        numValidParams = numValidParams + 1;
      }
    }

    if(data[0] == ("iyr")){
      if ((data[1].length == 4) && (data[1] >= 2010 && data[1] <= 2020)){
        numValidParams = numValidParams + 1;
      }
    }

    if(data[0] == ("eyr")){
      if ((data[1].length == 4) && (data[1] >= 2020 && data[1] <= 2030)){
        numValidParams = numValidParams + 1;
      }
    }

      if(data[0] == ("hgt")){
        var hgt = 0;
        if (data[1].includes("cm")){
          hgt = data[1].substr(0, data[1].length-2  );
          if (hgt >= 150 && hgt <= 193){
            numValidParams = numValidParams + 1;
          }
        }
        if (data[1].includes("in")){
          hgt = data[1].substr(0, data[1].length-2);
          if (hgt >= 59 && hgt <= 76){
            numValidParams = numValidParams + 1;
          }
        }
      }

    if(data[0] == ("hcl")){
      var regex = RegExp('#[a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9][a-f0-9]');
      if (regex.test(data[1]) && data[1].length == 7){
        numValidParams = numValidParams + 1;
      }
    }

    if(data[0] == ("ecl")){
      var regex = RegExp('amb|blu|brn|gry|grn|hzl|oth');
      if (regex.test(data[1])){
        numValidParams = numValidParams + 1;
      }
    }

    if(data[0] == ("pid")){
      var regex = RegExp('\\d{9}');
      if (regex.test(data[1]) && data[1].length == 9){
        numValidParams = numValidParams + 1;
      }
    }

    if(data[0] == ("cid")){
      validCountry = "true";
    }
  }

  if((validCountry == "false" && numValidParams == 7) || (validCountry == "true" && numValidParams == 7)){
    return "true";
  }else {
    return "false";
  }

}

console.log("Valid Passports: " + numValidPassports);

