// 1
function addTwo(a, b) {
    var sum = a + b;
    return sum;
}

// 2
function multiplyTwo(a, b) {
    var product = a * b;
    return product;
}

// 3
function isOdd(a) {
    var odd = a % 2 !== 0;
    return odd;
}

// 4
function substractTwo(a, b) {
    var difference = a - b;
    return difference;
}

// 5
function divideTwo(a, b) {
    if (b !== 0) {
        var quotient = a / b;
        return quotient;
    } else {
        return "Error: Division by zero is not allowed";
    }
}

// 6
function isEven(a) {
    var even = a % 2 === 0;
    return even;
}

// 7
function maxValue(a, b) {
    var larger;
    if (a > b) {
        larger = a;
    } else {
        larger = b;
    }
    return larger;
}

// 8
function minValue(a, b) {
    var smaller;
    if (a < b) {
        smaller = a;
    } else {
        smaller = b;
    }
    return smaller;
}

// 9
function absoluteValue(a) {
    var abs = Math.abs(a);
    return abs;
}

// 10
function roundNumber(a) {
    var round = Math.round(a);
    return round;
}

// 11
function ceilNumber(a) {
    var ceil = Math.ceil(a);
    return ceil;
}

// 12
function floorNumber(a) {
    var floor = Math.floor(a);
    return floor;
}

// 13
function modulus(a, b) {
    if (b !== 0) {
        var remainder = a % b;
        return remainder;
    } else {
        return "Error: Division by zero is not allowed";
    }
}

// 14
function power(a, b) {
    var power = Math.pow(a, b);
    return power;
}

// 15
function squareRoot(a) {
    if (a >= 0) {
        var sqRoot = Math.sqrt(a);
        return sqRoot;
    } else {
        return "Error: Square root of negative number is not allowed!";
    }
}
