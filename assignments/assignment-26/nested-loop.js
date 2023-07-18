// 1. Character Pairing: Write a function that accepts a string and returns all possible pairs of characters in the input string. For this, use a nested loop to go through each possible pair of characters.
// Input: "abc"
// Expected output: ['ab', 'ac', 'bc']

function characterPairs(str) {
    let pairs = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            pairs.push(str[i] + str[j]);
        }
    }
    return pairs;
}
// console.log(characterPairs("abc"));

// 2. Divisible by Three Pair Sum: Create a function divisibleByThreePairSum(array) that takes an array of numbers as input. It should return an array of all the pairs of indices, where the elements sum to a multiple of three. This task will require a nested loop to go through each possible pair of numbers.
// Input: [1, 2, 3, 4, 5]
// Expected output: [[0, 1], [1, 3], [0, 4], [3, 4]]

function divisibleByThreePairSum(array) {
    let indicesPairs = [];
    for (let i = 0; (i = array.length); i++) {
        for (let j = i + 1; (j = array.length); j++) {
            if ((array[i] + array[j]) % 3 === 0) {
                indicesPairs.push([i, j]);
            }
        }
    }
    return indicesPairs;
}
// console.log(divisibleByThreePairSum([1, 2, 3, 4, 5]));

// 3. Sum of Pairs: Construct a function that takes an array and a target sum as inputs. The function should return all pairs of numbers in the array that sum up to the target. A nested loop will be necessary to examine all possible pairs of numbers.
// ([1, 2, 3, 4, 5], 5)
// Expected output: [[1, 4], [2, 3]]

function sumOfPairs(arr, sum) {
    let pairOfNum = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                pairOfNum.push([arr[i], arr[j]]);
            }
        }
    }
    return pairOfNum;
}
// console.log(sumOfPairs([1, 2, 3, 4, 5], 5));

// 4. Check Prime: Design a function that receives a number as input and checks if it is a prime number. This task will require a loop to check all numbers up to the number of the input number to see if they divide the input number evenly.

function checkPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(checkPrime(7)); // Expected output: true
// console.log(checkPrime(4)); // Expected output: false

// 5. Prime Range: Generate a function that accepts a range (two numbers) as input and returns an object. The object should contain the keys primes (an array of all prime numbers in the range) and count (the total number of prime numbers in the range). This task will require nested loops; an outer loop to iterate through the range, and an inner loop (within the checkPrime function) to check if a number is prime.
// Input: ([10, 20])
// Expected output: {primes: [11, 13, 17, 19], count: 4}
function primeRange(range) {
    let primes = [];
    let counter = 0;

    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    for (let j = range[0]; j <= range[1]; j++) {
        if (isPrime(j)) {
            primes.push(j);
            counter++;
        }
    }

    return { primes, count: counter };
}
console.log(primeRange([10, 20]));

// 6. All Substrings: Write a function that takes a string as an input and returns an array of all its substrings.

// Input: ('abc'));
// Expected output: ['a', 'ab', 'abc', 'b', 'bc', 'c']

function allSubstrings(string) {
    let substringsArr = [];
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j <= string.length; j++) {
            substringsArr.push(string.slice(i, j));
        }
    }
    return substringsArr;
}
console.log(allSubstrings("abc"));
