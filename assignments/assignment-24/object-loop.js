//1. Creating User Profiles:
// Explanation: In this problem, we have a userProfile object that contains properties such as name, age, email, and isAdmin. The task is to create a function printUserProfile that iterates over the userProfile object and prints all the properties and their corresponding values. This allows us to examine each property of the object.

function printUserProfile(userProfile) {
    for (const key in userProfile) {
        console.log(`${key}: ${userProfile[key]}`);
    }
}

const userProfile = {
    name: "Jane Doe",
    age: 28,
    email: "jane@example.com",
    isAdmin: false
};
printUserProfile(userProfile);

// 2. Updating Inventory:
// Explanation: We have an inventory object that holds items as keys and their quantities as values. The function addStock takes two arguments - the original inventory object and a newInventory object. The function updates the quantities of the items in the original inventory based on the new inventory. This helps keep the inventory count updated.

function addStock(inventory, newInventory) {
    for (const key in newInventory) {
        if (key in inventory) {
            inventory[key] += newInventory[key];
        } else {
            inventory[key] = newInventory[key];
        }
    }
    return inventory;
}

const inventory = { apple: 5, banana: 3, orange: 2 };
const newInventory = { banana: 2, orange: 3, peach: 5 };
console.log(addStock(inventory, newInventory));

// 3. Filtering Properties:

// Explanation: The filterData function takes an object and a key as parameters and returns an object with only the specified key-value pair. This function can be used when we are only interested in a specific piece of data from an object.

function filterData(object, key) {
    return { [key]: object[key] };
}
console.log(
    filterData(
        {
            city: "Los Angeles",
            state: "California",
            country: "USA",
            pincode: "90001"
        },
        "city"
    )
);

// 4. Checking the Perfect Score:

// Explanation: In this problem, we have an array of objects, where each object represents a student and has properties name and score. The perfectScore function checks each student's score and returns true if anyone has a score of 100, otherwise false. This function helps to quickly identify if anyone has achieved the perfect score.
function perfectScore(students) {
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.score === 100) {
            return true;
        }
    }
    return false;
}

console.log(
    perfectScore([
        { name: "John", score: 98 },
        { name: "Jane", score: 100 },
        { name: "Bob", score: 95 }
    ])
);

// 5. Counting Occurrences:
// Explanation: The countOccurrence function accepts a string and returns an object where each unique character from the string is a key and its number of occurrences in the string is the value. This function helps to count the frequency of characters in a given string.

function countOccurrence(string) {
    let count = {};
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }
    return count;

    // let mostUsedChar = ""
    // for (const key in count) {
    //     if(count[key] > mostUsedChar) {
    //         mostUsedChar = count[key]
    //     }
    // }
    // return mostUsedChar;
}
console.log(countOccurrence("banana"));

// 6. Calculating Average Score:
// Explanation: In this problem, you are provided an object where each key is a student's name and the corresponding value is an array of their scores. The averageScore function should calculate the average score for each student and return a new object where the keys are the student names and the values are their average scores. This function is useful to analyze the average performance of each student.

function averageScore(scores) {
    let totalScore = 0;
    for (let i = 0; i < scores.length; i++) {
        const score = scores[key];
        totalScore += score;
    }
    return totalScore / scores.length;
}
console.log(averageScore({ John: [85, 90, 75], Jane: [92, 88, 90] }));

// 7. Finding Largest Number:
// Explanation: The findLargest function should accept an object where each key-value pair represents a person and their respective age. The function should return the name of the person with the highest age. This is useful to find out who is the oldest among a group of people.
function findLargest(ages) {
    let people = {
        oldest: "",
        maxAge: 0
    };
    for (const key in ages) {
        if (ages[key] > people.maxAge) {
            people.maxAge = ages[key];
            people.oldest = key;
        }
    }
    return people;
}

console.log(findLargest({ John: 30, Jane: 32, Bob: 28 }));
// 8. Reversing Key-Value Pairs:
// Explanation: The reverseKeyValue function takes an object and returns a new object where the keys become values and the values become keys. This can be used when you want to swap the keys and values of an object.

function reverseKeyValue(object) {
    let reversed = {};
    for (let key in object) {
        reversed[object.key] = key;
    }
    return reversed;
}
console.log(reverseKeyValue({ name: "John", age: 30 }));

// 9. Counting Boolean Values:
// Explanation: The countBooleans function takes an array of boolean values and returns an object that shows the count of true and false values. This function can be used to analyze the distribution of boolean values in a dataset.
function countBooleans(array) {
    let booleans = {
        trues: 0,
        falses: 0
    };
    for (const key in array) {
        if (array[key] === true) {
            booleans.trues++;
        } else {
            booleans.falses++;
        }
    }
    return booleans;
}
console.log(countBooleans([true, false, true, true, false]));

// 10. Calculating Total Price:
// Explanation: You are given an object where each key is an item and its corresponding value is the price. The function calculateTotal takes the object and an array of items and calculates the total price of these items. This function can be used to calculate the total cost of selected items.

function calculateTotal(prices, items) {
    let total = 0;
    for (let key of items) {
        total = total + prices[key];
    }
    return total;
}

console.log(
    calculateTotal({ apple: 1, banana: 0.5, orange: 0.75 }, ["apple", "banana"])
);
console.log(
    calculateTotal({ apple: 1, banana: 0.5, orange: 0.75 }, [
        "orange",
        "orange",
        "banana"
    ])
);
