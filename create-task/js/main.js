import "../style.css";
import { deck } from "../js/cards.js";
import { DOMSelectors } from "../js/DOMSelectors.js";

document.querySelector("#app").innerHTML = `
    <div class="card">
    </div>
`;

function shuffleCards(deck) {
  for (let i = 0; i < 52; i++) {
    let tempCard = deck[i];
    let randomSpot = Math.floor(Math.random() * 52);
    deck[i] = deck[randomSpot];
    deck[randomSpot] = tempCard;
  }
}

shuffleCards(deck);

function drawCard(deck) {
  for (let i = 0; i < 5; i++) {
    let drawnCards = deck.splice(0, 1);
    let hand = drawnCards.join(" ");
    console.log(hand);
  }
}

drawCard(deck);
