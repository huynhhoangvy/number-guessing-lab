const DEFAULT_GUESSES = 10
let numberOfAvailableGuesses = DEFAULT_GUESSES
document.getElementById("numberOfRemainingGuesses").innerHTML = numberOfAvailableGuesses;
let generatedRandomNumber, lastGuessValue
let guessHistory = []

newGame()

function newGame() {
  numberOfAvailableGuesses = DEFAULT_GUESSES
  generatedRandomNumber = Math.floor(Math.random() * 100);
  console.log("random " + generatedRandomNumber)
  document.getElementById('numberOfRemainingGuesses').innerHTML = numberOfAvailableGuesses;
  document.getElementById("guess-btn").disabled = false
  document.getElementById("guess").disabled = false
  document.getElementById("guess-btn").style.visibility = "visible"
  document.getElementById('guessTooSmallError').style.visibility = 'hidden'
  document.getElementById('guessTooBigError').style.visibility = 'hidden'
  document.getElementById('correctGuess').style.visibility = 'hidden'
  document.getElementById("btn_new_game").style.visibility = "hidden"
  document.getElementById("game-over-div").style.visibility = "hidden"
  guessHistory = []
  document.getElementById('guess').value = ''
}

function checkGuess() {
  let guessValue = document.getElementById("guess").value

  // if (guessValue === lastGuessValue) {
  //   alert()
  // }
  console.log("guessvalue " + guessValue.toString() + " randomnumber " + generatedRandomNumber)
  // for (var i = 0; i < guessHistory.length; i ++) {
  //   if (guessHistory[i] === guessValue) {
  //     alert ("You did it before smartass!")
  //   }
  // }
  // array.indexof kiem tra phan tu da co trong array hay chua, xet indexof < 0 ====== phan tu moi
  // if(guessHistory.indexOf(guessValue) < 0) {
  //   alert("You did guess the same before!")
  // }
  // array.includes ???
 
  if (guessHistory.includes(guessValue)) {
    alert("Pick another number")
    return;
  }
  guessHistory.push(guessValue);
  document.getElementById('array').innerHTML = guessHistory;
  if (numberOfAvailableGuesses === 1 && guessValue !== generatedRandomNumber) {
    updateUiGameOver()
  } else {
    if (guessValue < generatedRandomNumber) {
      document.getElementById('guessTooSmallError').style.visibility = 'visible'
      updateUiForEachTurn();
    } else if (guessValue > generatedRandomNumber) {
      document.getElementById('guessTooBigError').style.visibility = 'visible'
      updateUiForEachTurn();
    } else {
      updateUiWinner()
    }
  }
}

function updateUiGameOver() {
  document.getElementById('numberOfRemainingGuesses').innerHTML = 0
  document.getElementById("game-over-div").style.visibility = "visible"
  document.getElementById("guess-btn").disabled = true
  document.getElementById("guess").disabled = true
  document.getElementById("btn_new_game").style.visibility = "visible"

}

function updateUiWinner() {
  document.getElementById("btn_new_game").style.visibility = "visible"
  document.getElementById('correctGuess').style.visibility = 'visible'
  document.getElementById("guess").disabled = true
  document.getElementById("guess-btn").disabled = true
}

function updateUiForEachTurn() {
  document.getElementById('guess').value = ''
  document.getElementById('numberOfRemainingGuesses').innerHTML = --numberOfAvailableGuesses
}

// function updateUiDuplicateGuess() {
// return guessValue
// }