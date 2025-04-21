// function person(name,age){
//   this.name = name;
//   this.age = age;
// }
// person.prototype.sayHello = function(){
//   console.log(`hello, my name is ${ this.name}`);
// }
// let neyaz = new person("neyaz",20)
// let sohail = new person("sohail",25)
// console.log(neyaz.name)
// neyaz.sayHello();
// const person = {
//   name: "neyaz",
//   age: 20,
//   greet: function(){
//     return `hello, my name is ${this.name}`
//   }
// };
// // console.log(person.name);
// console.log(person.greet());

// constructor function-->
function person(name,age){
  this.name = name;
  this.age = age;
  this.sayHello = function(){
     return `hello, i am ${this.name}, and i am ${this,age} year old`;
  };
}

const neyaz = new person("neyaz",20);
const sohail = new person("sohail",25);
// console.log(neyaz.sayHello());
// console.log(sohail.sayHello());

