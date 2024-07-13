// Activity1: varable Declaration

//Task 1: Declare a variable using var , assign it a number, and log the value to the console.
var a = 10;
console.log(a);
// Task 2: Declare a variable using let , assign it a string, and log the value to the console.
const str = "Hello world ! I am  prateek singh";
console.log(str);

//Activity 2: Constant Declaration

// Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console.

const isActive = true;
console.log(isActive);

// Activity 3: Data Types

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each
// variable's type using the typeof operator.

const num = 100;
const email = "prateek@gmail.com";
const isVerified = true;

const user = {
  id: 100,
  username: "prateek singh",
  isVerified: true,
};

const friends = ["Rohit", "Abhijeet ", "Dilkhush", "Akhil"];

console.log(typeof num);
console.log(typeof email);
console.log(typeof isVerified);
console.log(typeof user);
console.log(typeof friends);

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to
// the console.

let randomNum = 100;

console.log("Before Reassignment: ", randomNum);

randomNum = 200;
console.log("After Reassignment: ", randomNum);


// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.

const username = "prateek";
console.log(username);
// username = "prateek singh";
// console.log(username);

// Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both
// the value and type of each variable to the console.

const subject = "Javascript";
var compleated = true;

function greet(name) {
  console.log(`subject  ${name} : type ${typeof name}`);
}
greet(subject);
greet(compleated);


// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and
// const when it comes to reassignment.

let project = "30DaysOfJavascript";

project = "30DaysOfJavascript";

console.log(project);

const project2 = "Devboard";
console.log(project2);
try {
    project2 = "Devboard";
} catch (error) {
    console.log(error);
}

//object

let userDetails = {
  name: "Prateek",
  age: 20,
  isVerified: true,
};

userDetails.name = "rohit";
userDetails.age = 18;
userDetails.isVerified = false;
console.log(userDetails);


const userDetails2 = {
  name: "Prateek",
  age: 20,
  isVerified: true,
};

userDetails2.name = "Dilkhush";
userDetails2.age = 20;
userDetails2.isVerified = false;
console.log(userDetails2);
