// random value generated
  var y = Math.floor(Math.random()* 10 + 1);
// counting the number of guesses
var x = document.getElementById("guessField").valuel;
// made for correct Guess
if (x==y){
alert("CONGRATULATIONS!!!"+playername+"   YOU GUESSED IT RIGHT IN "
    + guess + " GUESS ");
    guess = 1;
}
  else {

guess++;
alert("OOPS SORRY!! TRY A GREATER NUMBER")
  }
// function for number guessed by user     
function playAgain(){

y = Math.floor(Math.random() * 10 + 1);

}