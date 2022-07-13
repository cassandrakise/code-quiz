// defined variables
var startBtn = document.getElementById("startBtn");
startBtn.addEventListener('click', startQuiz);

var homePageHighScore = document.getElementById("homePageHighScore");
var startPage = document.getElementById("startPage");
var game = document.getElementById("game");
var timer = document.getElementById("timer");
var questions = document.getElementById("questions");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var scores = document.getElementById("scores");
var timeUp = document.getElementById("timeUp");
var finalScore = document.getElementById("finalScore");
var highScoreList = document.getElementById("highScoreList");
var highScorePage = document.getElementById("highScorePage");
var highScoreTitle = document.getElementById("highScoreHeader");
var highScoreInitials = document.getElementById("highScoreInitials");
var highScoreNumber = document.getElementById("highScoreNumber");
var exitOutBtn = document.getElementById("exitOutBtn");
var tryAgain = document.getElementById("playAgain");
var clearHighScore = document.getElementById("clearHighScore");
var userInitials = document.getElementById("initials");
var highScores = JSON.parse(localStorage.getItem("High Scores")) || []


// Array with questions, options, and answers
// Quiz question object
var gameQuestions = [{
    question: "What is NaN property in JavaScript?",
    choiceA: "It represents a logical entity and can have only two values : true or false.",
    choiceB: "NaN property represents the “Not-a-Nanny” value.",
    choiceC: "NaN property represents the “Not-a-Number” value. ",
    choiceD: "NaN will return a blank screen.",
    correctAnswer: "c"},
  {
    question: "What is recursion in a programming language?",
    choiceA: "Recursion is a technique to iterate over an operation by having a function call itself repeatedly until it arrives at a result.",
    choiceB: "When the browser tries to render an HTML document, it creates an object based on the HTML document called recursion. ",
    choiceC: "Its when you bite your tongue instead of cursing.",
    choiceD: "Both rest parameter and spread operator were introduced in the ES6 version of javascript.",
    correctAnswer: "a"},
   {
    question: "What do you mean by Self Invoking Functions?",
    choiceA: "The ability of a function to remember the variables and functions that are declared in its outer scope.",
    choiceB: "Without being requested, a self-invoking expression is automatically invoked (initiated).",
    choiceC: "A function declaration cannot be invoked by itself.",
    choiceD: "It just does what it wants.",
    correctAnswer: "b"},
    {
    question: "What are callbacks?",
    choiceA: "Without being requested, a self-invoking expression is automatically invoked (initiated).",
    choiceB: "A selectable feature of leaving a voicemail and ensuring that receiving party has your phone number (in lieu of saying it).",
    choiceC: "A form of caching where the return value of a function is cached based on its parameters.",
    choiceD: "A callback is a function that will be executed after another function gets executed. ",
    correctAnswer: "d"},
    {
    question: "What does WWW stand for?",
    choiceA: "World Wide Web",
    choiceB: "Wikipedia Wonder World",
    choiceC: "Widget Worry Worts",
    choiceD: "We Won't Work",
    correctAnswer: "a"},
    {
    question: "How is JavaScript different from Java?",
    choiceA: "They are synonymous.",
    choiceB: "JavaScript is a programming language, Java is an island in Indonesia",
    choiceC: "Java is a programming language, whereas JavaScript is essentially a scripting language.",
    choiceD: "JavaScript is a programming language, whereas Java is essentially a scripting language.",
    correctAnswer: "c"},
    {
    question: "What are the advantages of JavaScript over other web technologies?",
    choiceA: "All of the advantages. Just all of them!",
    choiceB: "JavaScript adds interaction to otherwise static web pages and makes them react to users’ inputs.",
    choiceC: "There is an absolute need for a web page to reload when running JavaScript. For example, form input validation.",
    choiceD: "JavaScript is not a UI-compatible web applications program.",
    correctAnswer: "b"},
    ];
    // Other global variables
var finalQuestionIndex = gameQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 76;
var timerInterval;
var score = 0;
var correct;
    // This function cycles through the object array containing the quiz questions to generate the questions and answers.
function generateQuizQuestion(){
    timeUp.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
    End ()
    return
    }
    var currentQuestion = gameQuestions[currentQuestionIndex];
    questions.innerHTML = "<p>" + currentQuestion.question + "</p>";
    a.innerHTML = currentQuestion.choiceA;
    b.innerHTML = currentQuestion.choiceB;
    c.innerHTML = currentQuestion.choiceC;
    d.innerHTML = currentQuestion.choiceD;
};
var scoreList = document.getElementById("scoreList");
function renderScores() {
    game.style.display = "none";
    startPage.style.display = "none";
    highScoreList.style.display = "block";
    timeUp.style.display = "none";
    highScoreList.style.display = "block"  ;
    for(var i = 0; i < highScores.length; i++) {
        var li = document.createElement("li");
        li.innerText = `initials: ${highScores[i].initials} score: ${highScores[i].score}`;
        scoreList.appendChild(li);
    }
}
// Start Quiz function starts the TimeRanges, hides the start button, and displays the first quiz question.
function startQuiz(){
    timeUp.style.display = "none";
    game.style.display = "block";
    startPage.style.display = "none";
    generateQuizQuestion();
    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Time left: " + timeLeft;
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          End();
        }
      }, 1000);
    questions.style.display = "block";
}
function checkAnswer(choice) {
    console.log(choice)
    if (choice == gameQuestions[currentQuestionIndex].correctAnswer) {
    console.log("Correct");
    score += 1
}
    else {
        timeLeft -= 10;
    }
    currentQuestionIndex++
    generateQuizQuestion();
}
function End(){
    clearInterval(timerInterval);
    game.style.display = "none";
    startPage.style.display = "none";
    highScoreList.style.display = "block";
    timeUp.style.display = "block";
}
function submitScore(){
var data = {
initials: userInitials.value,
score: score,
}
highScores.push(data),
localStorage.setItem("High Scores", JSON.stringify(highScores));
renderScores();
}