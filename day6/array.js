// Array

// task/Actitys

//task1
console.log(`-------------- task 1 --------------`)
const arr = [1, 2, 3, 4, 5];
console.log(arr);

//task2
console.log(`-------------- task 2 --------------`)
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2[0]);

// Activity 2

//task3
console.log(`-------------- task 3 --------------`)

const Usernane = ["John", "Mary", "Peter", "Paul", "George"];

Usernane.push("Ringo");
console.log(Usernane);


//task4
console.log(`-------------- task 4 --------------`)

const pets = ["cat", "dog", "bird", "fish"];
pets.pop();
console.log(pets);

//task5
console.log(`-------------- task 5 --------------`)

const birds = ["duck", "goose", "swan", "swan", "swan"];
birds.shift();
console.log(birds);

//task6
console.log(`-------------- task 6 --------------`)

const numbers = [1, 2, 3, 4, 5];
numbers.unshift(0);
console.log(numbers);

console.log(`==============Activity 3================`)
//task7
console.log(`-------------- task 7 --------------`)

const numbers2 = [1, 2, 3, 4, 5];


const numbers3 = numbers2.map((num) =>{
    return num * 2;
})

console.log(numbers3)

// task 8

console.log(`-------------- task 8 --------------`)
const oddEvenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

oddEvenNumbers.filter((nums) => (nums%2 === 0) ? evenNumbers.push(nums): null)

console.log(evenNumbers)
console.log(`---------------- task 9 --------------`)

const sum  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const initialValue = 0;

const total = sum.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, initialValue)


console.log(total)

// console.log(============= Activity 4 ===============)

console.log(`-------------- task 10 --------------`)
const persons = [1, 2, 3, 4, 5];


for (let i = 0; i < persons.length; i++) {
  console.log(persons[i]);
}


console.log(`-------------- task 11 --------------`)
const users = ["John", "Mary", "Peter", "Paul", "George"];

users.forEach((user) =>(
    console.log(user)
))


console.log(`============== Activity 5 ================`)
//task12
console.log(`-------------- task 12 --------------`)

const matrix =[]

function createMatrix(rows, columns) {

    for (let i = 0; i < rows; i++) {
       matrix.push([]);
        for (let j = 0; j < columns; j++) {
           matrix[i].push(i*columns + j+1);
        }
    }
    return matrix;  
}

console.log(createMatrix(3,3))


console.log(`-------------- task 13 --------------`)
const matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
matrix2.forEach((row) =>{
    console.log(row)
})
