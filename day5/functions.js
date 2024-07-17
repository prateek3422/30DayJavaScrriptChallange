// activity 1 function declaration
// task 1:
function oddOrEven(num) {
    if (num % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}
console.log(oddOrEven(5))
console.log(oddOrEven(6))

// task 2:

function squre(num) {
    return num * num
}

console.log(squre(5))
console.log(squre(6))


// activity 2 function Expression
// task 3:
const maxnumNum =  function (num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

console.log(maxnumNum(5, 6))

// task 4:
const concatString = function(str1, str2){
    return str1 + str2
}

console.log(concatString("Hello", "world"))


// activity 3 Arrow function

// task 5:
const add = (num1, num2) => {
    return num1 + num2
}

console.log(add(5, 6))

// task 6:

const spacialChar  =  (str, char) =>{
    return str.includes(char)
}

console.log(spacialChar("Hello", "l"))



// Activity 4 function parameter and default value
// task7:
function multiply (num1, num2 = 2) {
    return num1 * num2
}
console.log(multiply(5))
console.log(multiply(5, 6))

// task 8:
const user = (name, age = 18) => {
    return `My name is ${name} and I am ${age} years old`

}

console.log(user("John"))
console.log(user("John", 25))



// task 9:

function getRandomInt(callBack, num) {

    for (let i = 0; i < num; i++) {
        callBack()
    }

}

function callBackFunction() {
    console.log("Hello world")
}



getRandomInt(callBackFunction, 10);


// task 10:

function multyFunction (fun2, fun1, num){
   return fun1(fun2,num)
}

function fun1( fun2, num1){
   return fun2(num1)
}

 function fun2(num){
    return num * num
}


console.log(multyFunction(fun2, fun1, 20))


