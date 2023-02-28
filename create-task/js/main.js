import "../style.css";
import { deck } from "../js/cards.js";
import { DOMSelectors } from "../js/DOMSelectors.js";

let handPlayer = "";
let handComputer = "";

document.querySelector("#app").innerHTML = `
    <div class="card">
    </div>
`;

function shuffleCards() {
  for (let i = 0; i < 52; i++) {
    let tempCard = deck[i];
    let randomSpot = Math.floor(Math.random() * 52);
    deck[i] = deck[randomSpot];
    deck[randomSpot] = tempCard;
  }
}

shuffleCards(deck);

function drawCard() {
  let cardAmount = DOMSelectors.amount.value;
  let drawnCards = deck.splice(0, cardAmount);
  let handPlayer = drawnCards;
  let handComputer = drawnCards;
}

function clear() {
  DOMSelectors.amount.value = "";
}

function start() {
  if (DOMSelectors.amount.value < 1 || DOMSelectors.amount.value > 26 || "") {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<h2 class="error">Please input a number between 1 and 26!</h2>`
    );
  } else {
    drawCard(deck);
    drawCard(deck);
  }
}

DOMSelectors.form.addEventListener("submit", function () {
  event.preventDefault();
  DOMSelectors.container.innerHTML = "";
  start();
  clear();
  console.log(handPlayer, handComputer);
});
