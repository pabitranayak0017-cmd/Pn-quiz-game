const questions = [
  // --- Theory / MCQ Questions ---
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
    question: "Which data structure is used to implement recursion?",
    answers: [
      { text: "Queue", correct: false },
      { text: "Stack", correct: true },
      { text: "Array", correct: false },
      { text: "Tree", correct: false }
    ]
  },
  {
    question: "What is the time complexity of binary search?",
    answers: [
      { text: "O(n)", correct: false },
      { text: "O(log n)", correct: true },
      { text: "O(n log n)", correct: false },
      { text: "O(1)", correct: false }
    ]
  },
  {
    question: "Which normal form removes partial dependency?",
    answers: [
      { text: "1NF", correct: false },
      { text: "2NF", correct: true },
      { text: "3NF", correct: false },
      { text: "BCNF", correct: false }
    ]
  },
  {
    question: "Which protocol is used for secure web communication?",
    answers: [
      { text: "HTTP", correct: false },
      { text: "FTP", correct: false },
      { text: "HTTPS", correct: true },
      { text: "SMTP", correct: false }
    ]
  },
  {
    question: "Which algorithm is used to prevent deadlock in OS?",
    answers: [
      { text: "Round Robin", correct: false },
      { text: "Banker’s Algorithm", correct: true },
      { text: "FCFS", correct: false },
      { text: "Paging", correct: false }
    ]
  },
  {
    question: "What is the main function of the ALU?",
    answers: [
      { text: "Control operations", correct: false },
      { text: "Arithmetic and logical operations", correct: true },
      { text: "Memory management", correct: false },
      { text: "Input/output handling", correct: false }
    ]
  },
  {
    question: "Which memory is non-volatile?",
    answers: [
      { text: "RAM", correct: false },
      { text: "Cache", correct: false },
      { text: "ROM", correct: true },
      { text: "Register", correct: false }
    ]
  },
  {
    question: "Which sorting algorithm has the best average-case performance?",
    answers: [
      { text: "Bubble Sort", correct: false },
      { text: "Insertion Sort", correct: false },
      { text: "Merge Sort", correct: true },
      { text: "Selection Sort", correct: false }
    ]
  },
  {
    question: "What does ACID stand for in DBMS?",
    answers: [
      { text: "Atomicity, Consistency, Isolation, Durability", correct: true },
      { text: "Accuracy, Completeness, Integrity, Durability", correct: false },
      { text: "Access, Control, Index, Data", correct: false },
      { text: "None of these", correct: false }
    ]
  },
  {
    question: "Which OSI layer is responsible for routing?",
    answers: [
      { text: "Transport layer", correct: false },
      { text: "Network layer", correct: true },
      { text: "Data Link layer", correct: false },
      { text: "Session layer", correct: false }
    ]
  },
  {
    question: "Which language is mainly used for Artificial Intelligence?",
    answers: [
      { text: "C", correct: false },
      { text: "Java", correct: false },
      { text: "Python", correct: true },
      { text: "HTML", correct: false }
    ]
  },
  {
    question: "Which scheduling algorithm gives minimum average waiting time?",
    answers: [
      { text: "FCFS", correct: false },
      { text: "Round Robin", correct: false },
      { text: "Shortest Job First", correct: true },
      { text: "Priority Scheduling", correct: false }
    ]
  },
  {
    question: "Which key uniquely identifies a record in a table?",
    answers: [
      { text: "Foreign Key", correct: false },
      { text: "Candidate Key", correct: false },
      { text: "Primary Key", correct: true },
      { text: "Composite Key", correct: false }
    ]
  },
  {
    question: "Which data structure is best for implementing a priority queue?",
    answers: [
      { text: "Array", correct: false },
      { text: "Linked List", correct: false },
      { text: "Heap", correct: true },
      { text: "Stack", correct: false }
    ]
  },

  // --- Coding Questions with Program ---
  {
    question: "Write a function to reverse a string. Output for 'Pabitra'?",
    answers: [
      { text: `"artibaP"`, correct: true },
      { text: `"Pabitra"`, correct: false },
      { text: `"abitraP"`, correct: false },
      { text: `"Patriba"`, correct: false }
    ],
    program: `function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("Pabitra"));`
  },
  {
    question: "Write a function to check if a number is prime. Is 17 prime?",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "0", correct: false },
      { text: "1", correct: false }
    ],
    program: `function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(17));`
  },
  {
    question: "Write a recursive function to find factorial. Factorial of 5?",
    answers: [
      { text: "120", correct: true },
      { text: "24", correct: false },
      { text: "25", correct: false },
      { text: "100", correct: false }
    ],
    program: `function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));`
  },
  {
    question: "Write a function to find the largest number in [3,7,2,9,5]?",
    answers: [
      { text: "9", correct: true },
      { text: "7", correct: false },
      { text: "5", correct: false },
      { text: "3", correct: false }
    ],
    program: `function findLargest(arr) {
  return Math.max(...arr);
}
console.log(findLargest([3,7,2,9,5]));`
  },
  {
    question: "Write FizzBuzz from 1 to 20. Output for 15?",
    answers: [
      { text: "FizzBuzz", correct: true },
      { text: "Fizz", correct: false },
      { text: "Buzz", correct: false },
      { text: "15", correct: false }
    ],
    program: `function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}
fizzBuzz(20);`
  }
];




