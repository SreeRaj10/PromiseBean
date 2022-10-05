// We're going to create a class that makes a shirt for us as a template!
// Use the previous exercise as a reference:
const shirtObject = {
    colour: "red",
    size: "large",
    getColor() {
      return this.colour;
    },
  };
// 1. Create a class called Shirt.
// In the constructor, we need to define the same two properties our objects had (size, colour)
// Outside of the constructor but inside the class, create a method for getColor.

// 2. Create two new instances of shirt with different colours and sizes.
// console log the getColor of both instances.
// answers below










// answers
// 1.
class Shirt {
    constructor(inputTwo, inputOne) {
        this.colour= inputTwo,
        this.shirt=inputOne
    }
    getColor() {
        return this.colour;
      }
}

// 2. 
let greenShirt = new Shirt("green", "large");
let redShirt = new Shirt("red", "medium");
console.log(greenShirt.getColor() + " /// " + redShirt.getColor());
