// Comparison Operators

5 == "5"; // Equal to ==>(when its double equal, it coerces the second value to number) ==> true
5 === "5"; // Strictly equal to ==>(tirple equal does not coerce the values. So 5 is not equal to the string value "5") ==>false
5 != "5"; // Not equal to ==>(==, coercion "5" to the number 5. Then they should be equal) ==>false
5 !== "5"; // Strictly not equal to ==>(triple equal. Coercion is not able. the number 5 value is not equal to "5" string value. )==>true
5 > 3; // Greater than ==>(5 is greater than 3)==>true
5 < 3; // Less than ==>(5 is not less than 3)==> false
5 >= 5; // Greater than or equal to ==>(5 is equal to 5)==> true
5 <= 6; // Less than or equal to ==>(5 is less than 6)==> true

// Logical Operators

true && false; // Logical AND ==>(And operator returns true if both operands are true ) ==> false
true || false; // Logical OR ==>(OR operator returns false if both operands are false) ==>  true
!true; // Logical NOT ==>(Not operator returns the opposite of the operand ) ==> false
(true && false) || true; // Combination of AND and OR ==> false || true ==> true
(!false && true) || false; // Combination of NOT, AND and OR false || false ==> true

// Combining Logical and Comparison Operators

5 > 3 && 2 == "2"; // (5is greater than 3 AND 2 is equal 2.  it coerces "2" to 2) ==> true && true ==> true
5 !== "5" && 6 <= 10; // (5is not equal to "5" AND 6is less than 10) true && true ==> true
3 === "3" || 7 > 10; //(3is not equal to the string "3" OR 7 is not greater than 10) ==> false || false ==> false
4 < 2 || 3 !== "3"; // (4 is not less than 2 OR 3 is not equal to the string "3") ==> false || true ==> true
!(5 > 3 && 2 == "2"); // (5is gretaer than 3 AND 2 is equal to coercion of "2". And opposite of them.) ==> !(true && true) ==> !true ==> false
!(3 === "3" || 7 > 10); // (3 is not equal to the string "3" OR 7is not greater than 10. And opposite of them) ==> !(false || false) ==> !false ==> true
(5 > 3 && !(2 === "2")) || 4 !== "4"; // (5 is greater than 3 AND opposite of 2 is not equal to "2" OR 4 is not equal to "4") ==> true && true || true==> true
7 >= "7" || (!(9 < 11) && 2 !== "2"); // (7 is equal to coercion of "7" OR opposite of 9 is less than 11 AND 2 is not equal to "2")==> true || false && true ==> true

// More Complex Examples

5 > 3 && 2 == "2" && 7 < 10; // (5 is greater than 3 AND 2 is equal to coercion of "2" And 7 is less than 10) ==> true && true && true ==> true
5 !== "5" && 6 <= 10 && 2 === 2; // (5 is not equal to "5" AND 6 is less than 10 And 2 is equal to 2)==> true && true && true ==> true
3 === "3" || 7 > 10 || 4 !== 4; // (3 is not equal to "3" OR 7 is not greater than 10 OR 4 is equal to 4) ==> false || false || false ==> false
4 < 2 || 3 !== "3" || 5 == "5"; // (4 is not less than 2 OR 3 is not equal to "3" OR 5 is equal to coercion of "5") ==> false || true || true ==> true
!((5 > 3 && 2 == "2") || 9 === "9"); // (5 is greater than 3 AND 2 is equal to coercion of "2" OR 9 is not equal "9". And opposite of them) ==>!(true && true || false) ==> !true ==> false
!(3 === "3" || (7 > 10 && 5 !== 5)); // (3 is not equal to "3" OR 7 is not greater than 10 AND 5 is equal to 5. And opposite of them) ==> !(false || false && false) ==> !false ==> true
(5 > 3 && !(2 === "2")) || (4 !== "4" && 7 < 8); // (5 is greater than 3 AND opposite of 2 is not equal to "2" OR 4 is not equal to "4" AND 7 is less than 8) ==> true && !false || true && true ==> true
7 >= "7" || (!(9 < 11) && 2 !== "2") || 3 == "3"; // (7 is equal to the coercion of "7" OR opposite of 9 is less than 11 AND 2 is not equal to "2") ==> true || false && true || true ==> true
