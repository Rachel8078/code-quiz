var question = document.querySelector("#question")
var answers = Array.from(document.querySelectorAll(".answers"));

var startButton = document.querySelector("#start-btn");
var questionEl = document.querySelector("#question");
var answerButtonEl = document.querySelector("#answers");
var answerA = document.querySelector("#answer-a");
var answerB = document.querySelector("#answer-b");
var answerC = document.querySelector("#answer-c");
var answerD = document.querySelector("#answer-d");
var answerConfirm =document.querySelector("#answer-confirm");
var timer = document.querySelector("#timer");

var questionCounter = 0

// array containing questions and answers
var questionBank = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer1: "A) <script>",
        answer2: "B) <scripting>",
        answer3: "C) <js>",
        answer4: "D) <javascript>",
        correct: "A) <script>",
    },
    {
        question: "Question 2",
        answer1: "A) option",
        answer2: "B) option",
        answer3: "C) option",
        answer4: "D) option",
        correct: "B) option",
    },
    {
        question: "Question 3",
        answer1: "A) 3",
        answer2: "B) 3",
        answer3: "C) 3",
        answer4: "D) 3",
        correct: "D) 3",
    },
    {
        question: "Question 4",
        answer1: "A) 4",
        answer2: "B) 4",
        answer3: "C) 4",
        answer4: "D) 4",
        correct: "C) 4",
    },
    {
        question: "Question 5",
        answer1: "A) 5",
        answer2: "B) 5",
        answer3: "C) 5",
        answer4: "D) 5",
        correct: "B) 5",
    },
];

// when startButton is clicked, startButton disappears and first question/answers appear
var startQuiz = function () {
    questionCounter = 0
    timer.textContent = "Timer: " + 100

    startButton.style.display = "none";
    answerA.style.display = "table-column";
    answerB.style.display = "table-column";
    answerC.style.display = "table-column";
    answerD.style.display = "table-column";
    
    questionEl.textContent = questionBank[questionCounter].question;
    answerA.textContent = questionBank[questionCounter].answer1;
    answerB.textContent = questionBank[questionCounter].answer2;
    answerC.textContent = questionBank[questionCounter].answer3;
    answerD.textContent = questionBank[questionCounter].answer4;
}

var nextQuestion = function() {
   var correctAnswer = alert("Correct answer is: " + questionBank[questionCounter].correct)
    
   questionCounter++
   score();

   questionEl.textContent = questionBank[questionCounter].question;
   answerA.textContent = questionBank[questionCounter].answer1;
   answerB.textContent = questionBank[questionCounter].answer2;
   answerC.textContent = questionBank[questionCounter].answer3;
   answerD.textContent = questionBank[questionCounter].answer4;
   
}

// write function to look at the clicked on answer to determine if it's correct
function correctConfirm() {

};
    

// the timer needs to start when startButtonEl is clicked
// timer should start with time of x and reduce by y every time an answer is selected
// if the wrong answer is chosen timer should reduct by 10
var score = function() {
    if (questionBank.correct === correct) {
    timer -= 5
    } else {
        timer -= 10
    }
return timer;
}


       
// when startButton is clicked, startQuiz runs
startButton.addEventListener("click", startQuiz);

// when an answerButtonEl is clicked, the nextQuestion function runs
answerButtonEl.addEventListener("click", nextQuestion);