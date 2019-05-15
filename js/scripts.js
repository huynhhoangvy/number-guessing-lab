let numberOfAvailableGuesses = 10

function guessNumber() {
  if (numberOfAvailableGuesses  === 0 ) {
    newGame();
    return;
  }
  const generatedRandomNumber = Math.floor(Math.random() *100);
  console.log(generatedRandomNumber)
  const guess = document.getElementById('guess').value

  if (guess < generatedRandomNumber) {
    document.getElementById('wrongGuess').style.visibility = 'visible'
  }

  if (guess > generatedRandomNumber) {
    document.getElementById('wrongGuess').style.visibility = 'visible'
  }

  if (guess === generatedRandomNumber) {
    document.getElementById('correctGuess').style.visibility = 'visible'
    newGame();
    return;
  }
  document.getElementById("guess-btn").style.visibility = "hidden"
  document.getElementById("guessAgain-btn").style.visibility = "visible"
  document.getElementById('guess').value = ''
  const remainingGuesses = document.getElementById('numberOfRemainingGuesses').innerHTML
  document.getElementById('numberOfRemainingGuesses').innerHTML = parseInt(remainingGuesses) - 1
  numberOfAvailableGuesses -= 1
  console.log(numberOfAvailableGuesses)
}

function newGame() {
  numberOfAvailableGuesses = 10
  document.getElementById('numberOfRemainingGuesses').innerHTML = 10;
  document.getElementById("guess-btn").style.visibility = "visible"
  document.getElementById('wrongGuess').style.visibility = 'hidden'
  document.getElementById('correctGuess').style.visibility = 'hidden'
  generatedRandomNumber = 0;


}

function guessAgain() {
  if (numberOfAvailableGuesses === 0 ) {

  }
  document.getElementById('guess').value = ''
  const remainingGuesses = document.getElementById('numberOfRemainingGuesses').innerHTML
  document.getElementById('numberOfRemainingGuesses').innerHTML = parseInt(remainingGuesses) - 1
  numberOfAvailableGuesses -= 1
  console.log(numberOfAvailableGuesses)
}

function addElementToGuessLogArray () {
  let guessHistoryArray = [];
  for (var i = 0; i < 10; I ++) {
    numberOfAvailableGuesses -= 1;
    guessHistoryArray.push(document.getElementById('guess').value = '')
  }
}