'use strict';
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const contentpage = document.getElementById('contentpage');
openBtn.addEventListener('click',() => {
    contentpage.style.display = 'flex';
});

closeBtn.addEventListener('click',() => {
    contentpage.style.display = 'none';
});


const final = document.getElementById('final');
let [systemscore, userscore] = [0, 0];


let gameRules = {
  Rock: {
    Rock: 'draw',
    Scissors: 'win',
    Paper: 'lose',
    Spock: 'lose',
    Lizard:'win',
  },
  Paper: {
    Paper: 'draw',
    Rock: 'win',
    Scissors: 'lose',
    Spock: 'win',
    Lizard:'lose',
  },

  Scissors: {
    Scissors: 'draw',
    Paper: 'win',
    Rock: 'lose',
    Spock: 'lose',
    Lizard:'win',
  },
  Spock: {
    Scissors: 'win',
    Paper: 'lose',
    Rock: 'win',
    Spock: 'draw',
    Lizard:'lose',
  },
  Lizard: {
    Scissors: 'lose',
    Paper: 'win',
    Rock: 'lose',
    Spock: 'win',
    Lizard:'draw',
  },
};

function clicked(input) {
  let choices = ['Rock', 'Paper', 'Scissors' , 'Spock' , 'Lizard'];
  let randomNumber = Math.trunc(Math.random() * 5);
  let systemchoice = choices[randomNumber];
  document.getElementById(
    'systemchoice'
  ).innerHTML = `Computer choose <span>${systemchoice.toUpperCase()}</span>`;
  document.getElementById(
    'userchoice'
  ).innerHTML = `You Choose <span>${input.toUpperCase()}</span>`;

  switch (gameRules[input][systemchoice]) {
    case 'win':
      final.innerHTML = 'You win';
      final.style.cssText = 'background-color: green';
      userscore++;
      break;
    case 'lose':
      final.innerHTML = 'You lose';
      final.style.cssText = 'background-color: red';
      systemscore++; //
      break;
    case 'draw':
      final.innerText = 'You draw';
      final.style.cssText = 'background-color: black';
      break;
  }

  document.getElementById('systemscore').innerHTML = systemscore;
  document.getElementById('userscore').innerHTML = userscore;
}

// if (systemscore=10){
//   document.getElementById(
//     'winner'
//   ).style.display = 'flex';
// }
// else(userscore=10){
//   document.getElementById(
//     'loser'
//   ).style.display = 'flex';
// }
