const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listEl = document.querySelector("ul.gallery");

// const markup = images.map(image => {
//   const item = document.createElement('li');
//   const imageEl = document.createElement('img');
//   item.append(imageEl);
//   imageEl.setAttribute('url', image.url);
//   imageEl.setAttribute('alt', image.alt);
//   return item;
// })

// listEl.append(...markup);
// console.log(listEl);

const markup = images
  .map((image) => `<li><img src='${image.url}' alt='${image.alt}'></li>`)
  .join("");

listEl.insertAdjacentHTML("afterbegin", markup);
