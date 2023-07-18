// 1. Find the Maximum Number
// Write a function that takes an array of arrays as input and finds the maximum number in the nested arrays. Return the maximum number found.

function findMaxNumber(arr) {
    let maxNumber = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > maxNumber) {
                maxNumber = arr[i][j];
            }
        }
    }
    return maxNumber;
}
// console.log(findMaxNumber([([1, 2, 3], [4, 5, 6], [7, 8, 9])]));

// 2. Count Characters
// Write a function that takes an array of arrays of characters as input. Count the occurrences of each character and return an object with character counts in the format { character: count }.
// const arrayOfArrays = [['a', 'b', 'c'], ['a', 'b', 'c', 'a']];
// console.log(countCharacterOccurrences(arrayOfArrays));
function countCharacters(arr) {
    let charCounts = {};
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const char = arr[i][j];
            if (charCounts[char]) {
                charCounts[char]++;
            } else {
                charCounts[char] = 1;
            }
        }
    }
    return charCounts;
}
console.log(
    countCharacters([
        ["a", "b", "c"],
        ["a", "b", "c", "a"]
    ])
);

// 3. Filter Divisible Numbers
// Write a function that takes an array of arrays of numbers as input. Create a new array that contains only the numbers divisible by 3 from the nested arrays. Return the new array.
// Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: [3, 6, 9]
function filterDivisibleNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 3 === 0) {
                result.push(arr[i][j]);
            }
        }
    }
    return result;
}
console.log(
    filterDivisibleNumbers([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
);

// 4. Find the Longest String
// Write a function that takes an array of arrays of strings as input. Find the longest string among the nested arrays and return it.
function longestString(arr) {
    let longest = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j].length > longest.length) {
                longest = arr[i][j];
            }
        }
    }
    return longest;
}

console.log(
    longestString([
        ["apple", "banana"],
        ["carrot", "date", "eggplant"],
        ["fig"]
    ])
);

// Part 5: Sum of Numbers (including nested arrays)
// Write a function that takes an array as input. The array may contain numbers and/or nested arrays of numbers. Find the sum of all the numbers, including the numbers in the nested arrays. Use Array.isArray() to check if a passed value is an array.
// Input: [1, 2, [3, 4, 5, 6], 7, [8, 9]]
// Output: 45
function sumOfNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                if (Array.isArray(arr[i][j])) {
                    for (let k = 0; k < arr[i][j].length; k++) {
                        sum += arr[i][j][k];
                    }
                } else if (typeof arr[i][j] === "number") {
                    sum = sum + arr[i][j];
                }
            }
        } else if (typeof arr[i] === "number") {
            sum = sum + arr[i];
        }
    }
    return sum;
}
console.log(sumOfNumbers([1, 2, [3, 4, 5, 6], 7, [8, 9]]));

// 6. Capitalize Strings
// Write a function that takes an array of arrays of lowercase strings as input. Return a new nested array with all the strings capitalized.
// Input: [['apple', 'banana'], ['carrot', 'date'], ['eggplant']]
// Output: [['APPLE', 'BANANA'], ['CARROT', 'DATE'], ['EGGPLANT']]

function capitalizaString(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let innerArr = [];
        for (let j = 0; j < arr[i].length; j++) {
            innerArr.push(arr[i][j].toUpperCase());
        }
        newArr.push(innerArr);
    }
    return newArr;
}
console.log(
    capitalizaString([["apple", "banana"], ["carrot", "date"], ["eggplant"]])
);

// 7. Find Minimum and Maximum Arrays
// Write a function that takes an array of arrays as input. Return an object with two keys: 'min' and 'max'. The 'min' key should have the value of the inner array with the smallest sum, and the 'max' key should have the value of the inner array with the largest sum.
// Input: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
// Output: { min: [4, 5], max: [6, 7, 8, 9] }

function minAndMaxArr(arr) {
    let minSum = 0;
    let maxSum = 0;
    let minArr = [];
    let maxArr = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
        if (sum < minSum) {
            minSum = sum;
            minArr = [arr[i]];
        }

        if (sum > maxSum) {
            maxSum = [arr[i]];
        } else if (sum === maxSum) {
            maxArr.push(arr[i]);
        }
    }
    return { min: minArr, max: maxArr };
}
console.log(
    minAndMaxArr([
        [1, 2, 3],
        [4, 5],
        [6, 7, 8, 9]
    ])
);

// 8. Merge Nested Arrays
// Write a function that takes an array of arrays as input. Merge the nested arrays into a single array, maintaining the order of the nested arrays. Return the merged array.
// Input: [[1, 2], [3, 4], [5, 6]]
// Output: [1, 2, 3, 4, 5, 6]
function mergeArray(arr) {
    let mergedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mergedArray.push(arr[i]);
    }
    return mergedArray;
}
console.log(
    mergeArray([
        [1, 2],
        [3, 4],
        [5, 6]
    ])
);
