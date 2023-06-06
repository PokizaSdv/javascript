var name1 = "john doe";
var name2 = "Jane smith";
var name3 = "bob Johnson";

// name1
var spaceIdxName1 = name1.indexOf(" ");
var initialFirstName1 = name1[0];
var initialLastName1 = name1[spaceIdxName1 + 1];
console.log((initialFirstName1 + initialLastName1).toUpperCase());

// name2
var spaceIdxName2 = name2.indexOf(" ");
var initialFirstName2 = name2[0];
var initialLastName2 = name2[spaceIdxName2 + 1];
console.log((initialFirstName2 + initialLastName2).toUpperCase());

// name3
var spaceIdxName3 = name3.indexOf(" ");
var initialFirstName3 = name3[0];
var initialLastName3 = name3[spaceIdxName3 + 1];
console.log((initialFirstName3 + initialLastName3).toUpperCase());
