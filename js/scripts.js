const DEFAULT_GUESSES = 10
let numberOfAvailableGuesses = DEFAULT_GUESSES
document.getElementById("numberOfRemainingGuesses").innerHTML = numberOfAvailableGuesses;
let generatedRandomNumber
let array = []

newGame()

function newGame() {
  numberOfAvailableGuesses = DEFAULT_GUESSES
  generatedRandomNumber = Math.floor(Math.random() * 100);
  console.log("random " + generatedRandomNumber)
  document.getElementById('numberOfRemainingGuesses').innerHTML = numberOfAvailableGuesses;
  document.getElementById("guess-btn").disabled = false
  document.getElementById("guess-btn").style.visibility = "visible"
  document.getElementById('guessTooSmallError').style.visibility = 'visible'
  document.getElementById('guessTooBigError').style.visibility = 'visible'
  document.getElementById('correctGuess').style.visibility = 'visible'
  document.getElementById("btn_new_game").style.visibility = "visible"
  document.getElementById("game-over-div").style.visibility = "visible"
  array = []
  document.getElementById('array').innerHTML = "";
}

function checkGuess() {
  let guessValue = document.getElementById("guess").value
  array.push(guessValue);
  document.getElementById('array').innerHTML = array;

  console.log("array" + array)
  console.log("guessvalue " + guessValue.toString() + "randomnumber" + generatedRandomNumber)
  if (numberOfAvailableGuesses === 1 && guessValue !== generatedRandomNumber) {
    updateUiGameOver()
  } else {
    if (guessValue < generatedRandomNumber) {
      document.getElementById('guessTooSmallError').style.visibility = 'visible'
      doSomething();
    } else if (guessValue > generatedRandomNumber) {
      document.getElementById('guessTooBigError').style.visibility = 'visible'
      console.log('big')
      doSomething();
    } else {
      updateUiWinner()
    }
  }
}

function updateUiGameOver() {
  document.getElementById('numberOfRemainingGuesses').innerHTML = 0
  document.getElementById("game-over-div").style.visibility = "visible"
  document.getElementById("guess-btn").disabled = true
  document.getElementById("btn_new_game").style.visibility = "visible"

}

function updateUiWinner() {
  document.getElementById("btn_new_game").style.visibility = "visible"
  document.getElementById('correctGuess').style.visibility = 'visible'
  document.getElementById("guess-btn").disabled = true
}

function doSomething() {
  document.getElementById('guess').value = ''
  document.getElementById('numberOfRemainingGuesses').innerHTML = --numberOfAvailableGuesses
  console.log("doing something")
}