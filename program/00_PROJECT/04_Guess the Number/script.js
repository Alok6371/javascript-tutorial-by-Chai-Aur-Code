const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const resultParas = document.querySelector('.resultParas');

const preGusess = document.querySelector('.guesses')
const remining = document.querySelector('.lastResult')
const lowOrhi = document.querySelector('.lowOrhi')
const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault;
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("please enter a valid Number")
    } else if (guess < 1) {
        alert("please enter a More than 1")
    } else if (guess > 100) {
        alert("please enter a less than 100")
    } else {
        preGusess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over  random Number is ${randomNumber}`);
            endGame()
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Your Guessed is Right`);
        endGame(guess);

    } else if (guess < randomNumber) {
        displayMessage(`Number is T000 low`);
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is T000 low`);
    }
}

function displayGuess(guess) {
    userInput.value = ''
    preGusess.innerHTML += `${guess}`
    numGuess++;
    remining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrhi.innerHTML=`<h2>${message}</h2>`
}

function endGame() {
    //
}
function newGame() {
    //
}