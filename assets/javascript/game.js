'use strict'

String.prototype.setCharAt = function(idx, chr) {
  return this.substr(0, idx) + chr + this.substr(idx+1) ;  
};
 
let puzzle = {
  input_character: "o",
  selected_show: "The Office",
  displayed_result: "",
  unguessed_character_count: 0,
  wins: 0,
  losses: 0,
  guesses_left: 10,
  matching_letters: 0
  };

puzzle.input_character = puzzle.input_character.toUpperCase();
puzzle.selected_show = puzzle.selected_show.toUpperCase();
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
        
 

new UserInput();


//everything starts with user input.

function UserInput (){
  console.log("function: user input") ;
  if (new IsValidInput(puzzle.input_character)){
       
       if(puzzle.guesses_left === 0) {
          puzzle.displayed_result = "Game Over. Press Any Letter to Play Again"
          console.log("  sorry game is over");
          return;
        } 
      
        else if (puzzle.guesses_left == 10){
          new SetupGame();
          
        }
       
      new IsMatchingInput();
      
      if (puzzle.unguessed_character_count <= 0){
        console.log("puzzle solved!");
        puzzle.displayed_result = "Puzzle Solved. Press Any Key To Begin"
      }
      console.log("old displayed result: " + puzzle.displayed_result);

      puzzle.guesses_left -= 1; 
   
     //insert code to display correctly guessed letter(s)
     
     
     
     var j;
    for (j = 0; j < puzzle.selected_show.length; j++) {
      if (puzzle.selected_show.charAt(j)== puzzle.input_character){
       console.log(j);
      puzzle.displayed_result = puzzle.displayed_result.setCharAt(j, puzzle.input_character);
               
      }; 
  
} 
     console.log("new displayed result: " + puzzle.displayed_result);
      
      console.log("matching letters (this guess): " + puzzle.matching_letters);
      
      console.log("new number of unguessed letters: " + puzzle.unguessed_character_count);
      
      console.log("guesses left: " + puzzle.guesses_left);
       }
   
  else {
    //do nothing if it wasnt a valid input
    return; 
  }
}
 
 
//check if entry was a letter
function IsValidInput(input_character) {
  console.log("function: IsValidInput");
   if(/^[a-zA-Z]/.test(input_character))
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
  puzzle.selected_show = show_choices[Math.floor(Math.random() * show_choices.length)];
  puzzle.selected_show = puzzle.selected_show.toUpperCase();
  puzzle.selected_show = puzzle.selected_show.replace(/\s+/g, '');
  console.log("randomly selected show: " +  puzzle.selected_show);
  puzzle.unguessed_character_count = puzzle.selected_show.length; 
  
var i;
for (i = 0; i < puzzle.selected_show.length; i++) {
  puzzle.displayed_result = puzzle.displayed_result + "_";
} 

}

//check if letter was a match or not
function IsMatchingInput(){
  console.log("function:IsMatchingInput");
  console.log("number of unguessed letters: " + puzzle.unguessed_character_count);    
  console.log("guessed letter: " + puzzle.input_character);
  if (puzzle.selected_show.includes(puzzle.input_character.toUpperCase())){
    console.log("letter is a match");
    let n = new RegExp(puzzle.input_character.toUpperCase(), 'g' );
    puzzle.matching_letters = (puzzle.selected_show.match(n) || []).length;
    
    puzzle.unguessed_character_count -= puzzle.matching_letters
    
    return true; 
    }  
  else{
    console.log("letter is not a match");
    return false;
  }
}
    



