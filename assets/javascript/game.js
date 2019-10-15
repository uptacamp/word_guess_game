'use strict'

String.prototype.setCharAt = function(idx, chr) {
  return this.substr(0, idx) + chr + this.substr(idx+1) ;  
};
 
let puzzle = {
  input_character: "",
  selected_show: "",
  displayed_result: "",
  wins: 0,
  losses: 0,
  guesses_left: 10,
  matching_letters: 0,
  first_guess_occurred: false,
  letters_guessed: ""
  };

//puzzle.selected_show = puzzle.selected_show.toUpperCase();
puzzle.displayed_result = puzzle.displayed_result.toUpperCase();

let show_choices = [
        'Game Of Thrones',
        'The Simpsons',
        'Breaking Bad',
        'Always Sunny',
        'The Office',
        'Top Gear',
        'The Grand Tour',
        'Parks and Rec',
        'Family Guy',
        'Sons Of Anarchy']
        

function UserInput (){
  console.log("function: user input") ;
  puzzle.input_character = event.keyCode;
  puzzle.input_character = String.fromCharCode(puzzle.input_character);
  puzzle.input_character = puzzle.input_character.toUpperCase();
  console.log(puzzle.input_character);
  
  if (IsValidInput(puzzle.input_character)){
      puzzle.letters_guessed = puzzle.input_character + ", " + puzzle.letters_guessed;
      document.getElementById("letters_guessed").innerHTML = puzzle.letters_guessed; 
      if (puzzle.first_guess_occurred == false){
          new SetupGame();
          new IsMatchingInput();
        }
       
      else {
          new IsMatchingInput();
        }

      puzzle.first_guess_occurred = true;
      
      
      console.log("old displayed result: " + puzzle.displayed_result);

      
   
    var j;
    for (j = 0; j < puzzle.selected_show.length; j++) {
      if (puzzle.selected_show.charAt(j)== puzzle.input_character){
      puzzle.displayed_result = puzzle.displayed_result.setCharAt(j, puzzle.input_character);       
      }; 
      document.getElementById("banner").innerHTML = puzzle.displayed_result;
      } 

      console.log("matching letters (this guess): " + puzzle.matching_letters);
      
      
      if(puzzle.displayed_result == puzzle.selected_show){
        
      setTimeout(function() {
        alert("YOU WIN! Press OK to start new game");
        location.reload();
      }, 500);
     
      }
    }
   else {
    //do nothing if it wasnt a valid input
    return; 
  }
}
 
 
//check if entry was a letter
function IsValidInput(input_character) {
  console.log("function: IsValidInput");
   if(/^[a-zA-Z]/.test(input_character) & puzzle.input_character !== "" & puzzle.input_character.length == 1)
     {
      return true;
     } 
   else
     {
     console.log("  invalid character: do nothing");
     return false;
     }
}

//new game orchestration
function SetupGame (){
  console.log("function: SetupGame");
  puzzle.selected_show= "";
  puzzle.displayed_result= "";
  puzzle.wins= 0;
  puzzle.losses= 0;
  puzzle.guesses_left= 10;
  puzzle.matching_letters= 0;
  puzzle.selected_show = show_choices[Math.floor(Math.random() * show_choices.length)];
  puzzle.selected_show = puzzle.selected_show.toUpperCase();
  puzzle.selected_show = puzzle.selected_show.replace(/\s+/g, '');
  console.log("randomly selected show: " +  puzzle.selected_show);

  var i;
  for (i = 0; i < puzzle.selected_show.length; i++) {
    puzzle.displayed_result = puzzle.displayed_result + "_";
  } 
}

//check if letter was a match or not
function IsMatchingInput(){
  console.log("function:IsMatchingInput");
   
  console.log("guessed letter: " + puzzle.input_character);
  if (puzzle.selected_show.includes(puzzle.input_character.toUpperCase())){
    console.log("letter is a match");
    let n = new RegExp(puzzle.input_character.toUpperCase(), 'g' );
    puzzle.matching_letters = (puzzle.selected_show.match(n) || []).length;
    console.log("guesses left: " + puzzle.guesses_left);
    return true; 
    }  
    
  else{
    console.log("letter is not a match");
    puzzle.guesses_left -= 1;
    console.log("guesses left: " + puzzle.guesses_left);
    document.getElementById("guesses_left").innerHTML = puzzle.guesses_left;

    if(puzzle.guesses_left == 0) {
      console.log("Game over");
      
      setTimeout(function() {
        alert("Game Over. Click OK to load a new game");
      location.reload();
      }, 500);
      
      
    } 
    return false;
  }
}
    



