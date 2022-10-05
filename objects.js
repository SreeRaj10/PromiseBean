// 1. Create an object assigned to a variable called shirt.
let shirt ={
  color: 'Red',
  size: 'large',
  getColor(){
console.log(shirt.getColor());
  }
};
console.log(shirt.color);

let shirtA ={
  color: 'Yellow',
  size: 'large',
  getColor(){
console.log(shirtA.getColor());
  }
};
console.log(shirtA.color);

let shirtB = {
color: 'Green',
size: 'large',
getColor(){
console.log(shirtB.getColor());
}
};
console.log(shirtB.color);


let wardrobe =[];

wardrobe.shirt();
// 3. Create an empty array assigned to a variable called wardrobe.
// This should contain all of your shirts.
// Create three new shirt objects with different colours and sizes
// Push the shirt objects to an array


// 4. (bit of a challenge!) Create a for loop that goes through the entire wardrobe array
// Each time it loops through, it should look at the shirt array item it is up to
// and console.log the colour of the shirt.





//   // 3-----------------
//   const wardrobe = [];

//   wardrobe.push(shirt);
//   wardrobe.push(shirt2);
//   wardrobe.push(shirt3);

//   // 4-----------------
//   for (i=0; i < wardrobe.length; i++) {
//       console.log(wardrobe[i].colour);
//   }