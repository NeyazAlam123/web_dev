// // function person (name, age){
// //   this.name = name;
// //   this.age = age;
// // }

// function Car ( make, model){
//   this.make = make;
//   this.model = model;
// }

// let myCar =  new Car("toyota", "carmy");
// // console.log(myCar);

// let myNewCar = new Car("tata", "safari");
// // console.log(myNewCar);

// function Myname(name , lastname){
//   this.name = name;
//   this.lastname = lastname;
// }

// let newMyname = new Myname("neyaz", "alam");
// // console.log(newMyname);


// function neyaz(name, lastname){
//   this.name = name
//   this.lastname = name
// };

// let x = new neyaz("neyaz","alam");
// // console.log(x);







function Person(name, age) {
  // Assign properties to the new object
  this.name = name;
  this.age = age;

  // Add a method
  this.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`); 
  };
}

// // Create objects using the constructor
// const john = new Person("John", 25);
// const jane = new Person("Jane", 30);

// // Access properties and methods
// console.log(john.name); // "John"
// console.log(jane.age);  // 30
// john.sayHello();        // "Hello, my name is John"
// jane.sayHello();        // "Hello, my name is Jane"

function person(name, age){
  this.name = name
  this.age = age

  this.sayHello = function(){
    console.log(`hello, my name is ${this.name}`);
  };
  
}

let neyaz = new person("neyaz",25);
let sohail = new person("sohail", 30);

// console.log(neyaz.name);
// console.log(sohail.age);
// neyaz.sayHello();
// sohail.sayHello();

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the prototype
Person.prototype.sayHello = function () {
  console.log(`Hi, I'm ${this.name}`);
};

// Create objects
const john = new Person("John", 25);
const jane = new Person("Jane", 30);

// john.sayHello(); // "Hi, I'm John"
// jane.sayHello(); // "Hi, I'm Jane"


// function person(name, age){
//   this.name = name;
//   this.age = age;
// }

// person.prototype.sayHello = function(){
//   console.log(`hello, my name is ${this.name}`);
// };
// let x = new person("neyaz",20);
// let y = new person("sohail",25);
// x.sayHello();
// y.sayHello();
// console.log(x.name);
// console.log(y.name);

// function person(name,age){
//   this.name = name
//   this.age = age
// }
// person.prototype.neyazAlam = function(){

//   console.log(`hello, my name is ${this.name}`);
// };

// const x = new person("neyaz",20);
// const y = new person("sohail",25);

// x.neyazAlam();
// y.neyazAlam();
// console.log(x.name);
// console.log(y.name);


function person(name,age){
  this.name = name;
  this.age = age;
}

person.prototype.myWorld = function(){
  console.log(`hello, my name is ${this.name}`);
}

const x = new person("neyaz",20);
const y = new person("sohail",25);

x.myWorld();
y.myWorld();
// console.log(x.name);
// console.log(y.name);


