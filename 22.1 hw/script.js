// 1.

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 2.

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRgb() {
  const red = randomNumber(0, 255);
  const green = randomNumber(0, 255);
  const blue = randomNumber(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

// 3.

function sortCopy(array) {
  const copy = [];
  for (let i = 0; i < array.length; i++) {
    copy.push(array[i]);
  }
  return copy.sort((a, b) => a - b);
}
  
const array = [3, 4, 2, 1];
const sorted = sortCopy(array);
console.log(sorted);
console.log(array);

// 4.

function concat(arr1, arr2) {
    return arr1.concat(arr2);
}
  
const arr1 = [1, 2, 3, 4];
const arr2 = ["one", "two", "three"];
const combined = concat(arr1, arr2);
console.log(combined);

// 5. 

function trimHalf(arr) {
    const halfLength = Math.ceil(arr.length / 2);
    arr.splice(halfLength);
}
  
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
trimHalf(arr);
console.log(arr);