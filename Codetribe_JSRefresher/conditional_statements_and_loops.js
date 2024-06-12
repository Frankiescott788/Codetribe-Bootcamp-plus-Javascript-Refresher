// exercise one : temperature check;

const temperature = 18;

if(temperature < 0) {
    console.log("It's freezing!")
} else if (temperature >= 0 && temperature <= 15) {
    console.log("it's cold")
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild")
} else if (temperature > 25) {
    console.log("It's warm")
}

switch (true) {
    case temperature < 0:
        console.log("It's freezing!");
        break;
    case temperature >= 0 && temperature <= 15 :
        console.log("it's cold");
        break;
    case temperature >= 16 && temperature <= 25 : 
        console.log("It's mild");
        break;
    case temperature > 25 : 
        console.log("It's warm")
}

// exercise two : Divisible check

const numberTocheck = 6;

if(numberTocheck % 2 === 0 && numberTocheck % 3 === 0) {
    console.log('Divisible by both')
}
 else if(numberTocheck % 2 === 0) {
    console.log("Divisible by 2")
}
else if(numberTocheck % 3 === 0) {
    console.log("Divisible by 3")
} else {
    console.log('Not divisible by 3 or 2')
}

switch(true) {
    case numberTocheck % 2 === 0 && numberTocheck % 3 === 0 :
        console.log('Divisible by both');
        break;
    case numberTocheck % 2 === 0 :
            console.log('Divisible by both');
            break;
    case numberTocheck % 3 === 0 :
                console.log('Divisible by both');
                break;
    default :
        console.log('No divisible by 2 or 3');
        break;
}

// exercise three : For loops
for(let i = 0; i <= 10; i++){
    console.log(i);
}

for(let i = 0; i <= 20; i += 2){
    console.log(i)
}

let sum = 0;

for(let i = 1; i <= 100; i++){
    console.log(sum += i) 
}

const numbers = [1, 2, 3, 4, 5];

for(let index = 0; index < numbers.length; index++) {
    console.log(numbers[index])
}
const numberArr = [3, 7, 2, 5, 10, 6];
let maxNo = numberArr[0];

for(let index = 1; index < numberArr.length; index++){
    if (numberArr[index] > maxNo) {
        maxNo = numberArr[index]
    }
    console.log('The largest number is', maxNo);
}

let i = 1;
while ( i <= 10) {
    console.log(i);
    i++
}

let even = 2;
while(even < 20){
    console.log(even += 2)
}

let five = 5;

while(five < 50) {
    five += 5;
    console.log(five)
}

let doingWhile = 0;

do {
    doingWhile++
    console.log(doingWhile);
} while (doingWhile < 10);

let sumOfNumbers = 0;
do {
    sumOfNumbers += 1;
    sumOfNumbers++
    console.log(sumOfNumbers)

} while (sumOfNumbers < 100);


let input;

do {
    input = prompt('Enter a number that is greater than 10');
    if (input <= 10) {
        alert('The number that you entered is not greater than 10')
    }
} while ( input <= 10 );

alert('You entered a correct number')

let randomNumber = Math.floor(Math.random() * 10 + 1);

let userInput;

do {
    userInput = parseInt(prompt('Guess a number between 1 and 10'));

    if(userInput === randomNumber) {
        alert('You guessed the right number')
    } else {
        alert('That number is above the given numbers')
    }
} while ( userInput !== randomNumber );