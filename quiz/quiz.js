const data = [
  [["ile lat"], ["9", "7", "8"], 0],
  [["ile pieter"], ["9", "7", "8"], 2],
];

class Question {
  #title;
  #answers;
  #correctAnswer;

  constructor(title, answers, correctAnswer) {
    this.#title = title;
    this.#answers = answers;
    this.#correctAnswer = correctAnswer;
  }

  get title() {
    return this.#title;
  }
}

class Quiz {
  #questions;
  #currentQuestionIdx;
  #score;

  constructor(questions) {
    this.#questions = questions.map(question => {
      return new Question(question[0], question[1], question[2]);
    });

    this.#currentQuestionIdx = 0;
    this.#score = 0;
  }
  displayQuestions() {
    const question = document.getElementById("question");
    const answers = document.getElementById("answers");
    question.textContent = this.#questions[this.#currentQuestionIdx].title;
  }
}

const tt = new Quiz(data);
tt.displayQuestions();

// vartical belt
const nameElems = document.querySelectorAll(".name");

const printName = nameEl => {
  nameElems.forEach(el => el.classList.remove("animation"));
  nameEl.classList.add("animation");
};

const handlePrintName = () => {
  let currentIndex = 0;

  setInterval(() => {
    printName(nameElems[currentIndex]);
    currentIndex = (currentIndex + 1) % nameElems.length;
  }, 4000);
};

window.addEventListener("load", handlePrintName);

// horizontal animation

const beltContainerEl = document.querySelector(".beltContainerInterval");



const timerEl = document.getElementById("timer");
const timeEendEl = document.getElementById("timerEnd");
const timePrint = document.getElementById("timePrint");

let intervalId;

const addSecont = counter => {
  counter.value++;
  timePrint.innerText = counter.value;
};

let counter = { value: 0 };
const handleTimerStart = () => {
  intervalId = setInterval(() => addSecont(counter), 1000);
};

const handleTimerEnd = () => {
  clearInterval(intervalId);
};

timerEl.addEventListener("click", handleTimerStart);
timeEendEl.addEventListener("click", handleTimerEnd);

// ptint timeout
const divEL = document.createElement("div");

const print = () => {
  const bodyEl = document.querySelector("body");
  divEL.innerText = "yyy";
  bodyEl.append(divEL);
};

const clear = () => {
  divEL.remove();
};

setTimeout(print, 2000);
setTimeout(clear, 5000);
