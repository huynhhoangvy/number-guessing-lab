const DEFAULT_GUESSES = 10
let numberOfAvailableGuesses = DEFAULT_GUESSES
document.getElementById("numberOfRemainingGuesses").innerHTML = numberOfAvailableGuesses;
let generatedRandomNumber, lastGuessValue
let guessHistory = []
let previousRoundsGuessHistory = []
let number = 0
let bestResult = []
let second = 0;

newGame()

function newGame() {
  numberOfAvailableGuesses = DEFAULT_GUESSES
  generatedRandomNumber = Math.floor(Math.random() * 100);
  console.log("random " + generatedRandomNumber)
  document.getElementById("numberOfRemainingGuesses").innerHTML = numberOfAvailableGuesses;
  document.getElementById("guess-btn").disabled = false
  document.getElementById("guess").disabled = false
  document.getElementById("guess-btn").style.visibility = "visible"
  document.getElementById("guessTooSmallError").style.visibility = "hidden"
  document.getElementById("guessTooBigError").style.visibility = "hidden"
  document.getElementById("correctGuess").style.visibility = "hidden"
  document.getElementById("btn_new_game").style.visibility = "visible"
  document.getElementById("game-over-div").style.visibility = "hidden"
  document.getElementById("guess").value = ""
  document.getElementById("bestResult").innerHTML = bestResult

  guessHistory = []
  document.getElementById("guessHistory").innerHTML = guessHistory
  number += 1
  document.getElementById("number").innerHTML = number
  countDown()
}

function checkGuess() {
  let guessValue = document.getElementById("guess").value
  console.log("guessvalue " + guessValue.toString() + " randomnumber " + generatedRandomNumber)
 
if (guessHistory.includes(guessValue)) {
  alert("Pick another number")
  return;
}
countDown()


  guessHistory.push(guessValue);
  document.getElementById("guessHistory").innerHTML = guessHistory;
  previousRoundsGuessHistory.push(guessValue)
  document.getElementById("previousRoundsGuessHistory").innerHTML = previousRoundsGuessHistory
  
  if (numberOfAvailableGuesses === 1 && guessValue !== generatedRandomNumber) {
    updateUiGameOver()
  } else {
    if (guessValue < generatedRandomNumber) {
      document.getElementById("guessTooSmallError").style.visibility = "visible"
      updateUiForEachTurn();
    } else if (guessValue > generatedRandomNumber) {
      document.getElementById("guessTooBigError").style.visibility = "visible"
      updateUiForEachTurn();
    } else {
      updateBestResult()
      updateUiWinner()
    }
  }
}

function countDown() {
  second = 0
  setInterval(incrementSections, 1000)
}

function incrementSections() {
  second += 1
  document.getElementById("elapsedTime").innerHTML = "Elapsed time: " + second + " seconds."
}

function updateBestResult() {
  bestResult.push(DEFAULT_GUESSES - numberOfAvailableGuesses + 1)
  // bestResult.push(guessValue)
  document.getElementById("bestResult").innerHTML = bestResult
}

function updateUiGameOver() {
  document.getElementById("numberOfRemainingGuesses").innerHTML = 0
  document.getElementById("game-over-div").style.visibility = "visible"
  document.getElementById("guess-btn").disabled = true
  document.getElementById("guess").disabled = true
  document.getElementById("btn_new_game").style.visibility = "visible"

}

function updateUiWinner() {
  document.getElementById("btn_new_game").style.visibility = "visible"
  document.getElementById("correctGuess").style.visibility = "visible"
  document.getElementById("guess").disabled = true
  document.getElementById("guess-btn").disabled = true
}

function updateUiForEachTurn() {
  document.getElementById("guess").value = ""
  document.getElementById("numberOfRemainingGuesses").innerHTML = --numberOfAvailableGuesses
}