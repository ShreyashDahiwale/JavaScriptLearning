# Projects related to DOM

## Project Link
[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode-h6jeff?file=1-colorChanger%2Fchaiaurcode.js)

# Solution Code 

## Project 1 

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// Got NodeList here, not an HTML Collection
buttons.forEach((btn) => {
  // console.log(btn);

  btn.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target);

    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') body.style.backgroundColor = e.target.id;
    else if (e.target.id === 'blue') body.style.backgroundColor = e.target.id;
    else if (e.target.id === 'yellow') body.style.backgroundColor = e.target.id;
    else if (e.target.id === 'purple') body.style.backgroundColor = e.target.id;
  });
});

```

## Project 2 Solution
```javascript
const form = document.querySelector('form');

// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height == undefined || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (
    weight === '' ||
    weight == undefined ||
    weight < 0 ||
    isNaN(weight)
  ) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show the results
    result.innerHTML = `<span>${bmi}</span>`;
  }
});

```

## Project 3 Solution 
```javascript
const clock = document.getElementById('clock');

let date = new Date();
console.log(date.toLocaleTimeString());

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```


## Project 4 Solution
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowORHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert('Please enter a valid Number');
  } else if (guess < 1) alert('Please enter a number more than 1');
  else if (guess > 100) alert('Please enter a number less than 100');
  else {
    preGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is tooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  lowORHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', (e) => {
    let randomNumber = parseInt(Math.random() * 10 + 1);
    preGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
```