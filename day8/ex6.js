// console.log(========Day 8 Activity =========);

console.log(`=========Activity 1=========`)
console.log(`=========task 1=========`)

const name = 'John';
const age = 30;

console.log(`My name is ${name} and I am ${age} years old.`);


console.log(`=========task 2=========`)


console.log(`how are you? 
    my name is ${name} 
    and I am ${age} years old.`);


console.log(`=========Activity 2=========`)
console.log(`=========task 3=========`)

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [num1, num2] = num;
console.log(num1);
console.log(num2);


console.log(`=========task 4=========`)
const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
}

const {title, author} = book;
console.log(title);
console.log(author);

console.log(`=========Activity 3=========`)
console.log(`=========task 5=========`)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = [...arr, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(newArr);


console.log(`=========task 6=========`)

function restOpreater(...nums){
    let num = 1
    for (let i = 1; i < nums.length; i++) {
        num += nums[i]
    }
    console.log(num)
}

console.log(restOpreater(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));



console.log(`=========Activity 4=========`)
console.log(`=========task 7=========`)

function product(num1, num2 = 1){
    return num1 * num2
}
console.log(product(2, 3))
console.log(product(2))


console.log(`=========Activity 5=========`)
console.log(`=========task 8=========`)

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object
// to the console.


 const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

console.log(person.greet())


console.log(`=========task 9=========`)


const key1 = 'name';
const key2 = 'author';
const key3 = "year"

const books = {
    [key1]: 'The Great Gatsby',
    [key2]: 'F. Scott Fitzgerald',
    [key3]: 1925,
}
console.log(book)

