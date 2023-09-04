"use strict";

function generateNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const scoreE = document.querySelector(".score");
let secret = generateNumber();
console.log(secret);
let highscore = 0;
let score = 20;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    message.textContent = "Write a number in the box.";
    //when player wins
  } else if (guess === secret) {
    message.textContent = "Correct Number!";
    number.textContent = secret;
    number.style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#296e2c";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== secret) {
    --score;
    scoreE.textContent = score;
    if (score === 0) {
      message.textContent = "Game over";
    }
    message.textContent = guess < secret ? "Too Low!" : "Too High!";
  }
});

document.querySelector(".again").addEventListener("click", () => {
  message.textContent = "Start guessing...";
  number.textContent = "?";
  scoreE.textContent = "20";
  number.style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  score = 20;
  document.querySelector(".guess").value = "";
  secret = generateNumber();
  console.log(secret);
});
