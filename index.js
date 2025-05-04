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
    // Step 1: Start by setting `max` to the first number in the array
    let max = num[0];

    // console.log(num[0]);

    // Step 2: Loop through the array
    for (let i = 0; i < num.length; i++) {
        // Step 3: If the current number is greater than `max`, update `max`
        if (num[i] > max ) {
            max = num[i];
        }
        // Step 4: After the loop, print the largest number
    }
    console.log(`The Largest Number between ${num} is: ${max}`)
}

findLargestNumber();

function findLargestNumberVer2() {
    const num = [2, 3, 5, 21, 100, 230];
    console.log(Math.max(...num));
}

findLargestNumberVer2();

// Remove Duplicates from an Array
var arr = ["banana", "apple", "banana", "orange"];

function removeDuplicatesArray(data) {
    return data.filter((value, index ) => data.indexOf(value) === index);

    // value: Represents the current value of the element in the array (e.g., "banana", "apple").
    // index: Represents the current index of that value in the array (e.g., 0 for "banana", 1 for "apple").

    // data.indexOf(value): This returns the first index of the occurrence of the current value in the array.
    // index: This represents the current index in the loop provided by filter().
}

let result = removeDuplicatesArray(["banana", "apple", "banana", "orange", "melon"]);
console.log(result);

console.log(removeDuplicatesArray(arr));

// FizzBuzz

// Write a function that prints the numbers from 1 to 100. But for multiples of 3, 
// print "Fizz" instead of the number, and for the multiples of 5, print "Buzz". 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function FizzBuzz() {
    for (let i = 0; i <=100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz"); 
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

FizzBuzz();

// Find the Missing Number in an Array

var arr = [1, 2, 4, 5];

function findMissing(numbers) {
    // Step 1: Figure out what n is

    // Step 2: Get expected total sum
    // Step 3: Get actual sum from array
    // Step 4: Subtract and return the missing number
}

// 

function checkOddOrEvenPartNth() {
    for (let i = 0; i <=30; i++) {
        if (i % 2 === 1) {
            console.log(`The number ${i} is Even`);
        } else {
            console.log(`The number ${i} is Odd`);
        }
    }
}

checkOddOrEvenPartNth();

// countdown to birthday

function countdownToBirthday() {
  var countDownDate = new Date("Nov 8, 2025 15:37:25").getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();
    //console.log(now, countDownDate);

    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000); // This repeats the function every 1000 ms (1 second)
}

document.addEventListener("DOMContentLoaded", function () {
    countdownToBirthday();
});

// Level 1: Basics – Data Types & Parsing
// Problem: Parse and add values from strings.
// "15.5" + "4 cats" - should equal 19.
// "10" + "7.99 dogs" - should equal 17.99.

// Write a function that accepts two strings, parses any valid numbers, and adds them.

function parseAddValues() {
    var input1 = document.getElementById("value1").value;
    var input2 = document.getElementById("value2").value;
    
    // "number" is not a tag name — it’s the type of input.  
    // You should use getElementById("number") instead, since your input has an id="number".

    var num1 = parseFloat(input1);
    var num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2) ) {
        document.getElementById("result").innerText = "Invalid Input."
    } else {
        var sum = num1 + num2;
        document.getElementById("result").innerText = "Sum: " + sum;
    }
}

// Problem: Convert Celsius to Fahrenheit.
// Formula: F = (C × 9/5) + 32

// Create a function convertTemp(celsius) that returns Fahrenheit.

function convertTemp() {
    var celsius = parseFloat(document.getElementById("temp1").value);

    if (isNaN(celsius)) {
        document.getElementById("output").innerText = "Please enter a valid number!"
    } else {
        var fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("output").innerText = "Fahrenheit: " + fahrenheit.toFixed(1); // Show the Fahrenheit result rounded to 1 decimal place.
    }
}

// Problem: Write a function that takes a number and returns "Even" or "Odd".
// Example: 4 → "Even", 7 → "Odd"

function inputOddEven() {
    var input = document.getElementById("numberInput").value;
    var number1 = parseFloat(input);

    if (isNaN(number1)) {
        document.getElementById("answer").innerText = "Please enter a valid number!"
    } else if (number1 % 2 === 0) {
        document.getElementById("answer").innerText = `The number ${number1} is Even`
    } else {
        document.getElementById("answer").innerText = `The number ${number1} is Odd`
    }
}

function catAge() {
    var inputDate = document.getElementById("catInput").value;

    if (!inputDate) {
        document.getElementById("catAnswer").innerText = "Please enter a valid number!"
        return;
    }

    const conceptionDate = new Date(inputDate);
    const today = new Date;

    if (conceptionDate > today) {
        document.getElementById("catAnswer").innerText = "The date cannot be in the future.";
        return;
    }

    const diffTime = today - conceptionDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffYears = diffDays / 365.25;

    let humanAge; // string message

    if (diffYears => 1) {
        humanAge = Math.round(diffYears * 15); // 1st year
    } else if (diffMonths >= 1) {
        humanAge = 15 + Math.round((diffYears - 1) * 9); // 2nd year
    } else {
        humanAge = 24 + Math.round((diffYears - 2) * 4); // every year after
    }

    document.getElementById("catAnswer").innerText =
        `The cat is approximately ${Math.floor(diffYears)} cat year(s), which is about ${humanAge} human year(s).`;
}

// Problem: Create a function convertMinutes(minutes)
// that returns the number of hours and minutes.
// Example: 130 → "2 hour(s) and 10 minute(s)"

function convertMinutes() {
     var minutes = document.getElementById("minutesInput").value;
     var minutesConvert = parseFloat(minutes);

     let hours = Math.floor(minutesConvert / 60);
     let remainingMinutes = Math.floor(minutesConvert % 60); // Optional polish: You might round remainingMinutes to avoid decimals (if needed):
     
     if (isNaN(minutesConvert)) {
        document.getElementById("minutesAnswer").innerText = "Please enter a valid number!"
     } else if (minutesConvert >= 0) {
        document.getElementById("minutesAnswer").innerText = `${hours} hour(s) and ${remainingMinutes} minute(s)`;
     } else {
        document.getElementById("minutesAnswer").innerText = "Please enter a valid number!"
     }
}

