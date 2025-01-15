// let sum = 0;
// let i = 1;

// while (i <= 5) {
//   sum = sum + i;
//   // sum += i;
//   i++;
// }
// console.log(sum);


//Print Numbers from 1 to 5

// let i = 1;
// while(i <= 5) {
//   console.log(i);
//   i++;
// }
//let i = 1; //initialization
// while( i <= 10) { // condition
//   // console.log(i); // action
//   i++;  // increment
// }

// let count = 10;
// while(count > 0) {
//   // console.log(count);
//   count--;
// }

// let sum = 0;
// let i = 1;

// while(i <= 5) {
//    sum = sum + i;
//   //  sum += i;
//    i++;
// }
// console.log(sum);

// let sum = 0;
// let i = 1;

// while(1 <= ) {
//   sum = sum + i;
//   // sum += i;
//   i++;
// }
// console.log(sum);      

// print number from 1 to 5;
// let i = 1;
// while(i <= 5) {
//   console.log(i);
//   i++;
// }
// let count = 10;
// while(count > 0) {
//   console.log(count);
//   count--;
// }
// let count = 20;
// while(count > 0) {
//   console.log(count);
//   count--;
// }
// let number = 0;
// while (number < 50) {
//     number += 10; // Increment by 10
//     console.log(number);
// }


// let i = 1;
// while(i <= 5) {
//   console.log(i);
//   i++;
// }

// let count = 10;
// while (count > 0){
//   console.log(count);
//   count--;
// }

// let count = 50;
// while (count > 0) {
//   console.log(count);
//   count--;
// }

// infinitive loops

// do while loops//

//counting down from 10 to 0

// let count = 10;
// do {
//   console.log(count);
//   count--;
// } while(count > 0);

// let count = 5;
// do{
//   console.log(count);
//   count++;
// } while(count > 0)

// print number from 1 to 5;

// for(let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for(let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// exercise and example

// const fruits = ["neyaz", "sohail", "asik","faiyaz"];
// for( let i = 0; i < fruits.lenght; i++) {
//   console.log (fruits[i]);
// }
// const fruits = ["apple", "banana", "cherry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// calculating a sum
// let sum = 0;
// for(let i = 1; i <= 5; i++) {
//   sum += 1;
// }
// console.log(sum);

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum += i; // Adds the current value of i to sum
// }
// console.log(sum);


// let tea = ["green tea", "black tea", "chai", "oolong tea"];
// let selectedteas = [];
// for (let i = 0; i < tea.length; i++) {
//     if(tea[i] === "chai") {
//         break;
//     }
//     selectedteas.push(tea[i])
// }
// // console.log(selectedteas);
// let tea = ["green tea", "black tea", "chai", "oolong tea"];
// let selectedtea = [];
// for (let i = 0; i < tea.length; i++) {
//     if (tea[i] === "black tea"){
//         break;
//     }
//     selectedtea.push(tea[i]);
// }
// console.log(selectedtea);

// let name = ["neyaz", "sohail","asik", "faiyaz", "sahil", "anurag"];
// let selectedmyName = [];

// // for(let i = 0; i < name.length; i++){
//     if(name[i] === "chai"){
//         break;
//     }
//     selectedname.push(tea[i]);
// }
// console.log(selectedname);


// let cities = ["london", "new york", "paris", "berlin"];

// let visitedcities = [];
// for(let i = 0; i < cities.length; i++) {
//   if(cities[i] === "new york" || cities[i] === "new york"){
//     continue;
//   }
//   visitedcities.push(cities[i]);

// }
// console.log(visitedcities);

// let cities = ["london", "new york", "paris","berlin"];
// let visitedcities = [];
// for(let i = 0; i < cities.length; i++) {
//     if (cities[i] === "paris" || cities[i] === "paris"){
//         continue;
//     }
//     visitedcities.push(cities[i]);
// }
// // console.log(visitedcities);

// let cities = ["london", "new york", "paris", "berlin"];

// let visitedcities = [];

// for(let i = 0; i < cities.length; i++){
//     if(cities[i] === "paris" || cities[i] === "paris") {
//         continue
//     }
//     visitedcities.push(cities[i]);
// }
// console.log(visitedcities);


// let teaTypes = ["green tea", "chai", "herbal tea","black tea"];
// let preferredTea = [];

// for (const tea of teaTypes) {
//     if (tea === "herbal tea"){
//         continue;
//     }
//     preferredTea.push(tea);
// }

// let teaTypes = ["green tea", "chai","herbal tea", "black tea"];
// let preferredTea = [];
// for (const tea of teaTypes) {
//     if(tea === "herbal tea"){
//         continue;
//     }
//     preferredTea.push(tea);
// }
// console.log(preferredTea);


// let worldcities = {
//     sydney : 500000,
//     tokyo : 900000,
//     berlin : 450000,
//     peris : 2200000,
// }
// let largecities = {};
// for (const city in worldcities) {
//     if(worldcities[city] < 300000){
//         continue
//     }
//     largecities[key] = worldcities[key]
// }
// console.log(largecities);

let numbers = [1,2,3,4,5];

// let smallNumbers = [];
// for( const num of numbers) {
//   if (num === 4) {
//     break;
//   }
//   smallNumbers.push(num);
// }
// // console.log(smallNumbers);

// let number = [1,2,3,4,5,6];

// let smallNumbers = [];

// for (const num of number) {
//     if (num === 4) {
//         break;
//     }
//     smallNumbers.push(num);
// }
// console.log(smallNumbers);


// let teaCollection = ["earrl grey", "green tea", "chai", "oolong tea"];
// let availableTeas = [];
// teaCollection.forEach(function (tea) {
//   if (tea === "chai"){
//     return;
//   }
//   availableTeas.push(tea);
// });
// console.log(availableTeas);

// let teaCollection = ["earl grey", "green tea", "chai", "oolong tea" ];
// let availableTeas = [];
// teaCollection.forEach(function(tea) {
//     if ( tea === "chai"){
//         return;
//     }
//     availableTeas.push(tea);
// });
// console.log(availableTeas);

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teaCollection.forEach(function(tea){
    if( tea === "chai"){
        return;
    }
    availableTeas.push(tea);
});
// // console.log(availableTeas);

// function myFunction(){
//     console.log("neyaz alam");
// }
// myFunction();

// function neyazAlam(name){
//     console.log(`hello!!, ${name}`);
// }
// neyazAlam("neyaz");

// function myFunction(a,b){
//     return a+b;
// }
// console.log(myFunction(30,90));


// function square(number){
//     return number * number;
// }
// console.log(square(10));

// function square(number){
//     return number * number
// }
// console.log(square(20));

// let a = 20;
// let b = 30;
// let result = a * b;
// console.log(result);

// function findSquare(number){
//     return result;
// }
// let square = findSquare(3);
// // console.log(findSquare(result));

// function square(number){
//     return number * number
// }
// console.log(square(12));

// function myFunction(a,b){
//     return a+b;
// }
// console.log(myFunction(23,67))


