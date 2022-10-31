// // Data Types
// var age = 18;                           // number 
// var name = "Jane";                      // string
// var name = {first:"Jane", last:"Doe"};  // object
// var truth = false;                      // boolean
// var sheets = ["HTML","CSS","JS"];       // array
// var a; typeof a;                        // undefined
// var a = null;                           // value null

// // Variables
// var a;                          // variable
// var b = "init";                 // string
// var c = "Hi" + " " + "Joe";     // = "Hi Joe"
// var d = 1 + 2 + "3";            // = "33"
// var e = [2,3,5,8];              // array
// var f = false;                  // boolean
// var g = /()/;                   // RegEx
// var h = function(){};           // function object
// const PI = 3.14;                // constant
// var a = 1, b = 2, c = a + b;    // one line
// let z = 'zzz';                  // block scope local variable


// // switch statement

// switch (new Date().getDay()) {      // input is current day
//     case 6:                         // if (day == 6)
//         text = "Saturday";          
//         break;
//     case 0:                         // if (day == 0)
//         text = "Sunday";
//         break;
//     default:                        // else...
//         text = "Whatever";
//     } 

// Example Code 
// var tweet = prompt("Compose your tweet:");
// var tweetUnder140 = tweet.slice(0,140);
// alert (tweetUnder140)
// var firstChar = name.slice(0,1)
    

// Karel Chessboard move
// function main(){
//     beepersRight();
//     goUpTurnLeft();
//     beepersLeft();
//     goUpTurnRight();
//        beepersRight();
//     goUpTurnLeft();
//     beepersLeft();
//     goUpTurnRight();
//        beepersRight();
//  }
  
//  function goUpTurnRight() {
//     turnRight();
//     move();
//     turnRight();
//  }
  
//  function goUpTurnLeft() {
//     turnLeft();
//     move();
//     turnLeft();
//  }
  
//  function beepersRight() {
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();  
//  }
  
//  function beepersLeft() {
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//  }

// function getMilk(bottles) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buy " + bottles + "bottles of Milk");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }

//   getMilk (12);

function lifeInWeeks(age) {
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    console.log("You have " + days + " days, " + weeks + " weeks, and "
    + months + " months left. ");
    console.log("Time is precious my friend, use it wisely.")
}

lifeInWeeks(12);

