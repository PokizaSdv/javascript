//  Task 1 Create a JavaScript Object
let movie = {
    title: "Little Women",
    director: "Greta Gerwig",
    releaseYear: 2019,
    genre: "drama",
    rating: "7.8"
};

//  Task 2 Accessing Object Properties
console.log(movie.title);
console.log(movie["title"]);
console.log(movie.director);
console.log(movie["director"]);
console.log(movie.releaseYear);
console.log(movie["releaseYear"]);
console.log(movie.genre);
console.log(movie["genre"]);
console.log(movie.rating);
console.log(movie["rating"]);

// Task 3 Undefined Properties
console.log(movie.producer);
console.log(movie["music"]);

// Task 4 Modify Object Properties
movie.rating = 9.5;
console.log(movie.rating);

movie["rating"] = 8.5;
console.log(movie["rating"]);

movie.rating = 9.5;
console.log(movie["rating"]);

movie["rating"] = 8.5;
console.log(movie.rating);

// Task 5 Add New Properties
movie.boxOffice = "206 million USD";
console.log(movie.boxOffice);

// Task 6 Delete Properties
delete movie.boxOffice;
console.log(movie.boxOffice);

// Extra Challenge
function printMovieDetails(movie) {
    console.log(
        `The movie ${movie.title} was directed by ${movie.director} and was released in ${movie.releaseYear}. It is a ${movie.genre} film with a rating of ${movie.rating}`
    );
}

printMovieDetails(movie);
