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
const wardrobe = [];
  wardrobe.push(shirt);
  wardrobe.push(shirt2);
  wardrobe.push(shirt3);


// 4. (bit of a challenge!) Create a for loop that goes through the entire wardrobe array
for (i=0; i < wardrobe.length; i++) {
console.log(wardrobe[i].colour);
 }
