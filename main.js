//Here we could have included more, but we only included 24 questions so you can test the entire site more quickly. Among these 24 questions, the system selects 12 questions for each session until all the questions are finished. Once all the questions are completed, a congratulatory message is sent. The user validates the sessions only if they answer 6 or more questions correctly
let questionsData = [
  {
    text: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", isCorrect: false },
      { text: "Pablo Picasso", isCorrect: false },
      { text: "Leonardo da Vinci", isCorrect: true },
    ],
  },
  {
    text: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "China", isCorrect: false },
      { text: "Japan", isCorrect: true },
      { text: "South Korea", isCorrect: false },
    ],
  },
  {
    text: "Which element is represented by the symbol 'O' on the periodic table?",
    answers: [
      { text: "Oxygen", isCorrect: true },
      { text: "Osmium", isCorrect: false },
      { text: "Ozone", isCorrect: false },
    ],
  },
  {
    text: "Which city is known as the Eternal City?",
    answers: [
      { text: "Athens", isCorrect: false },
      { text: "Rome", isCorrect: true },
      { text: "Jerusalem", isCorrect: false },
    ],
  },
  {
    text: "Which famous playwright wrote 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", isCorrect: false },
      { text: "William Shakespeare", isCorrect: true },
      { text: "George Orwell", isCorrect: false },
    ],
  },
  {
    text: "Which country is famous for the Eiffel Tower?",
    answers: [
      { text: "Germany", isCorrect: false },
      { text: "France", isCorrect: true },
      { text: "Italy", isCorrect: false },
    ],
  },
  {
    text: "Which country is home to the Great Barrier Reef?",
    answers: [
      { text: "Australia", isCorrect: true },
      { text: "New Zealand", isCorrect: false },
      { text: "Thailand", isCorrect: false },
    ],
  },
  {
    text: "What is the capital of Canada?",
    answers: [
      { text: "Toronto", isCorrect: false },
      { text: "Ottawa", isCorrect: true },
      { text: "Vancouver", isCorrect: false },
    ],
  },
  {
    text: "Which artist is known for his work with 'Campbell's Soup Cans'?",
    answers: [
      { text: "Andy Warhol", isCorrect: true },
      { text: "Salvador Dalí", isCorrect: false },
      { text: "Jackson Pollock", isCorrect: false },
    ],
  },
  {
    text: "Which famous landmark is located in Egypt?",
    answers: [
      { text: "The Great Wall of China", isCorrect: false },
      { text: "The Pyramids of Giza", isCorrect: true },
      { text: "Stonehenge", isCorrect: false },
    ],
  },
  {
    text: "In which country can you find the ancient city of Petra?",
    answers: [
      { text: "Jordan", isCorrect: true },
      { text: "Egypt", isCorrect: false },
      { text: "Turkey", isCorrect: false },
    ],
  },
  {
    text: "Which country is known for the ancient pyramids and pharaohs?",
    answers: [
      { text: "Mexico", isCorrect: false },
      { text: "Egypt", isCorrect: true },
      { text: "India", isCorrect: false },
    ],
  },
  {
    text: "What is the tallest mountain in the world?",
    answers: [
      { text: "Mount Everest", isCorrect: true },
      { text: "K2", isCorrect: false },
      { text: "Mount Kilimanjaro", isCorrect: false },
    ],
  },
  {
    text: "Which country is known for the ancient city of Machu Picchu?",
    answers: [
      { text: "Peru", isCorrect: true },
      { text: "Bolivia", isCorrect: false },
      { text: "Mexico", isCorrect: false },
    ],
  },
  {
    text: "Which island is known for its large population of kangaroos and koalas?",
    answers: [
      { text: "New Zealand", isCorrect: false },
      { text: "Australia", isCorrect: true },
      { text: "Tasmania", isCorrect: false },
    ],
  },
  {
    text: "Which famous scientist developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", isCorrect: false },
      { text: "Albert Einstein", isCorrect: true },
      { text: "Galileo Galilei", isCorrect: false },
    ],
  },
  {
    text: "Which city is known as the Big Apple?",
    answers: [
      { text: "Los Angeles", isCorrect: false },
      { text: "New York City", isCorrect: true },
      { text: "Chicago", isCorrect: false },
    ],
  },
  {
    text: "What is the name of the ancient Greek philosopher who taught Alexander the Great?",
    answers: [
      { text: "Plato", isCorrect: false },
      { text: "Socrates", isCorrect: false },
      { text: "Aristotle", isCorrect: true },
    ],
  },
  {
    text: "Which continent is home to the Sahara Desert?",
    answers: [
      { text: "Asia", isCorrect: false },
      { text: "Africa", isCorrect: true },
      { text: "Australia", isCorrect: false },
    ],
  },
  {
    text: "What is the capital city of Brazil?",
    answers: [
      { text: "Rio de Janeiro", isCorrect: false },
      { text: "São Paulo", isCorrect: false },
      { text: "Brasília", isCorrect: true },
    ],
  },
  {
    text: "Which country is home to the Great Wall?",
    answers: [
      { text: "China", isCorrect: true },
      { text: "Japan", isCorrect: false },
      { text: "India", isCorrect: false },
    ],
  },
  {
    text: "What is the capital of Japan?",
    answers: [
      { text: "Seoul", isCorrect: false },
      { text: "Tokyo", isCorrect: true },
      { text: "Beijing", isCorrect: false },
    ],
  },
  {
    text: "Which country is known for its maple syrup?",
    answers: [
      { text: "Canada", isCorrect: true },
      { text: "Sweden", isCorrect: false },
      { text: "Finland", isCorrect: false },
    ],
  },
  {
    text: "Which country is famous for its pyramids and the Nile River?",
    answers: [
      { text: "Egypt", isCorrect: true },
      { text: "Mexico", isCorrect: false },
      { text: "India", isCorrect: false },
    ],
  },
];
let score = 0; // Global score
let answeredCount = 0; // Number of questions answered in the current session
let currentSessionQuestions = []; // Questions of the current session
let repeatSession = false; // Indicator to repeat the same questions
let completedSessions = 0; // Counter for completed sessions
let totalSessions = 2; // Total number of sessions
// HTML container for displaying Q and A
const appContainer = document.getElementById("questions-container");
const scoreContainer = document.getElementById("score-container");

