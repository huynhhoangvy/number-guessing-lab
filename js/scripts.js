const DEFAULT_GUESSES = 10
let numberOfAvailableGuesses = DEFAULT_GUESSES
document.getElementById("numberOfRemainingGuesses").innerHTML = numberOfAvailableGuesses;
let generatedRandomNumber, lastGuessValue
let guessHistory = []
let previousRoundsGuessHistory = []
let roundNumber = 0
let bestResult = []
let second = 0
let secondsToTimeout = 30
let callSetInterval, callTimeOut, callCountTimeLeft
let timeToFinishRound = []
let totalTime = 0

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
  roundNumber += 1
  document.getElementById("roundNumber").innerHTML = roundNumber
  resetCountTimeLeft()
  countTimeLeft()
  resetTimeOut()
  timeOut()
}

function checkGuess() {
  let guessValue = document.getElementById("guess").value
  console.log("guessvalue " + guessValue.toString() + " randomnumber " + generatedRandomNumber)

  if (guessHistory.includes(guessValue)) {
    alert("Pick another number")
    return;
  }

  guessHistory.push(guessValue);
  document.getElementById("guessHistory").innerHTML = guessHistory;
  previousRoundsGuessHistory.push(guessValue)
  document.getElementById("previousRoundsGuessHistory").innerHTML = previousRoundsGuessHistory

  if (numberOfAvailableGuesses === 1 && guessValue !== generatedRandomNumber) {
    updateUiGameOver()
    resetCountTimeLeft()
    resetTimeOut()

  } else {
    if (guessValue < generatedRandomNumber) {
      document.getElementById("guessTooSmallError").style.visibility = "visible"
      document.getElementById("guessTooBigError").style.visibility = "hidden"

      updateUiForEachTurn();
    } else if (guessValue > generatedRandomNumber) {
      document.getElementById("guessTooBigError").style.visibility = "visible"
      document.getElementById("guessTooSmallError").style.visibility = "hidden"

      updateUiForEachTurn();
    } else {
      updateBestResult()
      updateUiWinner()
      return
    }
  }
  resetCountTimeLeft()
  countTimeLeft()
  resetTimeOut()
  timeOut()
}

function countTimeLeft() {
  secondsToTimeout = 30
  callCountTimeLeft = setInterval(decrementSecond, 1000)
}

function resetCountTimeLeft() {
  secondsToTimeout = 0
  clearInterval(callCountTimeLeft)
  document.getElementById("secondsToTimeOut").innerHTML = "You have " + secondsToTimeout + " seconds left."
}

function decrementSecond() {
  secondsToTimeout -= 1
  document.getElementById("secondsToTimeOut").innerHTML = "You have " + secondsToTimeout + " seconds left."
}

function timeOut() {
  callTimeOut = setTimeout(timeOutAction, 30000)
}

function resetTimeOut() {
  secondsToTimeout = 30
  clearTimeout(callTimeOut)
  document.getElementById("secondsToTimeOut").innerHTML = "You have " + secondsToTimeout + " seconds left."
}

function timeOutAction() {
  updateUiForEachTurn()
  document.getElementById("secondsToTimeOut").innerHTML = "You have " + secondsToTimeout + " seconds left."
  alert("Time out! You lose your current turn.")
}

function updateBestResult() {
  bestResult.push(DEFAULT_GUESSES - numberOfAvailableGuesses + 1)
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
  document.getElementById("guessTooBigError").style.visibility = "hidden"
  document.getElementById("guessTooSmallError").style.visibility = "hidden"
  document.getElementById("guess").disabled = true
  document.getElementById("guess-btn").disabled = true
  timeToFinishRound.push(30 - secondsToTimeout)
  for (var i = 0; i < timeToFinishRound.length; i++) {
   totalTime += timeToFinishRound[i]
  }

  document.getElementById("totalTime").innerHTML = "You completed this round in " + totalTime + " seconds"
  resetTimeOut()
  resetCountTimeLeft()
  

}

function updateUiForEachTurn() {
  document.getElementById("guess").value = ""
  document.getElementById("numberOfRemainingGuesses").innerHTML = --numberOfAvailableGuesses
  timeToFinishRound.push(30 - secondsToTimeout)
  resetCountTimeLeft()
  countTimeLeft()
  resetTimeOut()
  timeOut()
}