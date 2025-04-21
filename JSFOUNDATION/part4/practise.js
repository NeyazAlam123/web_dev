
// let fruits = ["apple","mango"];
// fruits.push("neyaz");
// console.log(fruits);
// fruits.unshift("graaps")
// console.log(fruits);

// let fruits = ["Apple","mango","grapples"]
// fruits.pop()
// console.log(fruits);
// fruits.shift()
// console.log(fruits);

// Findimg Element;
let fruits1 = ["apple", "banana","cherry"]
// console.log(fruits1.indexOf("banana"));
// console.log(fruits1.indexOf('apple'));

// Checking Array Length;
let fruits2 = ["apple","banana","mango","cheery"]
// console.log(fruits2.length);

// Looping through an Array;
let fruits3 = ["apple", "mango","banana", "cherry"];
for (let i = 0; i < fruits3.length; i++) {
  // console.log(fruits3[i]);
  
}
fruits3.forEach((fruits3) => {
  // console.log(fruits3);
});

// now , we will learn Advance array becuse this is very important for us as soon as you will learn it then after your confidiece level will boost up ,as far as i think:----
// let numbers = [1,2,3,4,5,6,];
// let doubled = numbers.map((num) => num*2);
// console.log(doubled);

let X = [1,2,3,4,5,6,];
// let Y = X.map((num) => num*2);
// console.log(Y);

// let numbers = [1,2,3,4,5,6];
// let evenNumbers = numbers.filter((num) => num%2 ===0);
// console.log(evenNumbers);

// let numbers = [1,2,3,4,5,6];
// let sum = numbers.reduce((total, num) => total+ num,0);
// console.log(sum);



// let numbers1 = [1,2,3,4,5,6,7,8,9];
// let sum = numbers1.reduce((total, num) => total + num, 0);
// console.log(sum);

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }


// let i = 1;

// while (i <= 10){
  // console.log(i);
//   i++;  // increment to avoid an infinite loop;
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

//Break;---

for (let i = 1; i <= 10; i++) {
  if( i === 6){
    break; //Exite the loop when i equals 6
  }
  // console.log(i);
  
}

for (let i = 1; i <= 5; i++) {
  if( i===4){
    break;
  } 
  // console.log(i);
  
}

//Continue--

for (let i = 1; i <= 10; i++) {
  if( i === 5){
    continue;
  }
  // console.log(i);
  
}

for (let i = 0; i <= 10; i++) {
  if(i ===6){
    continue
  }
  // console.log(i);
  
}

for (let i = 1; i <= 10; i++) {
  if(i === 5){
    break;
  }
  // console.log(i);
  

}
  
for (let i = 0; i <= 10; i++) {
  if(i === 6){
    continue;
  }  
  // console.log(i);
  
}

// sum of numbers from 1 to 10;t  that is real world problem;

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i 
}
// console.log(sum);

let sum1 = 0;
for (let i = 1; i <= 10; i++) {
  sum1 += i  
}
// console.log(sum1);

// print odd numbers from 1 to 10;

for (let i = 1; i <= 10; i++) {
  if( i % 2 === 0){
    continue;
  }  
  // console.log(i);
  
}

let fruits = ["apple","mango","banana","grapps"];

for (const fruit of fruits) {
  // console.log(fruit);
}

let person = {name: "neyaz", age: 20, city: "gopalganj"};
for (const key in person) {
// console.log(`${key}: ${person[key]}`);
    
  }

