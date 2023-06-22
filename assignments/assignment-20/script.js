// Your mission is to develop a function named isValidEmail(email). This function should take a string representing an email and assess its validity according to a particular set of rules. It should return true if the email is valid and false if it's not.

// An email is deemed valid if it meets the following conditions:

// The email must contain exactly one "@" symbol.
// Username:
// All characters before the "@" symbol (the username) should be alphanumeric, underscores, or dots ".".
// A username cannot start or end with an underscore or dot.
// A username cannot have a dot and an underscore together.
// Domain:
// There must be exactly one dot "." after the "@" symbol (in the domain part).
// Other than the dot ".", all characters in the domain part must be from the alphabet (no numbers or underscores allowed).
// Domain (For example gmail )part should have at least 1 character.
// Domain extension(For example com )part should have at least 2 characters and 3

function isValidEmail(email) {
    let emailParts = email.split("@");
    let username = emailParts[0];
    let domain = emailParts[1];
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "123456789";
    let symbols = "._";

    if (emailParts.length !== 2) {
        return false;
    }
    if (
        username[0] === "." ||
        username[0] === "_" ||
        username[username.length - 1] === "." ||
        username[username.length - 1] === "_"
    ) {
        return false;
    }
    for (var i = 0; i < username.length; i++) {
        var char = username[i];
        if (
            !alphabet.includes(char.toLowerCase()) &&
            !numbers.includes(char) &&
            !symbols.includes(char)
        ) {
            return false;
        }
    }
    for (var i = 0; i < username.length - 1; i++) {
        var currentChar = username[i];
        var nextChar = username[i + 1];
        if (symbols.includes(currentChar) && symbols.includes(nextChar)) {
            return false;
        }
    }

    var domainParts = domain.split(".");
    if (domainParts.length !== 2) {
        return false;
    }

    if (
        domainParts[0].length < 1 ||
        domainParts[1].length < 2 ||
        domainParts[1].length > 3
    ) {
        return false;
    }

    var domainPartWithoutDot = domainParts.join("");
    for (var i = 0; i < domainPartWithoutDot.length; i++) {
        var char = domainPartWithoutDot[i];
        if (!alphabet.includes(char.toLowerCase())) {
            return false;
        }
    }

    return true;
}

// a) Regular and valid email
console.log("a", isValidEmail("john.doe@example.com")); // true

// b) Valid email with numbers in username
console.log("b", isValidEmail("john2.doe3@example.com")); // true

// c) Valid email with underscore in username
console.log("c", isValidEmail("john_doe@example.com")); // true

// d) Valid email with capital letters
console.log("d", isValidEmail("John.Doe@Example.com")); // true

// e) Test for an email with three-letter domain extension
console.log("e", isValidEmail("john.doe@example.net")); // true

// f) Test for an email with two-letter domain extension
console.log("f", isValidEmail("john.doe@example.co")); // true

// g) Test for an email with one letter domain name
console.log("g", isValidEmail("john@d.com")); // true

// h) Test for an email with no "@" symbol:
console.log("h", isValidEmail("johndoexample.com")); // false

//i) Test for an email with multiple "@" symbols:
console.log("i", isValidEmail("john@doe@example.com")); // false

// j) Test for an email where username starts or ends with a dot or an underscore:
console.log("j", isValidEmail(".john@doe.com")); //false
console.log("j", isValidEmail("john.@doe.com")); //false
console.log("j", isValidEmail("_john@doe.com")); //false
console.log("j", isValidEmail("john_@doe.com")); //false

// k) Test for an email where username has adjacent dots or underscores:
console.log("k", isValidEmail("john..doe@example.com")); // false
console.log("k", isValidEmail("john__doe@example.com")); // false
console.log("k", isValidEmail("john._doe@example.com")); // false
console.log("k", isValidEmail("john_.doe@example.com")); // false

// l) Test for an email where domain does not have exactly one "." character:
console.log("l", isValidEmail("john@doecom")); // false
console.log("l", isValidEmail("john@doe.com.com")); // false

// m) Test for an email where domain name or extension is not of valid length:
console.log("m", isValidEmail("john@doe.c")); // false
console.log("m", isValidEmail("john@doe.comm")); // false

// n) Test for an email where domain name or extension contains invalid characters:
console.log("n", isValidEmail("john@do3.com")); // false
console.log("n", isValidEmail("john@doe.c_m")); // false
