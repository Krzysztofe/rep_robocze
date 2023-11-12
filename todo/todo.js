// [textarea, btn] = ["textarea", "btn"].map(item => {
//   return document.querySelector("." + item);
// });

// const addNote = (key, noteValue) => {
//   const div = document.createElement("div");
//   div.textContent = noteValue;
//   div.id = key;

//   document.querySelector("body").append(div);

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "usuń";
//   deleteBtn.onclick = () => {
//     deleteNote(key);
//   };
//   div.append(deleteBtn);
// };

// const saveNote = () => {
//   const key = Date.now().toString();
//   const textareaValue = textarea.value;
//   localStorage.setItem(key, textareaValue);
//   addNote(key, textareaValue);
// };

// const deleteNote = key => {
//   localStorage.removeItem(key);
//   document.getElementById(key).remove();
// };

// const init = () => {
//   Object.keys(localStorage).forEach(item => {
//     const savedItem = localStorage.getItem(item);
//     addNote(item, savedItem);
//   });
// };

// btn.addEventListener("click", saveNote);
// init();

// class NoteManager {
//   constructor() {
//     this.textarea = document.querySelector(".textarea");
//     this.btn = document.querySelector(".btn");
//     this.init();
//   }

//   addNote(key, noteValue) {
//     const div = document.createElement("div");
//     div.textContent = noteValue;
//     div.id = key;
//     document.querySelector("body").append(div);

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "usuń";
//     deleteBtn.onclick = () => {
//       this.deleteNote(key);
//     };
//     div.append(deleteBtn);
//   }

//   saveNote() {
//     const key = Date.now().toString();
//     const textareaValue = this.textarea.value;
//     localStorage.setItem(key, textareaValue);
//     this.addNote(key, textareaValue);
//   }

//   deleteNote(key) {
//     localStorage.removeItem(key);
//     document.getElementById(key).remove();
//   }

//   init() {
//     Object.keys(localStorage).forEach(item => {
//       const savedItem = localStorage.getItem(item);
//       this.addNote(item, savedItem);
//     });

//     this.btn.addEventListener("click", () => {
//       this.saveNote();
//     });
//   }
// }

// const noteManager = new NoteManager();

// class NoteManager {
//   #textarea;
//   #btn;
//   constructor() {
//     this.#textarea = document.querySelector(".textarea");
//     this.#btn = document.querySelector(".btn");
//     this.#init();
//   }

//   createNote(id, textContent) {
//     const div = document.createElement("div");
//     div.textContent = textContent;
//     div.id = id;
//     document.querySelector("body").append(div);

//     const btn = document.createElement("button");
//     btn.textContent = "usuń";
//     btn.onclick = () => this.deleteNote(id);
//     div.append(btn);
//   }

//   saveNote() {
//     const id = Date.now();
//     localStorage.setItem(id, this.#textarea.value);
//     this.createNote(id, this.#textarea.value);
//   }

//   deleteNote(id) {
//     document.getElementById(id).remove();
//     localStorage.removeItem(id);
//   }

//   #init() {
//     this.#btn.addEventListener("click", () => this.saveNote());
//     Object.keys(localStorage).forEach(key => {
//       const textContent = localStorage.getItem(key);
//       this.createNote(key, textContent);
//     });
//   }
// }

// const yy = new NoteManager();

class NotesManager {
  #textarea;
  #btn;
  #results;
  constructor() {
    this.#textarea = document.querySelector(".textarea");
    this.#btn = document.querySelector(".btn");
    this.#results = document.querySelector(".results");
    this.#init();
  }
  #init() {
    Object.keys(localStorage).forEach(item => {
      this.#createElement(item, localStorage.getItem(item));
    });

    this.#btn.addEventListener("click", () => this.#saveElement());
  }
  #createElement(id, content) {
    const div = document.createElement("div");
    div.innerHTML = content;
    div.id = id;
    this.#results.append(div);

    const btn = document.createElement("button");
    btn.textContent = "usuń";
    btn.onclick = () => this.#delete(id);
    div.append(btn);
  }

  #saveElement() {
    const key = Date.now();
    localStorage.setItem(key, this.#textarea.value);
    this.#createElement(key, this.#textarea.value);
  }

  #delete(id) {
    document.getElementById(id).remove();
    localStorage.removeItem(id);
  }
}

const yy = new NotesManager();
