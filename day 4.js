// 1. Get user input and check for driving eligibility
let age = prompt("Enter your age:");
age = parseInt(age);

if (age >= 18) {
  console.log('You are old enough to drive.');
} else {
  let yearsLeft = 18 - age;
  console.log(`You are left with ${yearsLeft} year(s) to drive.`);
}
console.log('\n');
// 2. Compare the values of myAge and yourAge and compare who is older
let myAge = 25;
let yourAge = prompt("Enter your age:");
yourAge = parseInt(yourAge);

if (myAge > yourAge) {
  console.log(`I am ${myAge - yourAge} year(s) older than you.`);
} else if (myAge < yourAge) {
  console.log(`You are ${yourAge - myAge} year(s) older than me.`);
} else {
  console.log("We are the same age.");
}
console.log('\n');
// 3. Compare values of a and b in two ways
let a = 5;
let b = 3;

// i. Using if...else
if (a > b) {
  console.log('a is greater than b');
} else {
  console.log('a is less than b');
}

// ii. Using ternary operator
console.log(a > b ? 'a is greater than b' : 'a is less than b');
console.log('\n');

// 4. Check if a number is even
let number = prompt("Enter a number to check if it's even:");
number = parseInt(number);

if (number % 2 === 0) {
  console.log(`${number} is an even number.`);
} else {
  console.log(`${number} is an odd number.`);
}