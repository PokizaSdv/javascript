// Create a function that takes an array of students ages enrolled into bootcamp. Find and return the average age of the students.
// 24, 23, 18, 50;
function averageAge(ages) {
    let total = 0;
    for (let i = 0; i < ages.length; i++) {
        total = total + ages[i];
    }

    return total / ages.length;
}
console.log(averageAge([24, 23, 18, 50]));
