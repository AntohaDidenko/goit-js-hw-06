// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const inputEl = document.querySelector('#controls > input');
// const btnCreate = document.querySelector('button[data-create]');
// const btnDestroy = document.querySelector('button[data-destroy]');
// const resultOfAction = document.querySelector('#boxes');

// inputEl.addEventListener('input', (value) => {
//   console.log(value.currentTarget.value);
//   btnCreate.addEventListener('click', () => {
//     const newEl = resultOfAction.createElement('div');
    
//   })
// })

// function createBoxes(amount) {
  
// }

const render = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.getElementById("boxes");
render.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);

function getAmount() {
  const amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}