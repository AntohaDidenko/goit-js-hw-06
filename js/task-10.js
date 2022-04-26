const render = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector("#boxes");
render.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);

function getAmount() {
  const amount = document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;
  for (let i = 0; i < amount; i++) {
    const size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `
    width: ${size}px;
    height: ${size}px; 
    background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    // div.style.width = `${size}px`;
    // div.style.height = `${size}px`;
    // div.style.backgroundColor = `rgba( ${random()} , ${random()} , ${random()}`;
    boxes.appendChild(div);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}