let tea = ["green tea","black tea", "chai", "oolong tea"];

let selectedteas = [];
for (let i = 0; i < tea.length; i++) {
  if (tea[i] === "chai") {
    break;
  }
  selectedteas.push(tea[i]);

}
// console.log(selectedteas);

// second question

let cities = ["london", "new york", "paris", "berlin"];

let visitedcities = [];
for(let i = 0; i < cities.length; i++) {
  if(cities[i] === "new york" || cities[i] === "new york"){
    continue;
  }
  visitedcities.push(cities[i]);

}
// console.log(visitedcities);

// third question:

// let numbers = [1,2,3,4,5];

let smallNumbers = [];
for( const num of numbers) {
  if (num === 4) {
    break;
  }
  smlallNumbers.push(num);
}
// console.log(smallNumbers);

// fourth question


let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];

let preferredTeas = [];

for (const tea of teaTypes) {
  if (tea === "green tea") {
    continue;
  }
  preferredTeas.push(tea);

}
// console.log(preferredTeas)

// fiveth question


let worldcities = {
  sydney: 500000,
  tokyo:  900000.,
  berlin: 350000,
  peris:  220000,
}
let largecities = {};
for (const city in worldcities) {
  if (worldcities [city]< 300000) {
    continue;
  }
  largecities [city] = worldcities [city];
}
// console.log(largecities);

// sixth question:

let teaCollection = ["earrl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teaCollection.forEach(function (tea) {
  if (tea === "chai"){
    return;
  }
  availableTeas.push(tea);
});
// console.log(availableTeas);

//seventh question

 Worldcities = ["berlin","tokyo","syney", "paris"];
let traveledcities = [];
Worldcities.forEach( function(city)  {
  if ( city === "syney"){
    return;
  }
  traveledcities.push(city);

});
// console.log(traveledcities);

// 9. question

let myNumber = [2, 5, 7, 9];
let doubledNumber = [];
for (let i = 0; i < myNumber.length; i++) {
  if (numbers[i]=== 7){
    continue;
  }
  doubledNumber.push(Number[i] * 2);
}

// console.log(doubledNumber);

// tenth question

let myTeas = ["chai", "green tea", "black tea", "jasmin tea", "herbal tea"];
let shortTeas = [];
for (const tea of myTeas) {
  if(tea.length > "jasmin tea") {
    break;
  }
  shortTeas.push(tea);
}
// console.log(shortTeas);

// loop in javascript has ended after then ending, i persnaly feel that very well. what i say i do not understand first of all, i want to give a lot of thanks of my teacher hitesh choudhary . litrally, the all creadit went to my teacher. without teacher , this could not happen .


// const numbers = [1, 2, 3, 4, 5];

// // map
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // Output: [2, 4, 6, 8, 10]

// // filter
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// // reduce
// const sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum); // Output: 15

// function neyazAlam(name){
//   return `hello!!, ${name}`;

// }
// function myFunction(callback){
//   let name = "neyaz";
//   console.log(callback(name));
// }
// neyazAlam(myFunction);

// const numbers = [1, 2, 3, 4, 5];

// // map
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // Output: [2, 4, 6, 8, 10]

// // filter
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// // reduce
// const sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum); // Output: 15

// const numbers = [1, 2, 3, 4, 5];

// // map
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // Output: [2, 4, 6, 8, 10]

// // filter
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// // reduce
// const sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum); // Output: 15
// function neyazAlam(){
//   console.log("neyaz alam");
// }
// neyazAlam();
