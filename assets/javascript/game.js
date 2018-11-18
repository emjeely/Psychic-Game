var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var wins = 0;
var losses = 0;
var guessesLeft = 10
var lettersGuessed = [];
var ComputerGuess = [];


document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toUpperCase(); //taking in user guess
  var computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)]; //computer selects random letter
  lettersGuessed.push(userGuess); //pushing user guess to guesses so far
  if (userGuess == computerGuess) {
      wins++;
      alert("GOOD JOB! You've guesesed corrrectly. YOU WON!");
      guessesLeft = 10; //reseting the guesses back to 9 so that the user can play again
      lettersGuessed.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
  }
  else if (guessesLeft == 0){
      losses++;
      alert("You didn't guess the correct letter. YOU LOST! try again.");
      guessesLeft = 9;
      lettersGuessed.length = 0;
  }
  else if (userGuess !== computerGuess){
      guessesLeft--; //decrementing the guesses left
  } 


  
  document.querySelector('#wins').innerHTML = wins;

  document.querySelector('#losses').innerHTML = losses;

  document.querySelector('#guessesL').innerHTML = guessesLeft;

  document.querySelector('#guessesSF').innerHTML = lettersGuessed;
}

  // // Taking the tallies and displaying them in HTML    
  // var html = "<h1>The Psychic Game</h1>" + 
  // "<p>Guess what letter I'm thinking of!</p>" +
  // "<p>Total Wins: " + 
  // wins + 
  // "</p>" +
  // "<p>Total Losses: " + 
  // losses + 
  // "</p>" +
  // "<p>Guesses Left: " + 
  // guessesLeft + 
  // "</p>" +
  // "<p>Your Guesses so far: " +
  // lettersGuessed +
  // "</p>"
  // ;
  // // Placing the html into the game ID
  // document.querySelector('#game').innerHTML = html;





// console.log("hi i love pizza", alphabet);


// the app needs to pick a random character
//the user has to guess what character the app shows
// keep track of wins and losses
// show inputted chrs until user wins or losses