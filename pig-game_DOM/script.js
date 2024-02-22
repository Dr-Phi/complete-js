'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById("score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Initial conditions


// Rolling dice functionality
const dice = Math.trunc(Math.random() * 6) + 1;