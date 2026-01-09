const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Text Machine Language", correct: false },
      { text: "Hyperlinks Text Mark Language", correct: false },
      { text: "None of these", correct: false }
    ]
  },
  {
    question: "Which language is used for styling web pages?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "JavaScript", correct: false },
      { text: "PHP", correct: false }
    ]
  },
  {
    question: "Which is used to add interactivity to a website?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: false },
      { text: "JavaScript", correct: true },
      { text: "SQL", correct: false }
    ]
  },
  {
    question: "Which HTML tag is used to insert an image?",
    answers: [
      { text: "<image>", correct: false },
      { text: "<img>", correct: true },
      { text: "<pic>", correct: false },
      { text: "<src>", correct: false }
    ]
  },
  {
    question: "Which CSS property controls text color?",
    answers: [
      { text: "font-style", correct: false },
      { text: "text-color", correct: false },
      { text: "color", correct: true },
      { text: "background-color", correct: false }
    ]
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    answers: [
      { text: "<js>", correct: false },
      { text: "<javascript>", correct: false },
      { text: "<script>", correct: true },
      { text: "<code>", correct: false }
    ]
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "/* */", correct: false },
      { text: "<!-- -->", correct: false },
      { text: "#", correct: false }
    ]
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answers: [
      { text: "class", correct: false },
      { text: "style", correct: true },
      { text: "font", correct: false },
      { text: "id", correct: false }
    ]
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Google", correct: false },
      { text: "Microsoft", correct: false },
      { text: "Netscape", correct: true },
      { text: "Amazon", correct: false }
    ]
  },
  {
    question: "Which is NOT a JavaScript framework?",
    answers: [
      { text: "React", correct: false },
      { text: "Angular", correct: false },
      { text: "Vue", correct: false },
      { text: "Django", correct: true }
    ]
  }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerText = `You scored ${score} out of ${questions.length}`;
  nextButton.innerText = "Play Again";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

startQuiz();