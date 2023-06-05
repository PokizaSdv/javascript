/* Part 1 */

var num1 = 8;
var num2 = 4;

console.log("Addition:", num1 + num2);
console.log("Substraction", num1 - num2);
console.log("Multiplication", num1 * num2);
console.log("Division", num1 / num2);

/* Part 2 */
var fahrenheit = 80;
var celsius = (fahrenheit - 32) * (9 / 5);
console.log("Temperature in Celsius:", celsius);

var celsius = 30;
var fahrenheit = celsius * (9 / 5) + 32;
console.log("Temperature in Fahrenheit:", fahrenheit);

/* Part 3 */

var principal = 50;
var rate = 8;
var time = 3;
var interest = (principal * rate * time) / 100;
console.log("Interest:", interest);

/* Part 4 */

var a = 4;
var b = 8;
console.log("Before swapping: a =", a, ", b=", b);

a = a + b;
b = a - b;
a = a - b;
console.log("After swapping: a=", a, ", b =", b);

/* Part 5 */

var radius = 10;
var area = 3.14 * radius * radius;
console.log("Area of circle:", area);

var length = 20;
var width = 50;
var perimeter = 2 * (length + width);
console.log("Perimeter of rectangle:", perimeter);
