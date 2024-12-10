let numInput = document.querySelector("#numInput");
let submitInput = document.querySelector("#submitInput");
let hint = document.querySelector("#hint");
let restartBtn = document.querySelector("#restart");
let guessMsg = document.querySelector("#guessMsg");
let guessValues = document.querySelector("#guessValues");

let guesses = [];

function onGameStart() {
  guessMsg = "";

  let randomNumber = Math.floor(Math.random() * 100);

  submitInput.addEventListener("click", function (e) {
    e.preventDefault();
    guesses.push(numInput.value);
    guesses.forEach(function (e) {
      if (guesses.length > 5) {
        hint.textContent = "You Lost Random Number Was" + " " + randomNumber;
      } else {
        if (e == randomNumber) {
          hint.textContent = "Congratulations! You Won";
        } else if (e > randomNumber) {
          hint.textContent = "too high";
        } else if (e < randomNumber) {
          hint.textContent = "too Low";
        }
      }
    });
    numInput.value = "";
  });
}

onGameStart();
