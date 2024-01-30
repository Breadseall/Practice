// #1
function countToZero(number) {
    if (number === 0) {
      console.log(number);
      return;
    }
  
    console.log(number);
  
    if (number > 0) {
      countToZero(number - 1);
    }
    
}

countToZero(prompt("#1: Enter a positive number"));

// #2
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

const randomNumbers = [];
for (let i = 0; i < 100; i++) {
  randomNumbers.push(getRandomInt(1, 100));
}

const oddNumbers = randomNumbers.filter(number => number % 2 !== 0);
const evenNumbers = randomNumbers.filter(number => number % 2 === 0);

console.log("Odd Numbers:", oddNumbers);
console.log("Even Numbers:", evenNumbers);

// #3

const names = ["Alice", "Misha", "Salome", "Davit", "Tornike", "Alex"];

const indexToRemove = names.findIndex(name => name.startsWith("A"));

if (indexToRemove !== -1) {
  names.splice(indexToRemove, 1);
}

console.log(names);

// #4

const matrix = [
  [4, 8, 2],
  [12, 6, 9],
  [7, 1, 5]
];

const sortedMatrix = matrix.map(innerArray => innerArray.slice().sort((a, b) => a - b));

console.log(sortedMatrix);