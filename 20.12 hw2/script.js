let storedPassword = prompt("Set your password:");

let userPassword = prompt("Enter your password:");

if (userPassword === storedPassword) {
  console.log("Success! Password is correct.");
} else {
  console.log("Error! Password is incorrect.");
}