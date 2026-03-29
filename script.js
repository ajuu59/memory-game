const boardElement = document.querySelector('#board');
const attemptsElement = document.querySelector('#attempts');
const matchesElement = document.querySelector('#matches');
const messageElement = document.querySelector('#message');
const resetButton = document.querySelector('#resetButton');

const ITEMS = ['🍎','🍌','🍇','🍉','🍓','🍒','🥝','🍍'];

let cardData = [];
let firstCard = null;
let secondCard = null;
let boardLocked = false;
let attempts = 0;
let matches = 0;

function createCard(item, id) {
  const card = document.createElement('button');
  card.className = 'card';
  card.type = 'button';
  card.dataset.value = item;
  card.dataset.id = id;
  card.setAttribute('aria-label', 'Memory card');

  const inner = document.createElement('div');
  inner.className = 'card-inner';

  const back = document.createElement('div');
  back.className = 'card-face card-back';
  back.textContent = '❔';

  const front = document.createElement('div');
  front.className = 'card-face card-front';
  front.textContent = item;

  inner.appendChild(back);
  inner.appendChild(front);
  card.appendChild(inner);

  card.addEventListener('click', () => onCardClicked(card));
  return card;
}

function setMessage(text, color = 'var(--accent)') {
  messageElement.textContent = text;
  messageElement.style.color = color;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createBoard() {
  boardElement.innerHTML = '';
  const pairSet = [...ITEMS, ...ITEMS];
  cardData = shuffle(pairSet.map((value, index) => ({ id: index, value })));

  cardData.forEach((item) => {
    const card = createCard(item.value, item.id);
    boardElement.appendChild(card);
  });

  attempts = 0;
  matches = 0;
  firstCard = null;
  secondCard = null;
  boardLocked = false;

  renderStats();
  setMessage('Game started. Find all pairs!');
}

function renderStats() {
  attemptsElement.textContent = attempts.toString();
  matchesElement.textContent = matches.toString();
}

function resetSelection() {
  [firstCard, secondCard] = [null, null];
  boardLocked = false;
}

function onCardClicked(card) {
  if (boardLocked || card.classList.contains('is-flipped')) return;

  card.classList.add('is-flipped');

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  attempts += 1;
  renderStats();

  const firstItem = firstCard.dataset.value;
  const secondItem = secondCard.dataset.value;

  if (firstItem === secondItem) {
    matches += 1;
    renderStats();
    setMessage(`Matched ${firstItem}!`);
    firstCard.disabled = true;
    secondCard.disabled = true;
    resetSelection();

    if (matches === ITEMS.length) {
      setMessage(`🎉 You won in ${attempts} attempts!`, '#9fe8a8');
    }

    return;
  }

  boardLocked = true;
  setMessage('Not a match. Try again.', '#fb7185');
  setTimeout(() => {
    firstCard.classList.remove('is-flipped');
    secondCard.classList.remove('is-flipped');
    resetSelection();
    setMessage('Keep going!');
  }, 800);
}

resetButton.addEventListener('click', createBoard);

createBoard();