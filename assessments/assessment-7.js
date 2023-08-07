// Create a function that takes an array of student object.

function StraightAStudents(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (
            arr[i].grades[0] === "A" &&
            arr[i].grades[1] === "A" &&
            arr[i].grades[2] === "A"
        ) {
            counter++;
        }
    }
    return counter;
}
let arr = [
    { name: "Ali", grades: ["A", "C", "C"] },
    { name: "Durdona", grades: ["C", "C", "C"] },
    { name: "Asilbek", grades: ["A", "A", "A"] }
];
console.log(StraightAStudents(arr));

// Create a function that takes an object({name: age:}) and return the average age of students
//{a: 12, b:34, c:56};

function averageAge(obj) {
    let totalAge = 0;
    //let studentCount = 0;
    for (const key in obj) {
        const age = obj[key];
        totalAge = totalAge + age;
        // studentCount ++;
    }
    const studentCount = Object.keys(obj).length;

    return totalAge / studentCount;
}
console.log(averageAge({ a: 12, b: 34, c: 56 }));

// Create a function that takes the same size(length) two arrays. Return true if both arrays are structural same. Return true if both arrays are the same;

function sameArray(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
console.log(sameArray([1, 2, 3], [1, 2, 3]));
console.log(sameArray([1, 2, 3], [1, 2, 4]));

// Create a function that takes two objects (it can be different size), check if both objects are structural same.
// Input: {a:1, b:2, c:5} {c:5, b:2, a:1}, Output: true
// Input: {a:1, b:2, d:5} {a:1, b:2, d: 4}, Output: false

function sameObj(obj1, obj2) {
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    for (let key in obj2) {
        if (obj2[key] !== obj1[key]) {
            return false;
        }
    }
    return true;
}
console.log(sameObj({ a: 1, b: 2, d: 5 }, { a: 1, b: 2, d: 4 }));

console.log(sameObj({ a: 1, b: 2, d: 5 }, { a: 1, b: 2, d: 4 }));
console.log(sameObj({ a: 1, b: 2, d: 5, c: 6 }, { a: 1, b: 2, d: 4 }));
console.log(sameObj({ a: 1, b: 2, d: 5 }, { a: 1, b: 2, d: 4, c: 8 }));

function sameObj(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys[obj2.length]) {
        return false;
    }
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(sameObj({ a: 1, b: 2, d: 5 }, { a: 1, b: 2, d: 4 }));

console.log(sameObj({ a: 1, b: 2, d: 5 }, { a: 1, b: 2, d: 4 }));
console.log(sameObj({ a: 1, b: 2, d: 5, c: 6 }, { a: 1, b: 2, d: 4 }));
console.log(sameObj({ a: 1, b: 2, d: 5 }, { a: 1, b: 2, d: 4, c: 8 }));
