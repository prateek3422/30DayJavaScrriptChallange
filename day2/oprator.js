// Day 2: Operators
// Tasks/Activities:
// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.

const num1 = 5;
const num2 = 7;
const sum = num1 + num2;
console.log(sum);

// Task 2: Write a program to subtract two numbers and log the result to the console.
const num3 = 10
const num4 = 4
const difference = num3 - num4
console.log(difference)
// Task 3: Write a program to multiply two numbers and log the result to the console.
const num5 = 3
const num6 = 4
const product = num5 * num6
console.log(product)

// Task 4: Write a program to divide two numbers and log the result to the console.
const num7 = 20
const num8 = 5
const quotient = num7 / num8
console.log(quotient)

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to
// the console.
const num9 = 10
const num10 = 3
const remainder = num9 % num10
console.log(remainder)


// Activity 3: Comparison Operators
//  Task 8: Write a program to compare two numbers using > and < and log the result to the
// console.

const num11 = 5
const num12 = 7
if (num11 > num12) {
  console.log("num11 is greater than num12")
}else if(num11 < num12){
    console.log("num11 is less than num12")
}
//Task 9: Write a program to compare two numbers using >= and <= and log the result to the
// console.

const cartPrice = 100
const totalPrice = 200
if (cartPrice >= totalPrice) {
  console.log("cartPrice is greater than totalPrice")
}else if(cartPrice <= totalPrice){
    console.log("cartPrice is less than totalPrice")
}

//Task 10: Write a program to compare two numbers using == and === and log the result to the
// console.

const num13 = 5
const num14 = 7
if (num13 == num14) {
  console.log("num13 is equal to num14")
}

// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result
// to the console.

const num15 = 5
const num16 = 7
if (num15 > 5 && num16 > 5) {
  console.log("num15 is greater than 5 and num16 is greater than 5")
}


// Task 12: Write a program that uses the || operator to combine two conditions and log the result
// to the console.

const age = 18
const height = 180
if(age >= 18 || height >= 180){
  console.log("you are old enough to vote")
}
// Task 13: Write a program that uses the ! operator to negate a condition and log the result to
// the console.

const isRaining = true
if(!isRaining){
  console.log("it is not raining")
}


// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or
// negative and log the result to the console.
const number = 15

number > 0 ? console.log("number is positive") : console.log("number is negative")



// Feature Request:
// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition,
// subtraction, multiplication, division, remainder) on two numbers and logs the results.


function operations (num1, num2) {
  return {
    add: num1 + num2,
    subtract: num1 - num2,
    multiply: num1 * num2,
    divide: num1 / num2,
    remainder: num1 % num2
  }
}
const a = 15;
const b =  7;
console.table(operations(a, b));


// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using
// different comparison operators and combines conditions using logical operators, logging the
// results.

function compareNumbers(num1, num2) {
  if (num1 > num2) {
    console.log("num1 is greater than num2");
  } else if (num1 < num2) {
    console.log("num1 is less than num2");
  }
   else {
    console.log("num1 is equal to num2");
  }
}
compareNumbers(5, 7);




// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number
// is positive or negative and logs the result.



function ternaryOperator(number) {
  return number > 0 ? console.log("number is positive") : console.log("number is negative");
}
ternaryOperator(15);

