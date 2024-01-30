let numberOne = Number(prompt("Enter first number"));
let operation = prompt("Enter operator");
let numberTwo = Number(prompt("Enter second number"));
if (!numberOne || !numberTwo) {
  alert("Invalid numbers!");
}
switch (operation) {
  case "+":
    console.log(numberOne + numberTwo);
    break;
  case "-":
    console.log(numberOne - numberTwo);
    break;
  case "/":
    console.log(numberOne / numberTwo);
    break;
  case "*":
    console.log(numberOne * numberTwo);
    break;
  default:
    console.error("Invalid operator!");
}
