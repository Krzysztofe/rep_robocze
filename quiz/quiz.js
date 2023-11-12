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

    console.log("", this.#questions);
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
// console.log('',tt)
