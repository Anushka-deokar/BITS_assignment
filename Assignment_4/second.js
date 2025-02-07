// Assignment 2: Working with Objects
// 1. Task: Create an object bookLibrary to manage a collection of books.
// The object should have the following properties and methods:
// books: An array of book objects (each book has title, author, and
// yearPublished).
// addBook(book): Adds a new book to the collection.
// getBooksByAuthor(author): Returns all books by a given author.
// removeBook(title): Removes a book by title.
//  Add a method getAllBooks to return a list of all book titles. 


const bookLibrary = {

    books: [
        { title: "You Can Win", author: "Shiv Khera", yearPublished: 1998 },
        { title: "The Power of Your Subconscious Mind", author: "Joseph Murphy", yearPublished: 1963 },
        { title: "Think and Grow Rich", author: "Napoleon Hill", yearPublished: 1937 },
        { title: "Good Vibes, Good Life", author: "Vex King", yearPublished: 2018 },
        { title: "This is Me Letting You Go", author: "Hedy Schleifer", yearPublished: 2020 },
        { title: "The Universe Always Has a Plan", author: "Sherrie Daly", yearPublished: 2021 }
    ],


    addBook(book) {
        this.books.push(book);
        console.log(`Book added: "${book.title}" by ${book.author}`);
    },


    getBooksByAuthor(author) {
        const booksByAuthor = this.books.filter(book => book.author === author);
        return booksByAuthor.length > 0 ? booksByAuthor : `No books found by ${author}`;
    },


    removeBook(title) {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.title !== title);

        if (this.books.length < initialLength) {
            console.log(`Book has removed: "${title}"`);
        } else {
            console.log(`Book is not found: "${title}"`);
        }
    },


    getAllBooks() {
        if (this.books.length === 0) {
            console.log("No books in the library.");
        } else {
            return this.books.map(book => book.title);
        }
    }
};


console.log(bookLibrary.getAllBooks());
bookLibrary.addBook({ title: "Moby Dick", author: "Herman Melville", yearPublished: 1851 });
console.log(bookLibrary.getBooksByAuthor("Vex King"));
bookLibrary.removeBook("Think and Grow Rich");
console.log(bookLibrary.getAllBooks()); 
