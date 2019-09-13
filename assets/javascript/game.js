'use strict'

let wins = 0;
let losses = 0;
let guesses_left = 10; 
let input_character = "T";

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

let selected_show = "Sons Of Anarchy";
selected_show = selected_show.toUpperCase();
selected_show = selected_show.replace(/\s+/g, '');
 

new UserInput();

//everything starts with user input.

function UserInput (){
  if (IsValidInput(input_character)){
       
       if(guesses_left === 0) {
          console.log("sorry game is over");
          return;
        } 
      
        else if (guesses_left == 10){
          console.log("Guesses remaining");
          new BeginGame();
        }
       
      new IsMatchingInput();
      //insert code to check if the puzzle is solved
      guesses_left = guesses_left - 1; 
      console.log(selected_show);
   }
  
  else {
    return; 
  }
}
 
//new game orchestration
function BeginGame (){

}
 
//check if entry was a letter
function IsValidInput(input_character) {
  console.log("Input received...check for validity");
 
   if(/^[a-zA-Z]/.test(input_character))
     {
      console.log("valid character: proceed");
      return true;
     } 
   else
     {
     console.log("invalid character: do nothing");
     return false;
     }
}


//check if letter was a match or not
function IsMatchingInput(){
  console.log("checking for a match");
  if (selected_show.includes(input_character.toUpperCase())){
    console.log("match");
    return true;
    }
  else{
    console.log("not a match");
    return false;
  }
  
}



//if game is over, clear out puzzle word





















