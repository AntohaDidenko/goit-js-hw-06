const inpetEl = document.querySelector('[data-length="6"]');
inpetEl.addEventListener('blur', lengthWord)


function lengthWord(event) {
    Number(inpetEl.dataset.length) === event.currentTarget.value.length ?
        inpetEl.classList.add('valid') : inpetEl.classList.add('invalid');
    if (event.currentTarget.value === '') {
        inpetEl.classList.remove('valid' && 'invalid');
    }
}
