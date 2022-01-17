var startButton = document.querySelector("#start-btn");
var questionEl = document.querySelector("#question");
var answerButtonEl = document.querySelector("#answers");
var answerA = document.querySelector("#answer-a");
var answerB = document.querySelector("#answer-b");
var answerC = document.querySelector("#answer-c");
var answerD = document.querySelector("#answer-d");
var answerConfirm =document.querySelector("#answer-confirm");
var timer = document.querySelector("#timer");
var score = document.querySelector("#score");
var initials = document.querySelector("#initials");
var highScores = document.querySelector("#high-scores");
var scoreList = document.querySelector("#score-list")

var count = 50;
var questionAmount = 5
questionCounter = 0
score.style.display = "none";
initials.style.display = "none";
scoreList.style.display = "none";

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
        question: "Where is the correct place to insert a JavaScript?",
        answer1: "A) The <body> section",
        answer2: "B) The <head> section",
        answer3: "C) The <header> section",
        answer4: "D) All of these",
        correct: "A) The <body> section",
    },
    {
        question: "How do you write \"Hello World\" in an alert box?",
        answer1: "A) msg(\"Hello World\");",
        answer2: "B) alertBox(\"Hello World\");",
        answer3: "C) alert(\"Hello World\");",
        answer4: "D) msgBox(\"Hello World\");",
        correct: "C) alert(\"Hello World\");",
    },
    {
        question: "How do you create a function in JavaScript?",
        answer1: "A) function = myFunction()",
        answer2: "B) function {myFunction()}",
        answer3: "C) function:myFunction()",
        answer4: "D) var function()",
        correct: "A) function = myFunction()",
    },
    {
        question: "How to write and IF statement in JavaScript?",
        answer1: "A) if(i == 5)",
        answer2: "B) if i == 5 then",
        answer3: "C) if i = 5 then",
        answer4: "D) if i = 5",
        correct: "A) if(i == 5)",
    },
];

// timer function reduces by 1 every second, and reduces and additional 10 for wrong answers
//**TO DO: make timer reduce by 10 for wrong answers */
var startTimer = function() {
var timeInterval = setInterval(function() {
    timer.innerHTML = "Timer: " + count--;
    if(count == 0) {
        clearInterval(timeInterval);
        // endQuiz();
    }
    }, 1000); 
};

// when startButton is clicked, startButton disappears and first question/answers appear
var startQuiz = function () {
    questionCounter = 0
    startTimer();

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
};

// displays the next question to answer
var nextQuestion = function() {
   var correctAnswer = console.log("Correct answer is: " + questionBank[questionCounter].correct)
    
   questionCounter++

   questionEl.textContent = questionBank[questionCounter].question;
   answerA.textContent = questionBank[questionCounter].answer1;
   answerB.textContent = questionBank[questionCounter].answer2;
   answerC.textContent = questionBank[questionCounter].answer3;
   answerD.textContent = questionBank[questionCounter].answer4;

   if (questionAmount - 1 <= questionCounter) {
       endQuiz();
   }
}

// write function to look at the clicked on answer to determine if it's correct
function correctConfirm() {

};

var endQuiz = function() {
    questionEl.textContent = "All Done! Your score is " + count;
    answerA.style.display = "none";
    answerB.style.display = "none";
    answerC.style.display = "none";
    answerD.style.display = "none";
    score.style.display = "table-row";
    initials.style.display = "table-row";   
}
     
// when startButton is clicked, startQuiz runs
startButton.addEventListener("click", startQuiz);

// when an answerButtonEl is clicked, the nextQuestion function runs
answerButtonEl.addEventListener("click", nextQuestion);

highScores.addEventListener("click", viewScores);

// submits score and initials to localStorage
score.addEventListener("click", function(event) {
    event.preventDefault();
    var highScore = event.target;
        localStorage.setItem("initials", JSON.stringify(initials));
        localStorage.setItem("score", JSON.stringify(count));

        viewScores();
    });

var viewScores = function() {
    questionEl.textContent = "High Scores:"
    console.log(localStorage.getItem("initials"));
    console.log(localStorage.getItem("score"));
    score.style.display = "none";
    initials.style.display = "none";
    scoreList.style.display = "table-column";

    scoreList.textContent = localStorage.getItem(initials) + localStorage.getItem(score);
}
