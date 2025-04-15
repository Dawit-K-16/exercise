// 1. Create an empty object called dog
const dog = {};

// 2. Print the dog object
console.log(dog);

// 3. Add properties: name, legs, color, age, and a bark method
dog.name = "Buddy";
dog.legs = 4;
dog.color = "Brown";
dog.age = 3;
dog.bark = function () {
  return "woof woof";
};

// 4. Get and print values from the dog object
console.log("Name:", dog.name);
console.log("Legs:", dog.legs);
console.log("Color:", dog.color);
console.log("Age:", dog.age);
console.log("Bark:", dog.bark());

// 5. Set new properties: breed and getDogInfo method
dog.breed = "Labrador";
dog.getDogInfo = function () {
  return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Breed: ${this.breed}, Bark Sound: ${this.bark()}`;
};

console.log("Dog Info:", dog.getDogInfo());