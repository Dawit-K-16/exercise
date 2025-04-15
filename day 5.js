// 1. Declare an empty array
let emptyArray = [];

// 2. Declare an array with more than 5 number of elements
let numbers = [10, 20, 30, 40, 50, 60, 70];

// 3. Find the length of your array
console.log(numbers.length); // 7

// 4. Get the first item, the middle item and the last item of the array
console.log(numbers[0]); // first item
console.log(numbers[Math.floor(numbers.length / 2)]); // middle item
console.log(numbers[numbers.length - 1]); // last item

// 5. mixedDataTypes array
let mixedDataTypes = [42, "hello", true, null, {name: "JS"}, [1,2,3]];
console.log(mixedDataTypes.length); // 6

// 6. Declare itCompanies array
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array
console.log(itCompanies);

// 8. Number of companies in the array
console.log(itCompanies.length);

// 9. First, middle, and last company
console.log(itCompanies[0]); // first
console.log(itCompanies[Math.floor(itCompanies.length / 2)]); // middle
console.log(itCompanies[itCompanies.length - 1]); // last

// 10. Print out each company
for (let company of itCompanies) {
  console.log(company);
}

// 11. Print each company in uppercase
for (let company of itCompanies) {
  console.log(company.toUpperCase());
}

// 12. Print the array like a sentence
console.log(itCompanies.join(', ') + ' are big IT companies.');

// 13. Check if a company exists
let companyToCheck = 'Google';
if (itCompanies.includes(companyToCheck)) {
  console.log(companyToCheck);
} else {
  console.log('Company not found');
}

// 14. Filter companies with more than one 'o' (without filter method)
let companiesWithTwoOs = [];
for (let company of itCompanies) {
  let count = 0;
  for (let char of company.toLowerCase()) {
    if (char === 'o') count++;
  }
  if (count > 1) {
    companiesWithTwoOs.push(company);
  }
}
console.log(companiesWithTwoOs);

// 15. Sort the array
console.log(itCompanies.sort());

// 16. Reverse the array
console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies
console.log(itCompanies.slice(0, 3));

// 18. Slice out the last 3 companies
console.log(itCompanies.slice(-3));

// 19. Slice out the middle company or companies
let mid = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
  console.log(itCompanies.slice(mid - 1, mid + 1)); // even
} else {
  console.log(itCompanies.slice(mid, mid + 1)); // odd
}

// 20. Remove the first IT company
itCompanies.shift();
console.log(itCompanies);

// 21. Remove the middle IT company or companies
mid = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
  itCompanies.splice(mid - 1, 2); // even
} else {
  itCompanies.splice(mid, 1); // odd
}
console.log(itCompanies);

// 22. Remove the last IT company
itCompanies.pop();
console.log(itCompanies);

// 23. Remove all IT companies
itCompanies = [];
console.log(itCompanies);
