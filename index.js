console.log("hello world!") 

function checkOddOrEven(n) {
    if ((n & 1) === 1) {
        return "Number is Odd"
    }
    return "Number is even";
}

function checkOddOrEvenbyModulo(number) {
    if (number % 2 === 1) {
        return "Number is Odd"; 
    }
    return "Number is even"
}

let numbers = [5, -2, 4, 5, -10]

numbers.forEach(function(number) {
    if (number % 2 === 1) {
        console.log(`The number ${number} is Even`);
    } else {
        console.log(`The number ${number} is Odd`);
    }
});

console.log(checkOddOrEvenbyModulo(12));
console.log(checkOddOrEven(1));

// Reverse a String
let example = "hello";

const ans = example.split('').reverse().join('');
console.log(ans);

// Sum of Array
function sumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
};

const numbersArray = [1, 2, 3, 4, 5];
console.log(sumOfArray(numbersArray));

// Print Numbers from 1 to 10
function numbersOneToTen() {
    let output = ' ';
    for (let i = 0; i <= 10; i++) {
        output += i + ' ';
    }
    console.log(output.trim()); // trimming the last space
}
numbersOneToTen();

// Count Down
function countDownBlastOff() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
    console.log("Blast Off!");
};

countDownBlastOff();  // Call the function

function printIfEvenOrOdd() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 1 ) {
            console.log(`The ${i} is Odd`)
        } else {
            console.log(`The ${i} is Even`)
        }
    }
}

printIfEvenOrOdd();

// multiplication table

function multiplicationTable() {
    const value = 5;
    for (let i = 1; i <=10; i++) {
        let multiply = value * i;
        console.log( `${value} * ${i} = ${multiply}`)
    }
}

multiplicationTable();

function multiplicationOnetoTen() {
    for (let a = 1; a <= 10; a++) {
        for (let b = 1; b <= 10; b++) {
            let multiply = a * b;
            console.log(` ${a} * ${b} = ${multiply}`)
        }
        console.log("");
    }
}

multiplicationOnetoTen();

function printATriangle() {
    for (let i = 1; i <= 5; i++ ) {
        console.log('*'.repeat(i));
    }
}

printATriangle();

function findLargestNumber() {
    let num = [2, 3, 4, 10, 30];
    // let max = Math.random(Math.random() * 100);
    let max = num[0];

    for (let i = 0; i < num.length; i++) {
        console.log(num[i]);
        if (max >= num[i]) {
        }
        console.log(`The variable Max ${max} is greater than ${num[i]}`);
    }
}

findLargestNumber();

function findLargestNumberVer2() {
    const num = [2, 3, 5, 21, 100, 230];
    console.log(Math.max(...num));
}

findLargestNumberVer2();