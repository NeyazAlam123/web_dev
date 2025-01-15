// today, i wiil discuss about the function in the javascript and function is the most important for devlopement...

//first question;

// function makeTeas(typeOfTea) {
//   return `making ${ typeOfTea}`;
//     console.log(test);
//   }  

// let teaOrder = makeTeas("lemon tea");
// // console.log(teaOrder);



// second question;

function orderTea (teaType) {
  function confirmeOrder(){
    return `order confirmed for chai`;
  }
  return confirmeOrder();
}
let orderConfirmation = orderTea("neyaz");
// console.log(orderConfirmation);


// third question;

function makeTea(typeOfTea) {
  return `makeTea: ${typeOfTea}`;
}

function processTeaOrder(teafunction) {
  return teafunction("earl grey");
}

let order = processTeaOrder(makeTea);
// console.log(order);

// Function declaration


function greet(name) {
  return `Hello, ${name}!`;
}

// Calling the function
const message = greet("neyaz");
console.log(message); // Output: Hello, Alice!

// function greet(name) {
//   return `hello, ${name}!`;
// }
// const message = greet("neyaz");
// console.log(message);
// function greet(name){
//   return `hello ${name}`;
// }
// const message = greet("neyaz");
// console.log(message);

// // function expression
// const add = function( a, b) {
//   return a + b;
// };
// console.log(add(5,7));
// const add = function(a, b) {
//   return a+b;
// };
// console.log(add(5,5));

// const  = function (a, b){
//   return a+b;
// };
// console.log(subt(10,5));

// const add = function(a,b){
//   return a+b;
// };
// console.log(add(5,6));\\

// const add = function(a,b){
//   return a+b;
// };
// console.log(add(5,7));


// arrow function;

// const multiply = (a,b) => a * b;


// const multiply = (a, b) => a * b;
// console.log(multiply(9,5));



// const a = 25;
// const b = 20;
// const sum = a + b;
// // console.log(sum);

// substraction
// const a = 30;
// const b = 20;
// const diffrence = a - b;
// console.log(diffrence);

// let num1 = 20;
// let num2 = 40;
// let diffrence = num2 - num1;
// console.log(diffrence);
// const a = 5;
// const b = 9;
// const product = a * b;
// console.log(product);


// let num1 = 10;
// let num2 = 20;
// let quotient = num2 / num1 ;
// console.log(quotient);

// // function add(a,b){
// //   const result = a+b;
// //   return result;
// // }
// // console.log(result);

// let sum = a + b;
// console.log(sum);

// let a = 18;
// let b = 20;
// let diffrence = b - a;
// console.log(diffrence);


// sum function 

// function myFunction (message){
//   console.log(message);
// }
// // myFunction(" i love js");

// function sum (x, y){
// //   sum = x+y;
//   return sum;
// }
// let val = sum(5,7);
// console.log(val);

// sum function 
// function sum(a, b){
//   return a + b;
// }
// const arrowSum = (a, b)=> {
//   console.log( a, b);
// }


// function myFunction (message){
//   console.log(message);
// }
// //  myFunction("i love js")
// function sayHello() {
//   console.log("Hello, neyaz!");
// }
// sayHello();

// function myFunction(message){
//   console.log(`hello, ${message}`);
// }
// myFunction("neyaz");


// function greet(name){
//   console.log(`hello,${name}`); // name is a parameter;
// }
// greet("neyaz")
// greet("sohail") // neyaz and sohail are arguments;

// function with return value 

// function add( a, b){
//   return a+b;
// }
// let result = add(5, 5);
// // console.log(result);

// function diffrence(a, b){
//   return a-b;
// }
// let result = diffrence(7,4);
// console.log(result);

// function multiply(a, b){
//   return a * b;
// }
// let result = multiply(5,8);
// console.log(result);

// function division(a, b){
//   return a / b;
// }
// let result = division(10,5);
// console.log(result);

// function square(number){
//   return number * number;
// }
// console.log(square(10));
// function add(a,b){
//   return a+b;
// }
// let result = add(6,9);
// console.log(result);

// right now, we will understand that what is array function/

// const add = (a, b) => a + b;

// function add(a, b){
//   return a + b;
// }
// let result = add(37,67);
// // console.log(result);

// const add = (a, b) => a + b;
// console.log(add(34,89));
// const add = (a,b) => a + b;
// console.log(add(40,90))
// const substraction = (a, b) => a-b; 
// console.log(substraction(59-45)); 

// const multiply = (a, b) => a * b;
// console.log(multiply(5, 8));

// const division = (a , b) => a / b;
// console.log(division(20,4));
// const square = x => x * x ;

// console.log(square(5)); // Output: 25

// const square = x => x * x;
// console.log(square(10));

// example take another function as argument

// const Numbers = [1,2,3,4,5,];

// const squares = numbers.map(number => number * number);
// console.log(squares);

// const numbers = [1, 2, 3, 4, 5];

// // Using a Higher-Order Function (map)
// const squares = numbers.map(number => number * number);

// console.log(squares); // Output: [1, 4, 9, 16, 25]

// const number = [1,2,3,4,5,];
// const squares = number.map(number => number * number);
// console.log(squares)

// const number = [1,2,3,4,5];
// const squares = number.map(number => number * number);
// console.log(squares);


// function return another function

// function multiplier (factor){
//   return number => number * factor;
// }
// const double = multiplier(5);
// const triple = multiplier(4);
// console.log(double(6));
// console.log(triple(7));



// const number = [20];
// const square = number.map(number => number * number);
// console.log(square);

// let a = 20;
// let b =  a * a;
// console.log(b);

// function square(num){
//   return num * num
// }
// let result = square(10);
// console.log(result);



// function myFunction(a,b){
  
// }

// myFunction()

// const myFunction = () =>{

// }

// myFunction()


