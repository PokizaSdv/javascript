var part1 = "The greatest glory in";
var part2 = "living lies not in";
var part3 = "never falling, but in";
var part4 = "rising every time";
var part5 = "we fall.";
var author = " - Nelson Mandela";

/***** Template Literal Method ******/

var resultLiteral = `${part1} ${part2} ${part3} ${part4} ${part5} ${author}`;

console.log(resultLiteral);

/***** Concat ******/

var resultConcat = part1.concat(
    " ",
    part2,
    " ",
    part3,
    " ",
    part4,
    " ",
    part5,
    " ",
    author
);

console.log(resultConcat);

/***** + Method ******/

var resultPlus =
    part1 +
    " " +
    part2 +
    " " +
    part3 +
    " " +
    part4 +
    " " +
    part5 +
    " " +
    author;

console.log(resultPlus);

/**** += Operator ***/

var resultPlusEqual = part1;
resultPlusEqual += " " + part2;
resultPlusEqual += " " + part3;
resultPlusEqual += " " + part4;
resultPlusEqual += " " + part5;
resultPlusEqual += " " + author;

console.log(resultPlusEqual);
