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
    this.#bookDetails();
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




// 1. Wyświetl pierwszy i ostatni element z tablicy oraz dlugość tablicy
const arr = [5,53,543,2423,423,55,568]
const pierwszy_element = arr[0];//tutaj uzupełnić
const ostatni_element = arr[arr.length -1]
const dlugosc_tablicy = arr.length
console.log(`Pierwszy element w tablicy to: ${pierwszy_element}`)
console.log(`Ostatni element w tablicy to: ${ostatni_element}`)
console.log(`Dlugość tablicy to: ${dlugosc_tablicy}`)






// Proszę powiedzieć jakie wartości mają przypisane zmienne case_1 - case_4
// function test_Fun (number){
//     return number ?? 5
// }


// const case_1 = test_Fun(null)
// const case_2 = test_Fun(3)
// const case_3 = test_Fun
// const case_4 = case_3()





// Wyjaśnij czy dane ulegną zmianie po wykonaniu funkcji, jeśli tak to napisz ich wartości oraz dlaczego uległy zmianie
// let array_fun = [1,4,6]
// let obj = {
//     test:3
// }
// let string = 'Testowy string'
// let bol = true
// const fun = (array_fun,obj,string,boolean)=>{
//     let inner_array_fun = array_fun
//     let inner_obj = obj
//     let inner_string = string
//     let inner_boolean = boolean
//     inner_array_fun[1] = 2222
//     inner_obj.test = 5554
//     inner_string = 'inner_string'
//     inner_boolean = false
// }
// fun(array_fun,obj,string,bol)


// array_fun będzie wynosił:
// obj będzie wynosił:
// string będzie wynosił:
// bol będzie wynosił:










//Wyjaśnij co zwróci funkcja i dlaczego


// console.log(ret_fun())
// console.log(return_fun_arrow())
// function ret_fun (){
//     return 5
// }
// const return_fun_arrow = ()=>{
//     return 6
// }












// Wyjaśnij dlaczego poniższy kod nie obsłużył błędu w bloku try catch
// const fn = async()=>{
//     console.log('fn')
//     throw "Błąd"
// }
// try {
//     fn()  
// } catch (error) {
//     console.log(error)
// }








//Jaki warunek zostanie spełniony
// const a = 2
// const b = '2'
// if(a ===b){
//     console.log(`Wykona się _1`)
// }else if(a ==b ){
//     console.log(`Wykona się _2`)
// }else{
//     console.log(`Wykona się _3`)
// }
