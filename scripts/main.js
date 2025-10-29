// Quiz data for all pages
const quizzes = {
    // Page 4 - First Question
    page4: {
        questionId: "theFirstQuestion",
        buttonContainerId: "answer-buttons",
        question: "How many Americans have experienced workplace Microaggressions?",
        answers: [
            {text: "26%", correct: true},
            {text: "10%", correct: false},
        ],
        feedback: "According to a survey by SurveyMonkey and Fortune it's 26%."
    },
    
    // Page 5 - Second Question
    page5: {
        questionId: "theSecondQuestion",
        buttonContainerId: "answer-buttons2",
        question: "How many Americans have admitted witnessing microaggressions in the workplace?",
        answers: [
            {text: "36%", correct: true},
            {text: "62%", correct: false},
        ],
        feedback: "According to a survey by SurveyMonkey and Fortune it's 36%"
    },
    
    // Page 20 - Third Question
    page20: {
        questionId: "theThirdQuestion",
        buttonContainerId: "answer-buttons20",
        question: "What is a microaggression?",
        answers: [
            {text: "Overt racists statements directed at marginalised groups", correct: false},
            {text: "Actions and/or statements that can be intentional or unintentional that ultimately show discrimination and bias", correct: true},
        ],
        feedback: "Microaggressions are sometimes unintentional and often subtle"
    },
    
    // Page 38 - Fourth Question
    page38: {
        questionId: "theFourthQuestion",
        buttonContainerId: "answer-buttons38",
        question: "Did Tony intentionally mean to cause Joy to feel this way?",
        answers: [
            {text: "Yes", correct: false},
            {text: "No", correct: true},
        ],
        feedback: "No, he didn't. He meant it as a complement. However, it's not the intent that counts it's the impact it has on the other person."
    },
    
    // Page 45 - Fifth Question
    page45: {
        questionId: "theFifthQuestion",
        buttonContainerId: "answer-buttons45",
        question: "Can Alice's comment be perceived any other way than positive?",
        answers: [
            {text: "Yes", correct: true},
            {text: "No", correct: false},
        ],
        feedback: "Many comments, including this one, can be perceived in more than one way."
    }
};

// Generic reset function
function resetState(buttonContainer) {
    while(buttonContainer.firstChild) {
        buttonContainer.removeChild(buttonContainer.firstChild);
    }
}

// Generic show question function
function showQuestion(quizData) {
    const questionElement = document.getElementById(quizData.questionId);
    const answerButtons = document.getElementById(quizData.buttonContainerId);
    
    if (!questionElement || !answerButtons) {
        return; // Skip if elements don't exist on this page
    }
    
    resetState(answerButtons);
    questionElement.innerHTML = quizData.question;

    quizData.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.classList.add("quiz-btn");
        // ensure dataset is set for both true and false
        button.dataset.correct = answer.correct;
        answerButtons.appendChild(button);

        button.addEventListener("click", function(e) {
            selectAnswer(e, answerButtons);
        });
    });
}

// Generic answer selection function
function selectAnswer(e, answerButtons) {
    const selectedBtn = e.target;

    // Apply colors to all buttons based on their correctness and disable them
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
        button.disabled = true;
    });

    // Show feedback for the current quiz (if provided)
    const feedbackDiv = answerButtons.closest('.padding-wrapper')?.querySelector('.feedback');
    const currentPage = Object.values(quizzes).find(quiz => quiz.buttonContainerId === answerButtons.id);
    if (feedbackDiv && currentPage && currentPage.feedback) {
        feedbackDiv.textContent = currentPage.feedback;
        feedbackDiv.classList.add('show-feedback');
    }
}

// Initialize quizzes based on which page we're on
function initializeQuizzes() {
    // Try to initialize each quiz - it will only run if the elements exist on the page
    Object.values(quizzes).forEach(quizData => {
        showQuestion(quizData);
    });
}

// Run initialization when page loads
initializeQuizzes();



// AUDIO FOR JOY'S MUSIC

// Selecting the button and the audio
  const audioButton = document.querySelector('.audio-btn');
  const audioClip = document.getElementById('microaggressions-audio');

  // Adding a click event listener (guarded for pages without audio)
  if (audioButton && audioClip) {
    audioButton.addEventListener('click', () => {
      audioClip.currentTime = 0;
      audioClip.play();
    });
  }



