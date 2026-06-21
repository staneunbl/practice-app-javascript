// ============================================================
//  WRITTEN EXAM PRACTICE
//  Topics: Programming Logic, CRUD, MVC, SQL Joins,
//          OOP, Database Normalization, Modern Tech, Foundations
// ============================================================


// ============================================================
//  SECTION 1: FOUNDATIONS
// ============================================================

// Q1. What are the 5 primitive data types in JavaScript?
//     Write them and give one example of each.

//     Answer:
//     1. INTEGER - byte
//     2. FLOAT - 32.3
//     3. CHAR ""
//     4. BOOLEAN = true / false
//     5. STRING ?? = "hello"


// Q2. What is the difference between var, let, and const?
//     Which one should you use most of the time and why?

//     Answer:
// var: function scoped = cannot be accessed outside the function
// can be re-declared and updated.
    var greeter = "hey hi";
    var greeter = "say Hello instead";

    var greeter1 = "hello"
    greeter1 = "hi hello instead"

    // hoisted =  where variables and function declarations are moved to the top of their scope 
    var greeter;
    console.log(greeter); // greeter is undefined
    greeter = "say hello"
    

// let: block scoped = A block is a chunk of code bounded by {}.
// can be updated / re-assign but not re-declared
    // let greeting3 = "say Hi";
    // let greeting3 = "say Hello instead"; // error: Cannot redeclare block-scoped variable 'greeting3'.ts(2451)
    let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // "say Hello instead"
    }
    console.log(greeting); // "say Hi"
    // block scoped {.  }

// const :  block scoped also ; cannot be reassigned ; cannot be updated or re-declared

// Q3. What is the difference between == and ===?
//     Give an example where they produce different results.

//     Example:
//     console.log(0 == false);   // ? loose equality -- 
//     console.log(0 === false);  // ? strict equality -- VALUE AND TYPE ; number =/ string
//     Why?
    // const greeting = "say Hi";
    // greeting = "say Hello instead";// error: Assignment to constant variable.

// Q4. What is a function? Write a function called greet
//     that accepts a name and returns "Hello, <name>!".

function greet(name) {
    // let name = "";
    return `Hello, ${name}!`;
}

console.log(greet("shayyanne"))

// Q5. What is scope? Explain the difference between
//     global scope and local scope. Give a short code example.

//     Answer:


// ============================================================
//  SECTION 2: PROGRAMMING LOGIC
// ============================================================

// Q6. Create a function that accepts an array of integers
//     and returns the SMALLEST number.
//     Do NOT use Math.min() — use a loop.
//     Example: [10, 5, 20, 2, 15] → 2

function getSmallest(arr) {
    let smallest = arr[0]; // assume first element is the smallest

    // loop through all elements in the array
    for (let i = 0; i < arr.length; i++) {
        // check if current number is smaller than the smallest we have
        if (arr[i] < smallest) {
            // update smallest with the new smaller value
            smallest = arr[i];
        }
    }

    // return the smallest number found
    return smallest;
}

// Q7. Create a function that accepts an array of integers
//     and returns the LARGEST number. Use a loop.
//     Example: [3, 7, 1, 9, 4] → 9

function getLargest(arr) {
    let largest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Q8. Write a function that checks if a number is prime.
//     A prime number is only divisible by 1 and itself.
//     Example: 7 → true, 6 → false

function isPrime(num) {
    if (num > 2) return false;

    for (let i = 2; i < num; i++) { // checking if divisible by 2
        if (num % i === 1){
            return false;
        }
    }
    return true;
}

// Q9. FizzBuzz — a classic exam question.
//     Write a function that loops 1 to 100.
//     - Print "Fizz" if divisible by 3
//     - Print "Buzz" if divisible by 5
//     - Print "FizzBuzz" if divisible by BOTH
//     - Otherwise print the number

function fizzBuzz() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FIXX BUZZ") ;
        } else if (i % 3 == 0) {
            console.log("FIZZ");
        } else if (i % 5 === 0) {
            console.log("BUZZ");
        } else {
            console.log(i);
        }
    }
}


// Q10. Find the missing number in an array.
//      The array contains numbers 1 to n, with one missing.
//      Example: [1, 2, 4, 5] → 3
//      Hint: sum of 1 to n = n * (n + 1) / 2

function findMissingNumber(arr) {
    let missing = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== missing) { // compare if there is a matching value
            missing.push(arr[i]); // push the matching
        }
    }
    return missing;
}


// Q11. Count how many times a specific value appears in an array.
//      Example: countOccurrences([1, 2, 2, 3, 2], 2) → 3

function countOccurrences(arr, value) {
    let count = 0;
    // let value = 0;

    for(let i = 0; i < arr.length; i++){
        if (arr[i] === value) {
        // if(value.includes(arr[i])){
            count++;
        }
    }
    return count;
}


// Q12. Reverse a string WITHOUT using .reverse().
//      Example: "hello" → "olleh"

function reverseString(str) {
    let reversed = "";

    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}


// ============================================================
//  SECTION 3: OOP (Object-Oriented Programming)
// ============================================================

// Q13. What are the 4 pillars of OOP?
//      Write a one-sentence definition of each.

//      1. Encapsulation:
//      2. Inheritance:
//      3. Polymorphism:
//      4. Abstraction:


