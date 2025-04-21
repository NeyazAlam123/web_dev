let computer = { cpu: 12};
let lenovo = { 
  screen: "HD",
  __proto__: computer,
};
let tomHardware = {};

// console.log(`computer`, lenovo.__proto__);
let genericCar = {tyres: 5};

let tesla = {
  driver : "AI",
};
Object.setPrototypeOf(tesla, genericCar);
// console.log(`tesla`, genericCar);

// let neyazAlam = {ashrafi : 10};

// let sohailAlam = {
//   khan : "neyaz",
// };
// Object.setPrototypeOf(neyazAlam, sohailAlam);
// console.log(`neyazAlam`, sohailAlam );


// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function () {
//   console.log(`Hello, my name is ${this.name}`);
// };

// const john = new Person("John");
// john.greet(); // "Hello, my name is John"

// // The 'greet' method is not directly on 'john', but in 'Person.prototype'
// console.log(john.__proto__ === Person.prototype); // true

// function Person(name){
//   this.name = name;
// }

// person.prototype.greet = function(){
//   console.log(`hello, my name is ${this.name}`);
  
// };
// const neyaz = new person("neyaz");
// neyaz.greet();
// // console.log(neyaz);


function person(name,age){
  this.name = name;
  this.age = age;
}

person.prototype.sayHello = function(){
  console.log(`hello!, my name is ${this.name}`);
};

const neyaz = new person("neyaz",20);
const sohail = new person("sohail",25);

// console.log(neyaz.name);
// neyaz.sayHello()