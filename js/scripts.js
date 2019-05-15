const DEFAULT_GUESSES =10
let numberOfAvailableGuesses = DEFAULT_GUESSES
document.getElementById("numberOfRemainingGuesses").innerHTML = numberOfAvailableGuesses;
let generatedRandomNumber


function guessNumber() {
  if (numberOfAvailableGuesses  === 0 ) {
    newGame();
    return;
  }
  generatedRandomNumber = Math.floor(Math.random() *100);
  console.log(generatedRandomNumber)
  // if (guess < generatedRandomNumber) {
  //   document.getElementById('wrongGuess').style.visibility = 'visible'
  // }else if (guess > generatedRandomNumber) {
  //   document.getElementById('wrongGuess').style.visibility = 'visible'
  // }else {
  //   document.getElementById('correctGuess').style.visibility = 'visible'
  //   newGame();
  // return;
  // }
  document.getElementById("guess-btn").style.visibility = "hidden"
  document.getElementById("guessAgain-btn").style.visibility = "visible"
  document.getElementById('guess').value = ''
  document.getElementById('numberOfRemainingGuesses').innerHTML = --numberOfAvailableGuesses
  checkGuess();
}

function checkGuess() {
  let guessValue = document.getElementById("guess").value
  console.log("guessvalue " + guessValue.toString() + "randomnumber" + generatedRandomNumber)
  if (guessValue < generatedRandomNumber) {
    document.getElementById('guessTooSmallError').style.visibility = 'visible'
  }else if (guessValue > generatedRandomNumber) {
    document.getElementById('guessTooBigError').style.visibility = 'visible'
    console.log('big')
  }else {
    document.getElementById('correctGuess').style.visibility = 'visible'
    newGame();
  }
}

function guessAgain() {
  document.getElementById('guess').value = ''
  document.getElementById('numberOfRemainingGuesses').innerHTML = --numberOfAvailableGuesses
  if (numberOfAvailableGuesses === 0) {
    console.log("heeeee")
    document.getElementById("guessAgain-btn").style.visibility = "hidden"
  checkGuess();
  }
}

function newGame() {
  numberOfAvailableGuesses = DEFAULT_GUESSES
  document.getElementById('numberOfRemainingGuesses').innerHTML = numberOfAvailableGuesses;
  document.getElementById("guess-btn").style.visibility = "visible"
  document.getElementById('wrongGuess').style.visibility = 'hidden'
  document.getElementById('correctGuess').style.visibility = 'hidden'
  generatedRandomNumber = 0;
}

// function checkLives(numberOfRemainingGuesses) {
//   if (numberOfRemainingGuesses === 0) {
//     newGame();
//   }
// }

function addElementToGuessLogArray () {
  let guessHistoryArray = [];
  for (var i = 0; i < 10; i++) {
    numberOfAvailableGuesses -= 1;
    guessHistoryArray.push(document.getElementById('guess').value = '')
  }
}
