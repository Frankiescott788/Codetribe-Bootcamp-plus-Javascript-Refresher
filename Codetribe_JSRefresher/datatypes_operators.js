// exercise one : numbers
let noOne = 10;

let noTwo = 3.5;

let addition = noOne + noTwo;

let subtraction = noOne - noTwo;

let multiplication = noOne * noTwo;

let division = noOne / noTwo;

let modulus = noOne % noTwo;

let exponentiation = noOne ** noTwo;


console.log("num1:", noOne);
console.log("num2:", noTwo);
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("Exponentiation:", exponentiation);

// exercise two : Boolean and operators;

let numberOne = 10;

let numberTwo = 5;

let isEqual = (numberOne === numberTwo);

let isNotEqual = (numberOne !== numberTwo);

let isGreater = (numberOne > numberTwo);

let isGreaterOrEqual = (numberOne >= numberTwo);

let isLess = (numberTwo < numberOne);

let isLessOrEqual = (numberTwo <= numberOne);

console.log("isEqual:", isEqual);
console.log("isNotEqual:", isNotEqual);
console.log("isGreater:", isGreater);
console.log("isGreaterOrEqual:", isGreaterOrEqual);
console.log("isLess:", isLess);
console.log("isLessOrEqual:", isLessOrEqual);


let x = 8;
let y = 12;

if (x > y) {
    console.log("x is greater than y");
} else {
    console.log("x is not greater than y");
}

// Check if x is less than or equal to y
if (x <= y) {
    console.log(true)
} else {
    console.log("x is not less than or equal to y");
}
// Check if x is equal to y
if (x === y) {
    console.log("x is equal to y");
} else {
    console.log("x is not equal to y");
}

// Check if x is not equal to y
if (x !== y) {
    console.log("x is not equal to y");
} else {
    console.log("x is equal to y");
}

let a = true;
let b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);


let p = 9;

console.log(p += 18);
console.log(p -= 18);
console.log(p *= 18);
console.log(p /= 18);
console.log(p %= 18);