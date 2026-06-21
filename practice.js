// hello!

// > greater than
// < less than
// let i = 0; i < str.length; i++
// let i = 0; i < arr.lenghtl i++
// let i = arr.length - 1; i >= 0; i-- // reverse
// let str = num.toString(); 

// Level 1: Basic Smallest Number
function smallestNumber(arr) {
    let smallest = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
} 

// Level 2: Smallest Number (with negatives)
function smallestNumberNegative(arr) {
    let smallestNegative = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallestNegative;
}


// Level 3: Smallest Even Number