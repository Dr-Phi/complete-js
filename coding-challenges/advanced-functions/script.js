"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0].
  answers: new Array(4).fill(0),
};

/* Create a method that
  - Display a prompt window for the user to input the number of the
selected option.
  - Based on the input number, update the 'answers' array property. */

poll.registerNewAnswer = function () {
  let invalid = true;
  let answer;
  do {
    answer = parseInt(
      prompt(`What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Write option number)`)
    );
  } while (![0, 1, 2, 3].includes(answer));
  this.answers[answer]++;
  this.displayResults();
};

// Call this method whenever the user clicks the "Answer poll" button.
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults = function (type = "array") {
  if (type.toLowerCase() == "array") {
    console.log(this.answers);
  }
  if (type.toLowerCase() == "string") {
    console.log(`Poll results are ${[...this.answers]}`);
  }
};

// BONUS
const displayNewResults = poll.displayResults;
const Data2 = { answers: [1, 5, 3, 9, 6, 1] };

displayNewResults.call({ answers: [5, 2, 3] });
displayNewResults.call(Data2, "string");

// Challenge #2

/* Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the body element is clicked.*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.body.addEventListener("click", () => {
    header.style.color = header.style.color == "blue" ? "red" : "blue";
  });
})();
