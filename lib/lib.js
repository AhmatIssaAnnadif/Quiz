var Question = function (questionObj) {
  // Initialize the question object with default values
  this.value = {
    text: "Question", // Default question text
    answers: [], // List of possible answers
  };

  // Variables to store selected answer and related elements
  this.selectedAnswer = null;
  this.html = null;
  this.questionText = null;
  this.questionAnswers = null;
  this.questionFeedback = null;

  // Merge the provided question object with the default values
  this.value = Object.assign(this.value, questionObj);

  // Event handler when a question is answered
  this.onQuestionAnswered = ({ detail }) => {
    // Store the selected answer and its HTML element
    this.selectedAnswer = {
      value: detail.answer,
      html: detail.answerHtml,
    };
    this.update(); // Update the question feedback
    // Dispatch a custom event indicating the question has been answered
    document.dispatchEvent(
      new CustomEvent("question-answered", {
        detail: {
          question: this,
          answer: detail.answer,
        },
      })
    );
  };

  // Create the HTML structure for the question
  this.create = function () {
    // Create the main HTML div for the question
    this.html = document.createElement("div");
    this.html.classList.add("question");

    // Create the question text element
    this.questionText = document.createElement("h2");
    this.questionText.textContent = this.value.text;

    // Create a container for the possible answers
    this.questionAnswers = document.createElement("div");
    this.questionAnswers.classList.add("answers");

    // Loop through each answer and create the corresponding button
    for (let i = 0; i < this.value.answers.length; i++) {
      const ansObj = this.value.answers[i];
      let answer = createAnswer(ansObj); // Create the answer button

      // Add an event listener to handle answer selection
      answer.onclick = (ev) => {
        // If an answer was previously selected, remove its "selected" class
        if (this.selectedAnswer !== null) {
          this.selectedAnswer.html.classList.remove("selected");
        }

        // Add the "selected" class to the newly selected answer
        answer.classList.add("selected");

        // Dispatch a custom event to indicate the question has been answered
        this.html.dispatchEvent(
          new CustomEvent("question-answered", {
            detail: {
              answer: ansObj,
              answerHtml: answer,
            },
          })
        );
      };
      this.questionAnswers.appendChild(answer); // Add the answer button to the answers container
    }

    // Create a container for the question feedback (correct/incorrect response)
    this.questionFeedback = document.createElement("div");
    this.questionFeedback.classList.add("question-feedback");

    // Append all created elements to the question HTML
    this.html.appendChild(this.questionText);
    this.html.appendChild(this.questionAnswers);
    this.html.appendChild(this.questionFeedback);

    // Add an event listener for when a question is answered
    this.html.addEventListener("question-answered", this.onQuestionAnswered);

    return this.html; // Return the complete HTML structure for the question
  };

  // Disable the question (e.g., after it has been answered)
  this.disable = function () {
    this.html.classList.add("disabled");

    // Disable each answer button and remove its click event
    let answers = this.html.querySelectorAll(".answers button");
    for (let i = 0; i < answers.length; i++) {
      let answer = answers[i];
      answer.onclick = null;
      answer.disabled = true;
    }
  };

  // Update the feedback based on the selected answer
  this.update = function () {
    // Define the feedback messages for correct and incorrect answers
    let correctFeedback = "Nice 🌟 !  You got it right 🌟 ✔️.";
    let incorrectFeedback = "Oh ! 😔 Not the correct Answer.";

    // If an answer has been selected, update the feedback
    if (this.selectedAnswer != null) {
      if (this.selectedAnswer.value.isCorrect) {
        // If the answer is correct, highlight it and show the correct feedback
        this.selectedAnswer.html.classList.add("correct-answer");
        this.questionFeedback.innerHTML = correctFeedback;
        this.questionFeedback.classList.add("correct-feedback");
        this.questionFeedback.classList.remove("incorrect-feedback");
      } else {
        // If the answer is incorrect, highlight it and show the incorrect feedback
        this.selectedAnswer.html.classList.add("incorrect-answer");
        this.questionFeedback.innerHTML = incorrectFeedback;
        this.questionFeedback.classList.add("incorrect-feedback");
        this.questionFeedback.classList.remove("correct-feedback");
      }
    }
  };

  // Function to create an answer button
  function createAnswer(obj) {
    if (
      !obj ||
      typeof obj.text !== "string" ||
      typeof obj.isCorrect !== "boolean"
    ) {
      throw new Error("Invalid answer object");
    }

    let value = Object.assign({ text: "Answer", isCorrect: false }, obj);

    let html = document.createElement("button");
    html.classList.add("answer");

    html.textContent = value.text;
    return html;
  }
};
