// created function quiz that get the score ,question and the number of question

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 // return the question
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 //check if the answer is correct and add score if answer is correct and move to the next question
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 //function that end quiz when question length is equal to question index
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 // created function question that has three parameter
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 //check if the answer is equal to choice choose by user
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 //add all the score at end and display
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 //function that gets the choice of the user and moves to the next quiz 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 //function that show your progression of question by counting
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 //function that adds score
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("What should be the table width, so that the width of a table adjust to the current width of the browser window?", ["640 pixels", "100%","full-screen", "1024 px"], "100%"),
    new Question("HTML is what type of language ?", ["Scripting Language", "Markup Language", "Programming Language", "Network Protocol"], "Markup Language"),
    new Question("How can we write comment along with CSS code ?", ["/* a comment */", "// a comment //","/ a comment /", "<' a comment'>"], "/* a comment */"),
    new Question("How will you make all paragraph elements 'RED' in color ?", ["p.all {color: red;}", "p.all {color: #990000;}", "all.p {color: #998877;}", "p {color: red;}"], "p {color: red;}"),
    new Question("By default Hyperlinks are displayed with an underline. How do you remove the underline from all hyperlinks by using CSS code ?", ["a {text: no-underline;}", "a {text-decoration:none;}", "a {text-style: no-underline;}", "a {text-decoration: no-underline;}"], "a {text-decoration:none;}")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();