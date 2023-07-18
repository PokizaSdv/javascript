// Function 1: compareCharCount
/*
Instruction: Create a function named compareCharCount that takes two strings and a character as input. 
This function should return true if the character count is equal in both strings, and false otherwise.
*/

function compareCharCount(str1, str2, char) {
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === char) {
            count1++;
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === char) {
            count2++;
        }
    }
    return count1 === count2;
}
console.log(compareCharCount("Hello", "World", "l")); // should return false
console.log(compareCharCount("Hello", "World", "o")); // should return true
console.log(compareCharCount("Hello", "Allo", "l")); // should return true
console.log(compareCharCount("Hello", "Allo", "o")); // should return true
console.log("----------------------------------");

// Function 2: isGreaterOrEqual
/*
Instruction: Create a function named isGreaterOrEqual that takes a number up to 10 (inclusive) as an input. 
This function should generate a random number up to 10 (inclusive) and return true if the generated number 
is less than or equal to the input number, and false otherwise.
*/
function isGreaterOrEqual(num) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (num >= randomNumber) {
        return true;
    }
    return false;
}
console.log(isGreaterOrEqual(5)); // could return true or false
console.log(isGreaterOrEqual(7)); // could return true or false
console.log(isGreaterOrEqual(2)); // could return true or false
console.log(isGreaterOrEqual(9)); // could return true or false
console.log("----------------------------------");

// Function 3: isPalindrome
/*
Instruction: Create a function named isPalindrome that takes a string as an input. 
The function should return true if the string is a palindrome, and false otherwise. 
String is one word string. Do not use array reverse method or do not create another string or array.
level l == l e === e l === l e ===e
*/
function isPalindrome(string) {
    let left = 0;
    let right = string.length - 1;
    for (let i = 0; i < Math.floor(string.length / 2); i++) {
        if (string[left] !== string[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("madam")); // should return true
console.log(isPalindrome("hello")); // should return false
console.log(isPalindrome("level")); // should return true
console.log(isPalindrome("world")); // should return false
console.log("----------------------------------");

// Function 4: reverseArrayInPlace
/*
Instruction: Create a function named reverseArrayInPlace that takes an array as an input. 
This function should return the given array, but reversed in place. Do not use array reverse method, 
do not create another array.
*/

function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return arr;
}
console.log(reverseArrayInPlace([5, 2, 3, 4, 1])); // should return [5, 4, 3, 2, 1]
console.log(reverseArrayInPlace([6, 7, 8, 9, 10])); // should return [10, 9, 8, 7, 6]
console.log(reverseArrayInPlace(["a", "b", "c", "d", "e"])); // should return ['e', 'd', 'c', 'b', 'a']
console.log("----------------------------------");

// Function 5: removeDuplicates
/*
Instruction: Create a function named removeDuplicates that takes an array of numbers as an input. 
This function should return a new array that has all duplicates removed. Do not use indexOf or includes methods of string/array
*/
function removeDuplicates(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i] + 1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // should return [1, 2, 3, 4, 5]
console.log(removeDuplicates([6, 7, 7, 8, 9, 9, 10])); // should return [6, 7, 8, 9, 10]
console.log(removeDuplicates(["a", "a", "b", "b", "c", "c", "d", "d"])); // should return ['a', 'b', 'c', 'd']
console.log("----------------------------------");

// Function 6: areAnagrams
/*
Instruction: Create a function named areAnagrams that takes two equal length strings as inputs. 
The function should return true if the two strings are anagrams of each other (i.e., if the second string 
can be created by rearranging the letters of the first string), and false otherwise.
*/
function areAnagrams(str1, str2) {
    // Sort the characters of both strings
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("listen", "silent")); // should return true
console.log(areAnagrams("hello", "world")); // should return false
console.log(areAnagrams("elbow", "below")); // should return true
console.log(areAnagrams("apple", "papel")); // should return true
