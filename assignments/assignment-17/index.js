// 1. Write a function findCharFrequency that accepts a string and a character as arguments. This function should iterate through the string using a for loop and count the frequency of the specified character, then return this count.
function findCharFrequency(str, char) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            counter++;
        }
    }
    return counter;
}
console.log(findCharFrequency("Hello, world", "o"));

// 2. Create a function vowelCounter that takes in a string and returns the count of vowels in it.
function vowelCounter(string) {
    var vowels = "aouie";
    var counter = 0;
    for (i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            counter++;
        }
    }
    return counter;
}
console.log(vowelCounter("beautiful"));

// 3. Create a function isAlphaNumeric that checks whether a given string only contains English letters and digits.

function isAlphaNumeric(string) {
    var englishLettersDigits =
        "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz123456789";
    for (var i = 0; i < string.length; i++) {
        if (!englishLettersDigits.includes(string[i])) {
            return false;
        }
    }
    return true;
}
console.log(isAlphaNumeric("hello123"));
console.log(isAlphaNumeric("hello-123"));

// 4. Write a function isAllVowels that verifies if a string consists only of vowel characters.
function isAllVowels(string) {
    var cons = "qwrtypsdfghjklxczvbnm";
    for (var i = 0; i < string.length; i++) {
        if (cons.includes(string[i])) {
            return false;
        }
    }
    return true;
}
console.log(isAllVowels("oiuea"));
console.log(isAllVowels("oiuyea"));

// 5. Construct a function capitalizeVowels that changes all vowels in a lowercase string to uppercase.
function capitalizeVowels(string) {
    var result = "";
    var vowels = "aeoiu";
    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        if (vowels.includes(char)) {
            result = result + char.toUpperCase();
        } else {
            result = result + char;
        }
    }
    return result;
}
console.log(capitalizeVowels("hello"));

// 6. Build a function sliceFromFirstVowel that returns a substring starting from the first vowel to the end of the original string.

function sliceFromFirstVowel(string) {
    var vowels = "aeoiu";
    for (var i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            return string.slice(i);
        }
    }
    return "There is no vowels in the string";
}

console.log(sliceFromFirstVowel("javascript"));

// 7. Create a function areConsonantsMore that returns true if the number of consonants in a string is higher than the number of vowels.

function areConsonantsMore(string) {
    var counterVowels = 0;
    var counterCons = 0;
    var vowels = "aeuio";
    var cons = "qwrtypsdfghjklzxcvbnm";
    for (i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            counterVowels++;
        } else {
            counterCons++;
        }
    }
    return counterVowels < counterCons;
}
console.log(areConsonantsMore("javascript"));

// 8. Implement a function doubleVowels that doubles all the vowels in a given string.
function doubleVowels(string) {
    var result = "";
    var vowels = "aeuio";
    for (i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            result = result + string[i] + string[i];
        } else {
            result = result + string[i];
        }
    }
    return result;
}
console.log(doubleVowels("hello"));

// 9. Write a function sumDigits that takes any valid integer and returns the sum of its digits.
function sumDigits(num) {
    var total = 0;
    var strNum = String(num);
    for (var i = 0; i < strNum.length; i++) {
        total = total + parseInt(strNum[i]);
    }
    return total;
}

console.log(sumDigits(6789));

// 10. Create a function preserveLetters that takes a string of a single word and returns a new string with all characters except letters removed.

function preserveLetters(str) {
    var englishLetters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (englishLetters.includes(str[i])) {
            result = result + str[i];
        }
    }
    return result;
}
console.log(preserveLetters("fruits/25"));
