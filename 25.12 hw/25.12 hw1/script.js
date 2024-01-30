const randomRed = Math.floor(Math.random() * 256);
const randomGreen = Math.floor(Math.random() * 256);
const randomBlue = Math.floor(Math.random() * 256);

const rgbCode = `rgb(${randomRed},${randomGreen},${randomBlue})`;

console.log(rgbCode);

document.body.style.backgroundColor = rgbCode;