//examples of promise : handling independent promises in other file.js
let cookBeans = () => {
    return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('beans');
     }, 1000);
   });
  }
  
  let steamBroccoli = () => {
   return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('broccoli');
     }, 1000);
   });
  }
  
  let cookRice = () => {
   return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('rice');
     }, 1000);
   });
  }
  
  let bakeChicken = () => {
   return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('chicken');
     }, 1000);
   });
  }
  
  module.exports = {cookBeans, steamBroccoli, cookRice, bakeChicken};
  

  // async part in other file.js
  let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js');
//above line is to import the other file in currecnt one.

  async function serveDinner(){
    let vegetablePromise = steamBroccoli();
    let starchPromise = cookRice();
    let proteinPromise = bakeChicken();
    let sidePromise = cookBeans();
    console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
  }
  serveDinner();