// Q14. Create a class called Animal with:
//      - A constructor that accepts name and sound
//      - A method called speak() that logs "<name> says <sound>"
//      Then create a subclass Dog that:
//      - Extends Animal
//      - Has a fetch() method that logs "<name> fetches the ball!"
//      Instantiate a Dog and call both methods.

class Animal {
    // your code here
}

class Dog extends Animal {
    // your code here
}

// const myDog = new Dog("Rex", "Woof");
// myDog.speak();   // Rex says Woof
// myDog.fetch();   // Rex fetches the ball!


// Q15. What is the difference between a class and an object?
//      Answer: 


// Q16. What does "this" refer to inside a class method?
//      Answer: value of the object. 


// ============================================================
//  SECTION 4: CRUD
// ============================================================

// Q17. What does CRUD stand for? Match each letter to
//      its SQL equivalent command.
//
//      C → CREATE   = SQL: ?
//      R → READ     = SQL: ?
//      U → UPDATE   = SQL: ?
//      D → DELETE   = SQL: ?


// Q18. Write the SQL for each CRUD operation on a table
//      called "users" with columns: id, name, email
//
//      CREATE (insert a new user):


//      READ (get all users):


//      UPDATE (change email where id = 1):


//      DELETE (remove user where id = 1):


// Q19. In a REST API, what HTTP methods map to CRUD?
//
//      CREATE  →
//      READ    →
//      UPDATE  →
//      DELETE  →


// ============================================================
//  SECTION 5: MVC (Model-View-Controller)
// ============================================================

// Q20. What does MVC stand for? Define each part in one sentence.

//      M - Model:
//      V - View:
//      C - Controller:


// Q21. A user submits a login form. Describe the flow
//      through MVC step by step.

//      Step 1 (View):
//      Step 2 (Controller):
//      Step 3 (Model):
//      Step 4 (back to View):


// Q22. Why do developers use MVC?
//      Name at least 2 benefits.

//      Answer:


// Q23. In an Express.js app, which file/folder typically
//      represents each part of MVC?
//      (Think: routes, controllers, models, views/templates)

//      Model     → usually in:
//      View      → usually in:
//      Controller → usually in:


// ============================================================
//  SECTION 6: SQL TABLE JOINS
// ============================================================

// Given these two tables:
//
// TABLE: users              TABLE: orders
// +----+--------+           +----+---------+-----------+
// | id | name   |           | id | user_id | product   |
// +----+--------+           +----+---------+-----------+
// |  1 | Alice  |           |  1 |    1    | Laptop    |
// |  2 | Bob    |           |  2 |    1    | Phone     |
// |  3 | Carol  |           |  3 |    2    | Tablet    |
// +----+--------+           +----+---------+-----------+
//                           Note: Carol (id=3) has no orders.


// Q24. Write an INNER JOIN query to get all users who have orders.
//      Expected result: Alice (2 rows), Bob (1 row) — Carol excluded.

//      SQL:


// Q25. Write a LEFT JOIN query to get ALL users, even those
//      with no orders. Carol should appear with NULL for product.

//      SQL:


// Q26. What is the difference between INNER JOIN and LEFT JOIN?

//      Answer:


// Q27. Write a query that counts how many orders each user has.
//      Hint: use GROUP BY and COUNT()

//      SQL:


// ============================================================
//  SECTION 7: DATABASE NORMALIZATION
// ============================================================

// Q28. What is database normalization and why do we do it?

//      Answer:


// Q29. Explain 1NF (First Normal Form).
//      What rule must a table follow to be in 1NF?

//      Answer:


// Q30. This table violates 1NF. Why?
//
//      +----+--------+---------------------+
//      | id | name   | phone_numbers       |
//      +----+--------+---------------------+
//      |  1 | Alice  | 0912, 0917          |
//      |  2 | Bob    | 0918                |
//      +----+--------+---------------------+
//
//      Problem:
//      How to fix it:


// Q31. Explain 2NF (Second Normal Form).
//      What additional rule does 2NF add on top of 1NF?

//      Answer:


// Q32. Explain 3NF (Third Normal Form).
//      What rule does 3NF add on top of 2NF?
//      Hint: think about "transitive dependency"

//      Answer:


// Q33. What is a PRIMARY KEY? What is a FOREIGN KEY?
//      Give a real-world example of both.

//      Primary Key:
//      Foreign Key:
//      Example:


// ============================================================
//  SECTION 8: MODERN TECHNOLOGIES
// ============================================================

// Q34. What is a REST API?
//      What does REST stand for and what makes an API "RESTful"?

//      Answer:


// Q35. What is JSON? Write a JSON object representing a user
//      with id, name, and email fields.

//      Answer:
//      {
//
//      }


// Q36. What is Git? Name and describe 3 common Git commands
//      you use regularly.

//      Answer:
//      1.
//      2.
//      3.


// Q37. What is npm? What does package.json do?

//      Answer:


// Q38. Name one frontend framework/library and one backend
//      framework you know. What does each one do?

//      Frontend:
//      Backend:


// Q39. What is the difference between synchronous and
//      asynchronous code? Give a real-world analogy.

//      Answer:


// Q40. What is a Promise in JavaScript?
//      Write a simple example that resolves with "Done!".

//      Answer:
const myPromise = new Promise((resolve, reject) => {
    // your code here
});
