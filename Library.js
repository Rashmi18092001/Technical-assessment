// class to store author
class Author {
    constructor(name, nationality) {
        this.name = name; //store name of author
        this.nationality = nationality; // store nationality of author
    }
}

// class to store book
class Book {
    constructor(title, author, isbn, genre) {
        this.title = title; //store title of book
        this.author = author.name; // store author of book, we are taking name property from Author class
        this.isbn = isbn; // store ISBN(International Standard Book Number)
        this.genre = genre; // store genre of book
    }
}

// class to store patron or the person who is borrowing book
class Patron {
    constructor(name, membershipType) {
        this.name = name; //store name of patron
        this.membershipType = membershipType; //stores which type of membership patron holds such as free, standard and premium
    }
}

// class to store all details of libary which includes book details and patron details
class Library {
    constructor() {
        this.books = []; //stores all books which are added
        this.patrons = []; //stores patrons which are added
    }

    // method addBook will add book to the array of books 
    addBook(book) {
        this.books.push(book);
    }

    // method removeBook will remove the book from the array of books, book is removed by giving ISBN 
    removeBook(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
    }

    // method addPatron will add the patron from the array of patrons
    addPatron(patron) {
        this.patrons.push(patron);
    }

    // method addPatron will remove the patron from the array of patrons
    removePatron(name) {
        this.patrons = this.patrons.filter(patron => patron.name !== name);
    }
}

// variables to store details of author, book and patron separately

const author1 = new Author("J.K. Rowling", "British");
const book1 = new Book("Harry Potter and the Philosopher's Stone", author1, "9781408855652", "Fantasy");
const book2 = new Book("The Lord of the Rings", author1, "9780544003415", "Fantasy");

const patron1 = new Patron("John Doe", "Premium");
const patron2 = new Patron("Jane Smith", "Standard");

const library = new Library(); //calling library class

// calling addBook method to book
library.addBook(book1);
library.addBook(book2);

// calling addPatron method to add patron
library.addPatron(patron1);
library.addPatron(patron2);

// showing status of library before removing a book and patron
console.log("Library before removing:");
console.log(library); //calling class instance

// calling removeBook method to remove a book from the library
library.removeBook("9781408855652");

// calling removeBook method to remove a patron from the library
library.removePatron("John Doe");

// showing status of library after removing a book and patron
console.log("Library after removing:");
console.log(library);//calling library class
