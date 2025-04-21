const person = {
  name: "neyaz",
  greet(){
    console.log(`hii, i am ${this.name}`);
  },
};
person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({name: 'sohail'});
boundGreet();