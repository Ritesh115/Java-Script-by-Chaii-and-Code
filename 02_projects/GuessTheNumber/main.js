//we need no ypto 100 thats why *100
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

//first to check whether yser is ready to play game or not.
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess) {
  if(isNaN(guess)){
alert('please eneter a valid number')
  }
  else if(guess<1){
 alert('please enter a number more than 1')
  }
  else if(guess>100){
    alert('please enter a number less than 100')
     }
     else{
      prevGuess.push(guess);

      if(numGuess === 11){//if it is last gyess of yser.
    displayGuess(guess);
    displayMessage(`Game is over . Random number was ${randomNumber}`)
    endGame();
        }
        else{
          displayGuess(guess);
          checkGuess(guess);
        }
     }
}


function checkGuess(guess) {
  //to check valye is ekyal or low or high;
  if(guess === randomNumber){
    displayMessage(`Yoy gyessed it rigth`)
    endGame();
  }
  else if(guess < randomNumber){
    displayMessage(`Number is TOO low`);
  }
  else(guess > randomNumber){
    displayMessage(`Number is TOO High`);
  }
}


function displayGuess(guess) {
  //the things we are going to display or its cleanyp .
  userInput.value = '';
}

function displayMessage(message) {
  
}

function endGame() {
  
}

function newGame() {
  
}