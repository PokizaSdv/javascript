// 1
function combineArrays(arr1, arr2) {
    var newArray = arr1.concat(arr2);
    return newArray;
}
console.log(combineArrays([1, 2, 3], [4, 5, 6]));

// 2
function reverseOrder() {
    var reversed = reverseOrder.reverse();
    return reversed;
}
console.log([1, 2, 3].reverse());

// 3
function checkValue(arr, num) {
    if (arr === num) {
        return true;
    } else {
        return false;
    }
}
console.log(checkValue([1, 2, 3], 2));

// 4
function isArray(arr) {
    if (Array.isArray(arr)) {
        return true;
    } else {
        return false;
    }
}
console.log(isArray([1, 2, 3]));

// 5
function arraySlice(array, num1, num2) {
    arraySlice.slice(1, 4);
    var sliced = arraySlice;
    return sliced;
}

console.log(arraySlice([1, 2, 3, 4, 5], 1, 4));

// 6
function removeLast(num1, num2, num3) {
    var removed = removeLast.pop();
    return removeLast;
}
console.log(removeLast([1, 2, 3]));

// 7
function removeFirst(num1, num2, num3) {
    var removed = removeFirst.shift();
    return removeFirst;
}
console.log(removeFirst([1, 2, 3]));

// 8
function addAtBeginning(arr1, num) {
    var addAtBeginning = [1, 2, 3];
    var newArray = arr1.unshift(num);
    return newArray;
}
console.log(addAtBeginning([1, 2, 3], 0));

// 9
function addAtEnd(arr1, num) {
    var addAtEnd = arr1.push(num);
    return addAtEnd;
}
console.log(addAtEnd([1, 2, 3], 0));
