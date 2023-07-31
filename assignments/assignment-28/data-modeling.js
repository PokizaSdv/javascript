// Step 1: Creating the Basic Structure
const book = {
    title: "Book One",
    author: "Author One",
    yearPublished: 2020
};

// Step 2: Expanding the Data Structure
const book1 = {
    title: "Book One",
    author: "Author One",
    yearPublished: 2020,
    genres: ["Fiction", "Mystery"],
    ratings: [
        { user: "user1", score: 4.5 },
        { user: "user2", score: 3.8 }
        // More ratings can be added here
    ]
};

// Step 3: Adding More Books and Users
const book2 = {
    title: "Book Two",
    author: "Author Two",
    yearPublished: 2018,
    genres: ["Science Fiction"],
    ratings: [
        { user: "user1", score: 4.2 },
        { user: "user3", score: 3.9 }
        // More ratings can be added here
    ]
};

const book3 = {
    title: "Book Three",
    author: "Author Three",
    yearPublished: 2015,
    genres: ["Romance", "Drama"],
    ratings: [
        { user: "user2", score: 4.0 },
        { user: "user4", score: 4.5 }
        // More ratings can be added here
    ]
};

// Step 4: Normalizing the Data
const users = [
    { id: "user1", name: "John" },
    { id: "user2", name: "Emily" },
    { id: "user3", name: "Michael" },
    { id: "user4", name: "Sophia" }
    // More users can be added here
];

const books = [
    {
        title: "Book One",
        author: "Author One",
        yearPublished: 2020,
        genres: ["Fiction", "Mystery"],
        ratings: [
            { user: "user1", score: 4.5 },
            { user: "user2", score: 3.8 }
            // More ratings can be added here
        ]
    },
    {
        title: "Book Two",
        author: "Author Two",
        yearPublished: 2018,
        genres: ["Science Fiction"],
        ratings: [
            { user: "user1", score: 4.2 },
            { user: "user3", score: 3.9 }
            // More ratings can be added here
        ]
    },
    {
        title: "Book Three",
        author: "Author Three",
        yearPublished: 2015,
        genres: ["Romance", "Drama"],
        ratings: [
            { user: "user2", score: 4.0 },
            { user: "user4", score: 4.5 }
            // More ratings can be added here
        ]
    }
];
