function person(name , age){
  this.name = name;
  this.age = age;    
  };
person.prototype.neyazAlam = function(){
  console.log(`hi!,my name is ${this.name}`);
  
}

const x = new person("neyaz", 20);
const y = new person("sohail",25);

console.log(x.name);
console.log(y.age);
x.neyazAlam();
y.neyazAlam();

class person {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  sayHello(){
    console.log(`hello, my name is ${this.name}`);
  }
}

// const x = new person("neyaz",20);
// const y = new person("asik",22);
// x.sayHello();
// y.sayHello();

// What is an Object?

const car = {
  brand: "toyota",
  model: "corrola",
  start(){
    console.log("the car has started.");
    
  }
};

// console.log(car.brand);
// console.log(car.model);
// car.start();

// const X = {
//   lastname: "ashrafi",
//   firstname: "neyaz",
//   neyazAlam(){
//     console.log("hi, my name is neyaz alam ashrafi");
//   }
// };
// console.log(X.firstname);
// console.log(X.lastname);
// X.neyazAlam();

// const Y = {
//   neyaz: 20,
//   sohail: 30,
//   neyazAlam(){
//     console.log("hi, my name is neyaz alam ashrafi");
//   }
// };
// console.log(Y.neyaz);
// console.log(Y.sohail);
// Y.neyazAlam();





class person{
  constructor(name,age){
    this.name = name;
    this.age = name;
  }
  neyazAlam(){
    console.log(`hello, my name is ${this.name}`);
  } 
};
// const X = new person("neyaz", 20);
// const Y = new person("asik",23);

// X.neyazAlam();
// Y.neyazAlam();

// //polymorephism

// class bird{
//   fly(){
//     return `flying ....`;
//   }
// }
// class penguin extends bird{
//   fly(){
//     return `penguin can not fly`;
//   }
// }
// let bird = new bird();
// let penguin = new penguin();

// console.log(bird.fly());
// console.log(penguin.fly()); 

class constructor {
  static add(a,b){
    return a+b;
  }
}
// console.log(calculator.add(10,20));

// getters and setters

// class employee{
//   constructor(name, salary){
//     this.name = name
//     this._salarysalary = salary;
//   }

//   get salary(){
//     return `you are not allowed to see salary`;
//   }
//   set salary(value){
//     if(value < 0){
//       console.error("invalid salary");
//     } else{
//       this._salary = value
//     }
//   }
// // }

// const emp = new employee("neyaz",100000)
// console.log(emp._salary);



function someone(name, age){
  this.name = name
  this.age = age
  
this.neyazAlam = function(){
  console.log(`helo! , my name is ${this.name}`);

 }
}

// const X = new someone("neyaz", 20);
// const Y = new someone("sohail",30);
// console.log(X.name);
// console.log(Y.age);
// neyazAlam();


