class Author {
    constructor(name, nationality) {
        this.name = name; 
        this.nationality = nationality; 
    }
}

class Book {
    constructor(title, author, isbn, genre) {
        this.title = title; 
        this.author = author.name; 
        this.isbn = isbn; 
        this.genre = genre; 
    }
}

class Patron {
    constructor(name, membershipType) {
        this.name = name; 
        this.membershipType = membershipType; 
    }
}

class Library {
    constructor() {
        this.books = []; 
        this.patrons = []; 
    }

    // method to add book
    addBook(book) {
        this.books.push(book);
    }

    // method to remove book
    removeBook(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
    }

    // method to add patron
    addPatron(patron) {
        this.patrons.push(patron);
    }

    // method to remove patron
    removePatron(name) {
        this.patrons = this.patrons.filter(patron => patron.name !== name);
    }
}

const author1 = new Author("J.K. Rowling", "British");
const book1 = new Book("Harry Potter and the Philosopher's Stone", author1, "9781408855652", "Fantasy");
const book2 = new Book("The Lord of the Rings", author1, "9780544003415", "Fantasy");

const patron1 = new Patron("John Doe", "Premium");
const patron2 = new Patron("Jane Smith", "Standard");

const library = new Library();


library.addBook(book1);
library.addBook(book2);

library.addPatron(patron1);
library.addPatron(patron2);

console.log("Library before removing:");
console.log(library); 

library.removeBook("9781408855652");

library.removePatron("John Doe");

console.log("Library after removing:");
console.log(library);
