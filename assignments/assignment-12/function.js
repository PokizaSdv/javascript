// 1. Create a function named lengthOfString. It takes a string as a parameter and returns the length of the string.

function lengthOfString(str) {
    var result = str.length;
    return result;
}

// 2. Create a function named concatenateStrings. It takes two strings as parameters and returns a new string that is a combination of both.

function concatenateStrings(str1, str2) {
    var result = str1 + str2;
    return result;
}

// 3. Create a function named toUpperCase. It takes a string as a parameter and returns a new string converted to uppercase.

function toUpperCase(str) {
    var result = str.toUpperCase();
    return result;
}

// 4. Create a function named toLowerCase. It takes a string as a parameter and returns a new string converted to lowercase.

function toLowerCase(str) {
    var result = str.toLowerCase();
    return result;
}

// 5. Create a function named findSubstring. It takes a string and a substring as parameters, and returns a boolean value indicating if the string contains the substring.

function findSubstring(str, sub) {
    var result = str.includes(sub);
    return result;
}

// 6. Create a function named replaceSubstring. It takes a string and two substrings as parameters, replaces the first substring with the second substring in the string, and returns the resulting string.

function replaceSubstring(str, oldSub, newSub) {
    var result = str.replace(oldSub, newSub);
    return result;
}

// 7. Create a function named charAtPosition. It takes a string and a position as parameters and returns the character at the given position in the string.

function charAtPosition(str, position) {
    var result = str.charAt(position);
    return result;
}
// 8. Create a function named trimString. It takes a string as a parameter, removes leading and trailing whitespace from the string, and returns the resulting string.

function trimString(str) {
    var result = str.trim();
    return result;
}

// 9. Create a function named stringStartsWith. It takes a string and a substring as parameters, and returns a boolean value indicating if the string starts with the substring.

function stringStartsWith(str, sub) {
    var result = str.startsWith(sub);
    return result;
}

// 10. Create a function named stringEndsWith. It takes a string and a substring as parameters, and returns a boolean value indicating if the string ends with the substring.

function stringEndsWith(str, sub) {
    var result = str.endsWith(sub);
    return result;
}

// 11. Create a function named convertStringToNumber. It takes a string as a parameter, converts the string to a number, and returns the resulting number.

function convertStringToNumber(str) {
    var result = parseInt(str);
    return result;
}

// 12. Create a function named sliceString. It takes a string and two numbers representing the start and end positions as parameters, and returns a new string that includes characters from the start to the end position.

function sliceString(str, start, end) {
    var result = str.slice(start, end);
    return result;
}

// 13. Create a function named concatenateAndToUpper. It takes two strings as parameters, concatenates them, converts the resulting string to uppercase, and returns the result.

function concatenateAndToUpper(str1, str2) {
    var result = str1.concat(str2).toUpperCase();
    return result;
}
