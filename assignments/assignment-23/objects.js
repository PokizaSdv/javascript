let movieCollection = {
    movies: [],
    // 1
    addMovie: function (title, director, genre, year) {
        let movie = {
            title: title,
            director: director,
            genre: genre,
            year: year
        };

        this.movies.push(movie);
    },

    // 2
    getMovieByTitle: function (title) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                return this.movies[i];
            }
        }
        return "There is no movie with this title";
    },

    // 3
    getMoviesByGenre: function (genre) {
        let matchingMovies = [];
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].genre === genre) {
                matchingMovies.push(this.movies[i]);
            }
        }
        return "There are no movies with this genre";
    },

    // 4
    updateMovie: function (title, update) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                this.movies[i].director = update.director;
                this.movies[i].genre = update.genre;
                this.movies[i].year = update.year;
                return this.movies[i];
            }
        }
        return "There is no movie with this title";
    },

    deleteMovie: function (title) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                this.movies.splice[(i, 1)];
                return "Movie deleted";
            }
        }
        return "There is no movie with this title";
    },
    printMovies: function () {
        for (i = 0; i < this.movies.length; i++) {
            let movie = this.movies[i];
            console.log(`Title: ${movie.title}`);
            console.log(`Director: ${movie.director}`);
            console.log(`Genre: ${movie.genre}`);
            console.log(`year: ${movie.year}`);
            console.log("-----------------------");
        }
    }
};

movieCollection.addMovie("Little Women", "Greta Gerwig", "Drama", 2019);
movieCollection.addMovie(
    "The Green Mile",
    "Frank Darabont",
    "fantasy, drama",
    1999
);
console.log(movieCollection.movies);
console.log(movieCollection.getMovieByTitle("Little Women"));
console.log(movieCollection.getMoviesByGenre("Drama"));
console.log(
    movieCollection.updateMovie("The Green Mile", {
        director: "Frank Darabont",
        genre: "Fantasy, Drama",
        year: 1999
    })
);
console.log(movieCollection.deleteMovie("Little Women"));
movieCollection.printMovies();
