var startButton = document.getElementById("start-btn");
var questionEl = document.getElementById("question");
var answerA = document.getElementById("answer-a");
var answerB = document.getElementById("answer-b");
var answerC = document.getElementById("answer-c");
var answerD = document.getElementById("answer-d");

answerA.setAttribute("class", "hide");
answerB.setAttribute("class", "hide"); 
answerC.setAttribute("class", "hide");
answerD.setAttribute("class", "hide");

var startQuiz = function () {
    startButton.setAttribute("class", "hide");
    answerA.removeAttribute("class", "hide");
    answerB.removeAttribute("class", "hide");
    answerC.removeAttribute("class", "hide");
    answerD.removeAttribute("class", "hide");
    // questionEl.textContent = "Question numero uno!";
    questionEl.textContent = questionBank[0].question;
    answerA.textContent = questionBank[0].answerA;
    answerB.textContent = questionBank[0].answerB;
    answerC.textContent = questionBank[0].answerC;
    answerD.textContent = questionBank[0].answerD;
};

startButton.addEventListener("click", startQuiz);



var nextQuestion = function() {

}

var selectAnswer = function() {

}

var timer = function() {

}

var questionBank = [
    {
        question: "This is the first question.",
        answerA: "Answer A",
        answerB: "Answer B",
        answerC: "Answer C",
        answerD: "Answer D"
    },
    {
        question: "This is the second question.",
        answerA: "Answer A",
        answerB: "Answer B",
        answerC: "Answer C",
        answerD: "Answer D"
    }
];


// for (var i = 0; i < questionBank.length; i++) {
//     console.log("This is where code to loop through questions goes.");

// }





// buttonEl.addEventListener("click", function() {
//     alert("button clicked");
// });


// var createQuestionHandler = function (event) {
//     event.preventDefault();


// }

