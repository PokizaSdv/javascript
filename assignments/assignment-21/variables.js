// 1
// let Variable
let length = 5;
let width = 10;
let area = length * width;
console.log(`The area of the rectangle is ${area}`);

length = 10;
width = 10;
area = length * width;
console.log(`The area of rectangle is now ${area}`);

// const Variable
// const length = 7;
// const width = 10;
// const area = length * width;
// console.log(` The area of rectangle is ${area}`);

length = 8;
width = 10;
area = length * width;
console.log(`The area of rectangle is now ${area}`);

// 2
console.log(myFunctionDeclaration());

function myFunctionDeclaration() {
    return "This is a function declaration!";
}

// console.log(myFunctionExpression());

// var myFunctionExpression = function () {
//     return "This is a function expression!";
// };

// 3
var myVar = "I'm global!";

function someFunction() {
    var myVar = "I'm in function scope!";

    if (true) {
        let myVar = "I'm in block scope!";
        console.log(myVar);
    }
    console.log(myVar);
}

someFunction();

console.log(myVar);