// Variables for the modal
const customAlert = document.getElementById("custom-alert");
const alertMessage = document.getElementById("alert-message");
const replayButton = document.getElementById("replay-button");
const endButton = document.getElementById("end-button");

// Shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Select 12 random questions
function getRandomQuestions() {
  const remainingQuestions = questionsData.filter(
    (q) => !currentSessionQuestions.some((cq) => cq.text === q.text)
  );
  shuffle(remainingQuestions);
  return remainingQuestions.slice(0, 12);
}

// Load a session of questions
function loadQuestions(retry = false) {
  if (!retry) {
    completedSessions++; // Count a new session if it's not a "replay"
  }

  // Reset variables for a new session
  score = 0; // Reset the score to zero at the start of each game
  answeredCount = 0; // Reset the answer count

  // Update the questions
  appContainer.innerHTML = ""; // Reset the container
  if (retry && currentSessionQuestions.length > 0) {
    alertMessage.textContent =
      "You have another chance with the same questions 😊!";
  } else {
    currentSessionQuestions = getRandomQuestions();
    alertMessage.textContent = "";
  }

  // Update the score display
  scoreContainer.innerHTML = `Score: ${score} `;

  // Display the questions
  currentSessionQuestions.forEach((questionData) => {
    let question = new Question({
      text: questionData.text,
      answers: questionData.answers,
    });
    appContainer.appendChild(question.create());
  });
}

// Handling the answers
document.addEventListener("question-answered", ({ detail }) => {
  const { question, answer } = detail;

  // Check if the answer is correct
  if (answer?.isCorrect) {
    score++;
  }
  answeredCount++;

  // Check if all the questions in the session have been answered
  if (answeredCount === currentSessionQuestions.length) {
    evaluatePerformance();
  }

  // Update the score display
  scoreContainer.innerHTML = `Score: ${score} `;
});

// Evaluate the user's performance
function evaluatePerformance() {
  const correctAnswers = score; // The score represents the number of correct answers in the session

  if (correctAnswers >= 6) {
    if (completedSessions === totalSessions) {
      // Display final congratulations after the last session
      displayFinalCongratulations();
    } else {
      // Success: Offer to continue or finish
      alertMessage.textContent = `🎉 Great! You answered ${correctAnswers} questions out of 12 correctly. Do you want to continue with new questions or finish?`;
      replayButton.textContent = "continue";
      repeatSession = false; // Load new questions

      customAlert.classList.add("show");
    }
  } else {
    // Failure: Offer to replay or finish
    alertMessage.textContent = `😕 You only answered ${correctAnswers} questions out of 12 correctly. Play the same questions again or finish!`;
    replayButton.textContent = "Replay";
    repeatSession = true; // Repeat the same questions

    customAlert.classList.add("show");
  }
}

// Display final congratulations
function displayFinalCongratulations() {
  appContainer.innerHTML = `
<div class="final-congratulations">
      <h1>🎉 Congratulations 🎉</h1>
      <p>You have completed all sessions with flying colors! Congratulations for your exceptional performance.</p>
      <p>Keep learning and improving. You are on the right track!</p>
      <button onclick="endQuiz()">To end</button>
    </div>
  `;
}

// End the quiz
function endQuiz() {
  alert("Thanks for playing, see you again 😊!");
  location.reload(); // Reload the page to reset
}

// Modal button actions
replayButton.onclick = () => {
  customAlert.classList.remove("show");
  loadQuestions(repeatSession); // Reload the questions (new or repeated)
};

endButton.onclick = () => {
  customAlert.classList.remove("show");
  alert("Thanks for playing 😊 see you again!");
};

// Initialize the quiz
loadQuestions();
