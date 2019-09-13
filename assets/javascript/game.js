'use strict'

let wins = 0;
let losses = 0;
let guesses_left = 10;
let input_character = "";

let show_choices = {
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

let selected_show = "";


new UserInput();

//everything starts with user input.

function UserInput (){
  if (new IsValidInput(input_character)){
       if(guesses_left === 0) {
          console.log("sorry game is over");
          return;
        }
      
        else if (guesses_left == 10){
          console.log("starting new game");
          new BeginGame();
        }
      
      
      new IsMatchingInput();
      //insert code to check if the puzzle is solved
      guesses_left = guesses_left - 1; 
  
   }
  
  else {
    return;
  }
}


//new game orchestration
function BeginGame (){

}
 
    
  


//check if entry was a valid guess (letter and not already guessed)
function IsValidInput() {
  console.log("checking for alpha input");
}


//check if letter was a match or not
function IsMatchingInput(){
  console.log("checking for a match");
}



//if game is over, clear out puzzle word





















