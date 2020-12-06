// --- Day 2: Password Philosophy ---
// Your flight departs in a few days from the coastal airport; the easiest way down to the coast from here is via toboggan.
//
// The shopkeeper at the North Pole Toboggan Rental Shop is having a bad day. "Something's wrong with our computers; we can't log in!" You ask if you can take a look.
//
// Their password database seems to be a little corrupted: some of the passwords wouldn't have been allowed by the Official Toboggan Corporate Policy that was in effect when they were chosen.
//
// To try to debug the problem, they have created a list (your puzzle input) of passwords (according to the corrupted database) and the corporate policy when that password was set.
//
// For example, suppose you have the following list:
//
// 1-3 a: abcde
// 1-3 b: cdefg
// 2-9 c: ccccccccc
// Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.
//
// In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.
//
// How many passwords are valid according to their policies?


const fs = require('fs')

var array = fs.readFileSync('input.txt').toString().split("\n");
var numValidPwds = 0;

function char_count(str, letter){
  var letterCount = 0;
  for (var position = 0; position < str.length; position++){
    if (str.charAt(position) == letter){
      letterCount += 1;
    }
  }
  return letterCount;
}

// Get each array item and iterate
for (var i = 0; i < array.length; i++) {
  var pwdItem = array[i].toString().split(" ");
  // Get ruleset
  var rule = pwdItem[0].toString().split("-");
  var ruleMin = rule[0];
  var ruleMax = rule[1];

  // Get character value
  var ruleChar = pwdItem[1].charAt(0);

  var charCount = char_count(pwdItem[2], ruleChar);
  if (charCount >= ruleMin && charCount <= ruleMax){
    numValidPwds += 1;
  }
}

console.log("Number Valid Pwds: " + numValidPwds);

