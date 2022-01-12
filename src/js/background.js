const imgs = ["cat.jpg","dog.jpg","dried.jpg","mountain.jpg","train.jpg"];

const img = document.querySelector(".img");
const randbg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${randbg}`;

console.log(bgImage.src)
document.body.style.backgroundImage = `url('${bgImage.src}')`