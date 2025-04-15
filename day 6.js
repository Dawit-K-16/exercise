// 1. Iterate 0 to 10
for (let i = 0; i <= 10; i++) {
     console.log(i);
}
console.log('\n')

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
console.log('\n')

i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);
console.log('\n')

// 2. Iterate 10 to 0
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log('\n')

i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}
console.log('\n')

i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);
console.log('\n')

// 3. Iterate 0 to n
let n = 15; 
for (let i = 0; i <= n; i++){
console.log(i);
}
console.log('\n')
// 4. Print pattern with #
let pattern = '';
for (let i = 1; i <= 7; i++) {
  pattern += '#';
  console.log(pattern);
}
console.log('\n')

// 5. Multiplication pattern
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}
console.log('\n')

// 6. Power table
console.log("i\ti^2\ti^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i}\t${i ** 2}\t${i ** 3}`);
}
console.log('\n')

// 7. Print even numbers from 0 to 100
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}
console.log('\n')

// 8. Print odd numbers from 0 to 100
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) console.log(i);
}
console.log('\n')

// 9. Print prime numbers from 0 to 100
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i);
}
console.log('\n')

// 10. Sum of all numbers from 0 to 100
let totalSum = 0;
for (let i = 0; i <= 100; i++) {
  totalSum += i;
}
console.log("Sum of all numbers from 0 to 100 is", totalSum);

// 11. Sum of evens and odds from 0 to 100
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? evenSum += i : oddSum += i;
}
console.log(`Sum of evens: ${evenSum}, Sum of odds: ${oddSum}`);
console.log('\n')

// 12. Sum of evens and odds in array
console.log([evenSum, oddSum]);

// 13. Array of 5 random numbers
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}
console.log(randomNumbers);
console.log('\n')

// 14. Unique random numbers array of 5
let uniqueRandoms = [];
while (uniqueRandoms.length < 5) {
  let rand = Math.floor(Math.random() * 100);
  if (!uniqueRandoms.includes(rand)) {
    uniqueRandoms.push(rand);
  }
}
console.log(uniqueRandoms);
console.log('\n')

// 15. Generate 6-character random ID
let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
let id = '';
for (let i = 0; i < 6; i++) {
  id += chars.charAt(Math.floor(Math.random() * chars.length));
}
console.log(id);