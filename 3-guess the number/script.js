let randomNumber = Math.floor(Math.random() * 100 + 1);
let tries = 0;
const maxTries = 10;

function guessNumber() {
  const guess = parseInt(document.querySelector('.inputs-Values').value);
  const finalOutput = document.querySelector('.final-output');
  const triesOutput = document.querySelector('.Tries-output');

  if (!guess || guess < 1 || guess > 100) {
    finalOutput.textContent = "Please enter a number between 1 and 100";
    return;
  }

  tries++;
  if (tries >= maxTries) {
    finalOutput.textContent = `You lose! The number was ${randomNumber}.`;
    return;
  }

  if (guess > randomNumber) {
    finalOutput.textContent = "Number is too high, try again";
  } else if (guess < randomNumber) {
    finalOutput.textContent = "Number is too low, try again";
  } else {
    finalOutput.textContent = `Guess is correct! You win! It took you ${tries} tries.`;
    return;
  }

  triesOutput.textContent = `Tries: ${tries}/${maxTries}`;
}

function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  tries = 0;

  document.querySelector('.inputs-Values').value = "";
  document.querySelector('.final-output').textContent = "Guess a number between 1 and 100";
  document.querySelector('.Tries-output').textContent = "";
}

document.querySelector('.btnGuess').addEventListener('click', guessNumber);
document.querySelector('.btnNewGame').addEventListener('click', newGame);
