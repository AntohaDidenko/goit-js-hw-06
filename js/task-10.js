function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls > input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const resultOfAction = document.querySelector('#boxes');

inputEl.addEventListener('input', (value) => {
  console.log(value.currentTarget.value);
  btnCreate.addEventListener('click', () => {
    const newEl = resultOfAction.createElement('div');
    
  })
})

function createBoxes(amount) {
  
}