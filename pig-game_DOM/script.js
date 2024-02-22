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

let scores, currentScore, activePlayer, playing, maxScore;

const getMaxNum = () => Number(prompt("The first person to reach: (enter a number)"))

// Initial conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  do {
    maxScore = getMaxNum();
  } while (isNaN(maxScore) || maxScore < 1 || maxScore === 0);
  document.getElementById('target').textContent = maxScore;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function (){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1:0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}


// Rolling dice functionality
btnRoll.addEventListener('click', function(){
  if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `./media/dice-${dice}.png`;

    // check if dice is not 1
    if (dice !== 1){
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function(){

  if(playing){
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  }
  if (scores[activePlayer] >= maxScore){
    playing = false;
    diceEl.classList.add('hidden');
    document.querySelector(`player--${activePlayer}`).classList.add('.player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener('click', init);
