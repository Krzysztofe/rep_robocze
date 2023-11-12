// class Book {
//   #title;
//   #author;
//   #year;
//   constructor(title, author, year) {
//     this.#title = title;
//     this.#author = author;
//     this.#year = year;
//   }
//   printBookDetails() {
//     return `tytuł ${this.#title}, autor: ${this.#author}, data: ${this.#year}`;
//   }
// }

// class Library {
//   #booksCollection;

//   constructor() {
//     this.#booksCollection = new Map();
//     this.init();
//   }

//   init() {
//     document.getElementById("form").addEventListener("submit", e => {
//       e.preventDefault();
//       this.#addBook();
//     });
//     document.getElementById("form2").addEventListener("submit", e => {
//       e.preventDefault();
//       this.#searchBook();
//     });
//   }

//   #addBook() {
//     const title = document.getElementById("title").value;
//     const author = document.getElementById("author").value;
//     const year = document.getElementById("year").value;
//     const search = document.getElementById("search").value;

//     const addBook = new Book(title, author, year);
//     this.#booksCollection.set(title, addBook);
//     alert("książka dodana");

//   }

//   #searchBook() {
//     const search = document.getElementById("search").value;
//     const book = this.#booksCollection.get(search);
//     const result = document.getElementById("result");

//     console.log('',book)

//     if (book) {
//      result.textContent = book.printBookDetails();
//     } else {
//       result.textContent = "nie ma";
//     }
//   }
// }

// const vv = new Library();

class Book {
  #title;
  #author;
  #year;
  constructor(title, author, year) {
    this.#title = title;
    this.#author = author;
    this.#year = year;
    this.bookDetails();
  }

  #bookDetails() {
    return `autor: ${this.#author}, title: ${this.#title}, year: ${
      this.#year
    } `;
  }


  get bookDetails(){
    return this.#bookDetails
  }
}

class Library {
  #form;
  #form2;
  #books;
  constructor() {
    this.#books = new Map();
    this.#init();
  }
  #init() {
    this.#form = document.getElementById("form");
    this.#form2 = document.getElementById("form2");
    this.#form.addEventListener("submit", e => this.#addBook(e));
    this.#form2.addEventListener("submit", e => this.#searchBook(e));
  }

  #addBook(e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value;
    const newBook = new Book(title, author, year);
    this.#books.set(title, newBook);
  }

  #searchBook(e) {
    e.preventDefault();
    const result = document.getElementById("result");
    result.textContent = ""
    const search = document.getElementById("search").value;
    if (this.#books.get(search)) {
     
      const book = this.#books.get(search);
      result.textContent = book.bookDetails();
    } else {
      result.textContent = "nie ma";
    }
  }
}

const tt = new Library();
