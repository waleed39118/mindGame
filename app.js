const allCards = document.querySelectorAll(".card");

let firstCard = null;
let secondCard = null;
let canClick = true;

let matchedPairs = 0;
const totalPairs = allCards.length / 2;
        //the double cards
allCards.forEach((card) => {
  card.addEventListener("click", handleCardClicked);
});
//main function for i call any card
function handleCardClicked() { 
//! = false
//return = dont do any action and prevent card double click
  if(!canClick || this.classList.contains("flip")) return;
  // to flip card we add class
    this.classList.add("flip");

  if(!firstCard) {
    firstCard = this;
    return;
  }
  secondCard = this;

const img1 = firstCard.querySelector(".front img").src;
const img2 = secondCard.querySelector(".front img").src;
//handel matching condiotion

if (img1 === img2) {
    matchedPairs++;
    firstCard = null;
    secondCard = null;

    if (matchedPairs === totalPairs) {
        setTimeout(() => {
         alert("YOU WON THE GAME");
       allCards.forEach((card) => {
        card.classList.remove("flip");
     });
    setTimeout(() => {
      shuffleCards();
    }, 500);
    matchedPairs = 0;
    firstCard = null;
    secondCard = null;
    canClick = true;
        }, 1000);
    }
      } else {     
    //handel non-matching condiotion
    canClick = false;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        firstCard = null;
        secondCard = null;
        canClick = true;
    }, 1000);
  }
}
function shuffleCards() {
  const container = document.querySelector(".game-container");
  const cardsArray = Array.from(allCards);

  cardsArray.sort(() => Math.random() - 0.5);
  cardsArray.forEach(card => container.appendChild(card));
}
