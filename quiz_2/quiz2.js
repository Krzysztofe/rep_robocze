const questionsData = [
  ["które imie", ["ola", "ala", "jan"], 0],
  ["jaki kraj", ["polska", "niemcy", "anglia"], 1],
  ["oecan", ["atlantyk", "indyjski", "pacyfik"], 2],
];

class Question {
  #question;
  #answers;
  #goodAnswer;

  constructor(question, answers, goodAnswer) {
    this.#question = question;
    this.#answers = answers;
    this.#goodAnswer = goodAnswer;
  }

  get question() {
    return this.#question;
  }
}

class Quiz {
  constructor() {
    const question = document.getElementById("question");
  }

  createQuestion() {}
}

const quiz = new Quiz();