const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const startBtn = document.getElementById("startBtn");
const playerNameText = document.getElementById("playerName");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const finalScore = document.getElementById("finalScore");

let currentIndex = 0;
let score = 0;
let playerName = "";
let allResults = [];

startBtn.onclick = () => {
  playerName = document.getElementById("username").value.trim();
  if (playerName === "") {
    alert("Please enter your name");
    return;
  }
  playerNameText.innerText = playerName;
  intro.classList.remove("active");
  quiz.classList.add("active");
  loadQuestion();
};

function loadQuestion() {
  resetState();
  let q = questions[currentIndex];
  questionEl.innerText = q.question;

  q.answers.forEach(a => {
    const btn = document.createElement("button");
    btn.innerText = a.text;
    btn.onclick = () => selectAnswer(btn, a.correct, q);
    answersEl.appendChild(btn);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  answersEl.innerHTML = "";
}

function selectAnswer(button, correct, question) {
  if (correct) {
    button.classList.add("correct");
    score++;
    allResults.push({ question: question.question, correct: true });
  } else {
    button.classList.add("wrong");
    allResults.push({ question: question.question, correct: false });
  }

  // Show coding output
  if (question.program) {
    const codeOutput = document.createElement("pre");
    try {
      const output = eval(question.program.replace(/console\.log/g, "return"));
      codeOutput.innerText = "Program Output: " + output;
      allResults[allResults.length - 1].output = output;
    } catch {
      codeOutput.innerText = "Error in program execution";
      allResults[allResults.length - 1].output = "Error";
    }
    answersEl.appendChild(codeOutput);
  }

  Array.from(answersEl.children).forEach(btn => {
    if (btn.tagName === "BUTTON") btn.disabled = true;
  });

  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  quiz.classList.remove("active");
  result.classList.add("active");

  let detailedResults = "";
  allResults.forEach((r, i) => {
    detailedResults += `${i + 1}. ${r.question} - ${r.correct ? "Correct" : "Wrong"}`;
    if (r.output) detailedResults += ` | Output: ${r.output}`;
    detailedResults += "\n";
  });

  finalScore.innerText = `${playerName}, you scored ${score} out of ${questions.length}\n\nDetailed Results:\n${detailedResults}`;

  // Save to localStorage for admin view
  let allPlayers = JSON.parse(localStorage.getItem("quizResults")) || [];
  allPlayers.push({
    name: playerName,
    score: score,
    results: allResults
  });
  localStorage.setItem("quizResults", JSON.stringify(allPlayers));
}
