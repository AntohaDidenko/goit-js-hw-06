const inpetEl = document.querySelector('[data-length="6"]');
inpetEl.addEventListener("blur", lengthWord);

function lengthWord(event) {
  if (this.getAttribute("data-length") > this.value.length) {
    this.classList.remove("valid");
    this.classList.add("invalid");
  } else {
    this.classList.remove("invalid");
    this.classList.add("valid");
  }
  if (event.currentTarget.value === "") {
    this.classList.remove("valid" && "invalid");
  }
}
