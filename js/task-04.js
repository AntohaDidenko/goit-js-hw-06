const btnDecrementEl = document.querySelector('#counter button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('#counter button[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;


btnDecrementEl.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
    return counterValue;
})

btnIncrementEl.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
    return counterValue;
})