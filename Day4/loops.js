// Day 4: Loops
// Tasks/Activities:
// Activity 1: For Loop


//  Task 1:write a program to print numbers from 1 to 10 using a for loop.

for(let i=1; i<10; i++ ){
    console.log(i);
}
//  Task 2:Write a program to print the multiplication table of 5 using a for loop.

for(let i=1; i<10; i++){
    console.log(`5 * ${i} = ${5 * i}`)
}
// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to IO using a while loop.
let n=1
let sum = 0
while (n<=10) {
     sum += n;
     n++
     
    }
    
    console.log(`The sum of numbers from 1 to 10 is: ${sum}`)


// . Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let num =10

while (num >= 1){
    console.log(num)
    num--
}

// Activity 3: Do...While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

let i = 1
do {
    console.log(i)
    i++
} while (i<=5){
   
}

//  Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let factorial = 1
let fact = 10
const currentFact = fact
do {
    factorial = factorial * fact
    fact--    
} while (fact>0){
}
console.log(`The factorial of ${currentFact} is ${factorial}`)


// Activity 4: Nested Loops
// • Task 7: Write a program to print a pattern using nested for loops:
// (ignore color)


let stars = 10

for(let i=0; i<stars; i++ ){
    for(let j=1; j <= i; j++){
        process.stdout.write("* ")
    }
    console.log(" ")
}

for(let i=0; i<stars; i++){
    for(let j=stars; j>i; j--){
        process.stdout.write("* ")
    }
    console.log(" ")
}



// Activity 5: Loop Control Statements
// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for(let i=1; i<=10; i++ ){
    if(i === 5){
        continue;
    }
    console.log(i)
}


// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

let k = 9

for(let i=1; i<=10; i++ ){
    if(i > 7){
       break;
    }
    console.log(i)
}
