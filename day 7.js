// 1. Print full name (no parameters)
function fullName() {
  console.log("Dawit Kassa");
}
fullName();

// 2. Return full name (with parameters)
function fullNameWithParams(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullNameWithParams("Dawit", "Kassa"));

// 3. Sum of two numbers
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(5, 3));

// 4. Area of rectangle
function areaOfRectangle(length, width) {
  return length * width;
}
console.log(areaOfRectangle(5, 10));

// 5. Perimeter of rectangle
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}
console.log(perimeterOfRectangle(5, 10));

// 6. Volume of rectangular prism
function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}
console.log(volumeOfRectPrism(5, 10, 2));

// 7. Area of a circle
function areaOfCircle(r) {
  return Math.PI * r * r;
}
console.log(areaOfCircle(7));

// 8. Circumference of a circle
function circumOfCircle(r) {
  return 2 * Math.PI * r;
}
console.log(circumOfCircle(7));

// 9. Density
function density(mass, volume) {
  return mass / volume;
}
console.log(density(10, 2));

// 10. Speed
function speed(distance, time) {
  return distance / time;
}
console.log(speed(100, 2));

// 11. Weight
function weight(mass, gravity = 9.81) {
  return mass * gravity;
}
console.log(weight(70));

// 12. Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(convertCelsiusToFahrenheit(25));

// 13. BMI calculator
function bmi(weight, height) {
  const bmiValue = weight / (height * height);
  if (bmiValue < 18.5) return "Underweight";
  else if (bmiValue >= 18.5 && bmiValue <= 24.9) return "Normal weight";
  else if (bmiValue >= 25 && bmiValue <= 29.9) return "Overweight";
  else return "Obese";
}
console.log(bmi(70, 1.75));

// 14. Check season
function checkSeason(month) {
  month = month.toLowerCase();
  if (["september", "october", "november"].includes(month)) return "Autumn";
  else if (["december", "january", "february"].includes(month)) return "Winter";
  else if (["march", "april", "may"].includes(month)) return "Spring";
  else if (["june", "july", "august"].includes(month)) return "Summer";
  else return "Invalid month";
}
console.log(checkSeason("October"));

// 15. Find max without Math.max
function findMax(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}
console.log(findMax(0, 10, 5));   // 10
console.log(findMax(0, -10, -2)); // 0