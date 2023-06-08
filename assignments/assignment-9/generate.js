var generateNumber = Math.floor(Math.random() * 10) + 1;

var Name;
if (generateNumber >= 1 && generateNumber <= 3) {
    Name = "Xon";
} else if (generateNumber >= 4 && generateNumber <= 7) {
    Name = "Pokiza";
} else {
    Name = "Samandar";
}

var randomNumber = Math.floor(Math.random() * 4) + 1;

if (randomNumber === 1) {
    console.log(
        "Dear, " +
            Name +
            ", wishing you a day filled with happiness and a year filled a joy."
    );
} else if (randomNumber === 2) {
    console.log(
        "Dear, " +
            Name +
            ", sending you smiles for every moment of your special day."
    );
} else if (randomNumber === 3) {
    console.log(
        "Dear, " + Name + ", have a wonderful time and a very happy day!"
    );
} else {
    console.log(
        "Dear, " +
            Name +
            ", hope your special day brings you all that your heart desires!"
    );
}
