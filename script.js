'use strict';

//selecting elements
let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let current0El = document.querySelector('#current--0');
let current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const holdBtn = document.querySelector('.btn--hold');

//initialisation
let scores, playing, activePlayer, currentScore;
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document.querySelector('#name--0').textContent = 'PLAYER1';
  document.querySelector('#name--1').textContent = 'PLAYER2';
};
init();

//function to change player
const alterPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Rolling the dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice != 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      alterPlayer();
    }
  }
});

//Hold functionality

holdBtn.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      document.querySelector(`#name--${activePlayer}`).textContent = 'WINNER!';
    } else {
      alterPlayer();
    }
  }
});

//reset game
btnNew.addEventListener('click', init);

//modal
const openModalButton = document.querySelector('.help-button')
const closeModalButton = document.querySelector('.close-button')
const overlay = document.querySelector("#overlay")

const openModal = ()=>{
  if(modal==null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}
const closeModal = ()=>{
  if(modal==null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

openModalButton.addEventListener("click",openModal);
closeModalButton.addEventListener("click",closeModal);
overlay.addEventListener('click',closeModal)