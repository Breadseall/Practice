var firstName = "John";
var lastName = "Doe";
var birthYear = 2000;
var currentYear = 2023;

//ar vici rogor gavageto es consol.logshi
var age = currentYear - birthYear;

var isAllowedToDrive = age >= 17;

console.log(firstName + " " + lastName + " is " + age + " years old and he is " + (isAllowedToDrive ? "allowed" : "not allowed") + " to drive");