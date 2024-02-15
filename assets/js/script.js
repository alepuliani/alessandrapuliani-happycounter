'use strict';

// Selecting counter elements
const counterContainer = document.querySelector('.counter-container');
const counterTitle = document.querySelector('.counter-title');
const counterButtons = document.querySelector('.counter-buttons');
const settingContainer = document.querySelector('.setting-container');
const counterNumber = document.querySelector('.number');

// Seletting custom settings elements 
const customWindow = document.querySelector('.custom-window');
const background = document.querySelector('.back-window');
const doneButton = document.querySelector('.done-button');
const titleInput = document.querySelector('.title-input');
const goalInput = document.querySelector('.goal-input');
const radioButtons = document.querySelectorAll('input[name="color"]');

// Creating counter elements
const minusButton = document.createElement('button');
const plusButton = document.createElement('button');
const resetButton = document.createElement('button');

minusButton.innerHTML = '-';
plusButton.innerHTML = '+';
resetButton.innerHTML = '<i class="bi bi-arrow-clockwise"></i>';

// Creating custom settings elements
const customButton = document.createElement('button');
const closeButton = document.createElement('button');
const goalDiv = document.createElement('div');
const goalLeft = document.createElement('div');
const goal = document.createElement('div');

customButton.innerHTML = '<i class="bi bi-gear"></i>';
closeButton.innerHTML = '<i class="bi bi-x"></i>';
goalLeft.innerHTML = 'Left:'

let buttons = [minusButton, plusButton, resetButton, customButton];
let color;

// Adding the classes to the elements
closeButton.classList.add('close-custom');
goal.classList.add('goal-number');

// Adding the elements to the document
counterButtons.prepend(minusButton);
counterButtons.append(plusButton);
settingContainer.append(resetButton);
settingContainer.append(customButton);
customWindow.prepend(closeButton);
settingContainer.prepend(goalDiv);
goalDiv.prepend(goalLeft);
goalDiv.append(goal);

//STARTING CONDITION
const init = function() {
  counterNumber.textContent = 0;
  counterTitle.textContent = 'Happy Counter';  
  goal.textContent = '';
  goalDiv.classList.add('hidden');
  goalDiv.classList.remove('flex');
}

init();

// COUNTER FUCTIONS
 function incrementCounter() {
  counterNumber.textContent++;
  if(goal.textContent != 0) {
    goal.textContent--
  };
  if(goal.textContent == 0 && goal.textContent != '') {
    counterTitle.textContent = 'YOU\'VE DONE IT!';
  };
};

function decrementCounter() {
  if(counterNumber.textContent > 0) {
    counterNumber.textContent--;
    goal.textContent++
  }
};

// CUSTOM SETTINGS FUNCTIONS  
function closeCustom() {
  customWindow.classList.add('hidden');
  background.classList.add('hidden');
};

function openCustom() {
  goalInput.value = '';
  titleInput.value = '';
  customWindow.classList.remove('hidden');
  background.classList.remove('hidden');
};

function applyCustom() {
  counterNumber.textContent = 0;
  if(titleInput.value != '') {
    counterTitle.textContent = titleInput.value;
  };

  if(goalInput.value != '') {
    goal.textContent = goalInput.value;
    goalDiv.classList.remove('hidden');
    goalDiv.classList.add('flex');
  }
}

function changeColor(color) {
  for(let button of buttons) {
    button.style.backgroundColor = color;
  }
}

function pickColor() {
  for(let radioButton of radioButtons) {
    if(radioButton.checked) {
      color = radioButton.id;

      if (color == 'pink') {
        changeColor('#ffb6e5')
      } else  if (color == 'lilac') {
        changeColor('#e2bbff')
      } else  if (color == 'blue') {
       changeColor('#a4caff')
      } else  if (color == 'default') {
        changeColor('#f6f6f6')
      }
    }
  }
}

// Adding the events

// COUNTER EVENTS
plusButton.addEventListener('click', incrementCounter);

minusButton.addEventListener('click', decrementCounter);

resetButton.addEventListener('click', init);

// CUSTOM SETTINGS EVENTS
customButton.addEventListener('click', openCustom);

closeButton.addEventListener('click', closeCustom);

background.addEventListener('click', closeCustom);

doneButton.addEventListener('click', applyCustom);
doneButton.addEventListener('click', closeCustom);
doneButton.addEventListener('click', pickColor);