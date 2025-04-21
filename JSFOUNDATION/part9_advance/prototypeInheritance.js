function person(name){
  this.name = name;
}
person.prototype.sayHello = function(){
  console.log(`hello,my name is ${this.name}`);
}
let neyaz = new person("neyaz")
neyaz.sayHello();
