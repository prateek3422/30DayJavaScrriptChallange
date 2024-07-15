// Day 3: Control Structures

// Activity 1: If-Else Statements

//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the
// console.

const num = 10;
if (num > 0) {
  console.log("The number is positive");
} else if (num < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

// • Task 2: Write a program to check if a person is eligible to vote (age 18) and log the result to the
// console.
let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// Activity 2:
// Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 40;
let num2 = 20;
let num3 = 72;

if (num1 > num2) {
  if (num1 > num3) {
    console.log(`${num1} is largest number`);
  } else {
    console.log(`${num3} is largest number`);
  }
} else if (num2 > num3) {
  console.log(`${num2} is largest number`);
} else {
  console.log(`${num3} is largest number`);
}

// Activity 3: Switch Case
//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7)
// and log the day name to the console.
let day = 3;

switch (day) {
  case 1: {
    console.log("Monday");
    break;
  }
  case 2: {
    console.log("Tuesday");
    break;
  }
  case 3: {
    console.log("Wednesday");
    break;
  }
  case 4: {
    console.log("Thursday");
    break;
  }
  case 5: {
    console.log("Friday");
    break;
  }
  case 6: {
    console.log("Saturday");
    break;
  }
  case 7: {
    console.log("Sunday");
    break;
  }
}

// • Task 5: Write a program that uses a switch case to assign a grade B, 'C, D, F) based on a score and
// log the grade to the console.
let score = 100;
let grade 
switch (true) {
  case ( score >= 90 ):
    grade = "A";
    break;
  case ( score >= 80 && score <= 89 ):
    grade = "B";
    break;
  case ( score >= 70 && score <= 79 ):
    grade = "C";
    break;
  case ( score >= 60 && score <= 69 ):
    grade = "D";
    break;
  case ( score >= 33 && score <= 59 ):
    grade = "E";
    break;
  default:
    grade = "F";
    break;
}

console.log(grade);


// Activity 4: Conditional (Ternary) Operator
//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the
// result to the console.

let oddOrEven = 10;

oddOrEven %2 ===0 ? console.log("The number is even") : console.log("The number is odd");




// Activity 5: Combining Conditions
// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not
// 100 unless also divisible by 400) and log the result to the console.

const year = 2025;


if(year % 4 === 0 && year % 100 !== 0){
    console.log(`${year} is a leap year`);
} else{
    console.log(`${year} is not a leap year`);
}
// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else
// statements and logs the result.

function checkNumber(num) {
    if(num > 0){
        console.log("The number is positive");
    }else if(num <0){
        console.log("The number is negative");
    }else{
        console.log("The number is zero");
    }
}

checkNumber(-10)

// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log
// the result.

function checkAge(age){
    if(age >= 18){
        console.log("You are eligible to vote");
    }else{
        console.log("You are not eligible to vote");
    }
}

checkAge(20)


// 3.Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on
// a number (1-7) and logs the day name.

function checkDay(day){
    switch (day) {
      case 1: {
        console.log("Monday");
        break;
      }
      case 2: {
        console.log("Tuesday");
        break;
      }
      case 3: {
        console.log("Wednesday");
        break;
      }
      case 4: {
        console.log("Thursday");
        break;
      }
      case 5: {
        console.log("Friday");
        break;
      }
      case 6: {
        console.log("Saturday");
        break;
      }
      case 7: {
        console.log("Sunday");
        break;
      }
    }
}
checkDay(7)
// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and
// logs the grade.

function checkScore(score){
    let grade 
    switch (true) {
      case ( score >= 90 ):
        grade = "A";
        break;
      case ( score >= 80 && score <= 89 ):
        grade = "B";
        break;
      case ( score >= 70 && score <= 79 ):
        grade = "C";
        break;
      case ( score >= 60 && score <= 69 ):
        grade = "D";
        break;  
      case ( score >= 33 && score <= 59 ):
        grade = "E";
        break;
      default:
        grade = "F";
        break;
    }
    console.log(grade);
}
checkScore(70)

// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and
// logs the result.

function checkLeapYear(year){
    if(year % 4 === 0 && year % 100 !== 0){
        console.log(`${year} is a leap year`);
    } else{
        console.log(`${year} is not a leap year`);
    }
}

checkLeapYear(2020)


