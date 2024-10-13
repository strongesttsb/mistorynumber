let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

const guessField = document.getElementById('guessField');
const submitGuess = document.getElementById('submitGuess');
const resultMessage = document.getElementById('resultMessage');
const attemptsMessage = document.getElementById('attemptsMessage');
const newGameButton = document.getElementById('newGame');

submitGuess.addEventListener('click', checkGuess);
newGameButton.addEventListener('click', startNewGame);

function checkGuess() {
    const userGuess = Number(guessField.value);
    attempts++;

    if (attempts < maxAttempts) {
        if (userGuess === randomNumber) {
            resultMessage.textContent = 'Поздравляем! Вы угадали число!';
            endGame();
        } else if (userGuess < randomNumber) {
            resultMessage.textContent = 'Ваше число слишком маленькое!';
        } else if (userGuess > randomNumber) {
            resultMessage.textContent = 'Ваше число слишком большое!';
        }
        attemptsMessage.textContent = `Попытки: ${attempts}/${maxAttempts}`;
    } else {
        resultMessage.textContent = `Вы проиграли! Загаданное число было: ${randomNumber}`;
        endGame();
    }
}

function endGame() {
    guessField.disabled = true;
    submitGuess.disabled = true;
    newGameButton.style.display = 'block';
}

function startNewGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessField.disabled = false;
    submitGuess.disabled = false;
    guessField.value = '';
    resultMessage.textContent = '';
    attemptsMessage.textContent = '';
    newGameButton.style.display = 'none';
}
