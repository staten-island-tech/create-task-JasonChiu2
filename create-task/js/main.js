import "../style.css";
import Deck from "../js/cards.js";
import { DOMSelectors } from "../js/DOMSelectors.js";

const deck = new Deck();
deck.shuffle();

const cardToNumber = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

let handPlayer, handComputer;
let wins = 0;
let loses = 0;
let draws = 0;

function drawCardPlayer() {
  handPlayer = deck.cards.splice(0, 1);
}

function drawCardComputer() {
  handComputer = deck.cards.splice(0, 1);
}

function declareWinner() {
  const cardPlayer = handPlayer.pop();
  const cardComputer = handComputer.pop();

  DOMSelectors.player.insertAdjacentHTML(
    "afterbegin",
    `<div class="card ${cardPlayer.suit}" data-value="${cardPlayer.value} ${cardPlayer.suit}">
    ${cardPlayer.suit}</div>`
  );

  DOMSelectors.computer.insertAdjacentHTML(
    "afterbegin",
    `<div class="card ${cardComputer.suit}" data-value="${cardComputer.value} ${cardComputer.suit}">
    ${cardComputer.suit}</div>`
  );

  if (getWinner(cardPlayer, cardComputer)) {
    DOMSelectors.result.insertAdjacentHTML(
      "afterbegin",
      `<h2 class="result">Win!</h2>`
    );
    wins++;
  } else if (getWinner(cardComputer, cardPlayer)) {
    DOMSelectors.result.insertAdjacentHTML(
      "afterbegin",
      `<h2 class="result">Lose :(</h2>`
    );

    loses++;
  } else {
    DOMSelectors.result.insertAdjacentHTML(
      "afterbegin",
      `<h2 class="result">Draw 😐</h2>`
    );
    draws++;
  }
}

function getWinner(card1, card2) {
  return cardToNumber[card1.value] > cardToNumber[card2.value];
}

function clear() {
  DOMSelectors.result.innerHTML = "";
  DOMSelectors.player.innerHTML = "";
  DOMSelectors.computer.innerHTML = "";
  DOMSelectors.tracker.innerHTML = "";
}

function track() {
  DOMSelectors.tracker.insertAdjacentHTML(
    "afterbegin",
    `<h3>Wins: ${wins}</h3> <h3>Loses: ${loses}</h3> <h3>Draws: ${draws}</h3>`
  );
}

DOMSelectors.form.addEventListener("submit", function () {
  clear();
  event.preventDefault();
  drawCardPlayer();
  drawCardComputer();
  declareWinner();
  track();
});

DOMSelectors.shuffle.addEventListener("submit", function () {
  event.preventDefault();
  deck.shuffle();
});