//   PROGRESS BAR
document.addEventListener("DOMContentLoaded", function () {
  const totalPages = 70;

  // Map of all filenames to their sequential page numbers
  const pageMap = {
    'index.html': 1,
    '2-did-you-know.html': 2,
    '3-unintentional.html': 3,
    '4-workplace-microaggressions.html': 4,
    '5-workplace-microaggressions-witnessed.html': 5,
    '6-not-just-america.html': 6,
    '7-its-a-tough-topic.html': 7,
    '8-no-judgement.html': 8,
    '9-seek-support.html': 9,
    '10-learning.html': 10,
    '11-not-just-a-black-thing.html': 11,
    '12-short-course.html': 12,
    '13-start-of-joys-story.html': 13,
    '14-joy-encountering-microaggressions.html': 14,
    '15-leaving.html': 15,
    '16-four-examples.html': 16,
    '17-is-this-you.html': 17,
    '18-stop.html': 18,
    '19-know-what-it-is.html': 19,
    '20-what-is-a-microaggression.html': 20,
    '21-rewind.html': 21,
    '22-touch-your-hair.html': 22,
    '23-sasha.html': 23,
    '24-sasha-your-hair-is-cool.html': 24,
    '25-what-did-i-do.html': 25,
    '26-Carl-Hagenbeck.html': 26,
    '27-taking-african-tribes.html': 27,
    '28-zoos-existed-till-1958.html': 28,
    '29-like-petting-at-a-zoo.html': 29,
    '30-uncomfortable.html': 30,
    '31-creepy.html': 31,
    '32-your-so-articulate.html': 32,
    '33-tony.html': 33,
    '34-tony-impressed.html': 34,
    '35-take-a-moment.html': 35,
    '36-inarticulate.html': 36,
    '37-exhausted.html': 37,
    '38-was-it-intentional.html': 38,
    '39-dig-deeper.html': 39,
    '40-imagine.html': 40,
    '41-its-the-impact.html': 41,
    '42-i-don-see-color.html': 42,
    '43-meet-alice.html': 43,
    '44-when-i-look-at-you.html': 44,
    '45-alices-comment-quiz.html': 45,
    '46-why.html': 46,
    '47-trying-to-be-inclusive.html': 47,
    '48-joys-experience-of-life.html': 48,
    '49-joy-disappointed.html': 49,
    '50-sharing-perspectives.html': 50,
    '51-white-peoples-music.html': 51,
    '51a-lunch-time.html': 52,
    '51b-country-and-western.html': 53,
    '52-joys-music.html': 54,
    '53-what-you-listening-to.html': 55,
    '54-dr-dre.html': 56,
    '55-joy-regrets.html': 57,
    '56-anyone.html': 58,
    '57-cuts.html': 59,
    '58-understanding.html': 60,
    '59-what-next.html': 61,
    '60-google-it.html': 62,
    '61-new-connections.html': 63,
    '62-stepping-out.html': 64,
    '63-delve-deeper.html': 65,
    '64-you-got-this.html': 66,
    '64a-references-start.html': 67,
    '65-references-1.html': 68,
    '66-references-2.html': 69,
    '67-the-end-restart.html': 70
  };

  // Determine current page number
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf('/') + 1);

  // Get the page number from the map, default to 1
  const currentPage = pageMap[filename] || 1;

  console.log("Filename:", filename, "Current Page:", currentPage);

  // Update localStorage for furthest page visited (separate from current display)
  const storedProgress = parseInt(localStorage.getItem("courseProgress")) || 1;
  const highestPage = Math.max(currentPage, storedProgress);
  localStorage.setItem("courseProgress", highestPage);

  // Calculate percentages
  const previousPercent = Math.round((storedProgress / totalPages) * 100);
  const progressPercent = Math.round((highestPage / totalPages) * 100);

  // Update progress bar
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressPercent");

  if (progressBar) {
    // Set immediately to previous without transition to avoid flicker
    const originalTransition = progressBar.style.transition;
    progressBar.style.transition = 'none';
    progressBar.style.width = previousPercent + '%';

    // Force reflow, then animate only if we've advanced
    // eslint-disable-next-line no-unused-expressions
    progressBar.offsetWidth;
    if (highestPage > storedProgress) {
      progressBar.style.transition = originalTransition || 'width 0.3s ease';
      requestAnimationFrame(() => {
        progressBar.style.width = progressPercent + '%';
      });
    } else {
      // No animation if not advancing
      progressBar.style.transition = 'none';
      progressBar.style.width = progressPercent + '%';
    }
  }
  if (progressText) {
    progressText.textContent = progressPercent + "%";
  }
});




// REPLAY BUTTON

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const replayButton = document.querySelector(".replay");

  if (replayButton) {
    replayButton.addEventListener("click", function (event) {
      // Clear stored course progress
      localStorage.removeItem("courseProgress");

      // Optionally log or confirm (for debugging)
      console.log("Course progress reset.");

      // Allow normal navigation (no need to preventDefault)
      // The user will be taken back to the home page via the <a> link
    });
  }
});



