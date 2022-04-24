const itemsNumberEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemsNumberEl.length);

const headerEl = document.querySelectorAll('li > h2');
const listChildrenEl = document.querySelectorAll('.item__list');

const firstHeaderEl = headerEl[0].textContent;
console.log('Category:', firstHeaderEl);
console.log('Elements:', listChildrenEl[0].children.length);

const secondHeaderEl = headerEl[1].textContent;
console.log('Category:', secondHeaderEl);
console.log('Elements:', listChildrenEl[1].children.length);

const lastHeaderEl = headerEl[2].textContent;
console.log('Category:', lastHeaderEl);
console.log('Elements:', listChildrenEl[2].children.length);
