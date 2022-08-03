const btnBack = document.getElementById('btn_back');
const btnNext = document.getElementById('btn_next');
const cardList = document.querySelectorAll('.card');
let currentCard = 0;

function hideSelectedCard(cardSelectedIndex) {
  cardList[cardSelectedIndex].classList.remove('selected');
}
function showSelectedCard(cardSelectedIndex) {
  cardList[cardSelectedIndex].classList.add("selected");
}

btnBack.addEventListener('click', () => {
  hideSelectedCard(currentCard);

  currentCard--;
  if (currentCard < 0) {
    currentCard = 2;
  }

  showSelectedCard(currentCard);
})

btnNext.addEventListener('click', () => {
  hideSelectedCard(currentCard);

  currentCard++;
  if (currentCard > 2) {
    currentCard = 0;
  }

  showSelectedCard(currentCard);
})
