// Quiz Class
var Quiz = /** @class */ (function () {
    function Quiz(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.initQuiz();
    }
    Quiz.prototype.initQuiz = function () {
        var _this = this;
        this.showQuestion();
        document.getElementById("next-btn").addEventListener("click", function () { return _this.nextQuestion(); });
    };
    Quiz.prototype.showQuestion = function () {
        var _this = this;
        var questionElement = document.getElementById("question");
        var answerButtons = document.getElementById("answer-buttons");
        var nextButton = document.getElementById("next-btn");
        answerButtons.innerHTML = ""; // Clear previous choices
        var currentQuestion = this.questions[this.currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        currentQuestion.choices.forEach(function (choice) {
            var button = document.createElement("button");
            button.textContent = choice;
            button.addEventListener("click", function () { return _this.selectAnswer(choice); });
            answerButtons.appendChild(button);
        });
        nextButton.style.display = "none";
    };
    Quiz.prototype.selectAnswer = function (choice) {
        var currentQuestion = this.questions[this.currentQuestionIndex];
        if (choice === currentQuestion.correctAnswer) {
            this.score++;
        }
        document.getElementById("next-btn").style.display = "block";
    };
    Quiz.prototype.nextQuestion = function () {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
            this.showQuestion();
        }
        else {
            this.showScore();
        }
    };
    Quiz.prototype.showScore = function () {
        document.getElementById("question-container").style.display = "none";
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("score-container").classList.remove("hidden");
        document.getElementById("score").textContent = "".concat(this.score, " / ").concat(this.questions.length);
    };
    return Quiz;
}());
// Sample Questions
var questions = [
    {
        question: "Which of the following is NOT a type of database model?",
        choices: ["Relational", "Hierarchical", "Object-Oriented", "Sequential"],
        correctAnswer: "Sequential"
    },
    {
        question: "What is the primary key in a database?",
        choices: ["A unique identifier for each record", "A foreign key", "A duplicate value in a table", "A key used for encryption"],
        correctAnswer: "A unique identifier for each record"
    },
    {
        question: "Which SQL command is used to retrieve data from a database?",
        choices: ["UPDATE", "SELECT", "DELETE", "INSERT"],
        correctAnswer: "SELECT"
    },
    {
        question: "Which OOP principle promotes code reusability?",
        choices: ["Encapsulation", "Abstraction", "Polymorphism", "Inheritance"],
        correctAnswer: "Inheritance"
    },
    {
        question: "Which of the following is an example of polymorphism?",
        choices: ["Using multiple constructors in a class", "Overloading a method with different parameters", "Hiding data from external access", "Creating an instance of a class"],
        correctAnswer: "Overloading a method with different parameters"
    },
    {
        question: "What will `print(type([]))` output in Python?",
        choices: ["<class 'list'>", "<class 'dict'>", "<class 'tuple'>", "<class 'set'>"],
        correctAnswer: "<class 'list'>"
    },
    {
        question: "Which of the following is a mutable data type in Python?",
        choices: ["Tuple", "String", "List", "Set"],
        correctAnswer: "List"
    },
    {
        question: "What does the acronym CPU stand for?",
        choices: ["Central Processing Unit", "Central Program Unit", "Central Performance Unit", "Core Processing Unit"],
        correctAnswer: "Central Processing Unit"
    },
    {
        question: "Which memory type is volatile?",
        choices: ["ROM", "Cache", "RAM", "Hard Disk"],
        correctAnswer: "RAM"
    },
    {
        question: "Which of the following is NOT an operating system?",
        choices: ["Windows", "Linux", "Python", "MacOS"],
        correctAnswer: "Python"
    }
];
// Initialize Quiz
var quiz = new Quiz(questions);
