'use strict'

let shows = {
    choices:[
        ['Game Of Thrones'],
        ['The Simpsons'],
        ['Breaking Bad'],
        ['Always Sunny'],
        ['The Office'],
        ['Top Gear'],
        ['The Grand Tour'],
        ['Parks and Rec'],
        ['Family Guy'],
        ['Sons Of Anarchy']
        
    ]
};


let wins = 0;
let losses = 0;
let guessed = 0;
let guesses_left = 10;
let user_input = '';
let game_continue = yes;


//check for valid game status
function ValidGameStatus() {
  if(guesses_left === 0) {
  console.log("Sorry game is over");
  return
  }
  else {
    console.log("Adequate Guesses left");
    return true
  }
} 


//check if entry was a valid guess (letter and not already guessed)
function ValidInput() {};

//check if letter was a match or not
function MatchingInput(){};



//lay out game orchestration
function BeginGame (){
  console.log("Begin Game")
 
  if (new ValidGameStatus()) {
    console.log("proceed to next game step");
    new ValidInput();
    new MatchingInput();
    
    }
  }




// actually start game orchestration here
new BeginGame();


