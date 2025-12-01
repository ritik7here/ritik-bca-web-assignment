const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questionList = [
    { question: "Who is our DEAN?", answer: "Dr. Pankaj Aggarwal" },
    { question: "Our College name (short form)?", answer: "KRMU" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Who is the best faculty of web dev?", answer: "Vishal Sir" },
    { question: "Which language is used for web development?", answer: "JavaScript" }
];

let currentScore = 0;
let questionNumber = 0;

function startQuiz() {
    if (questionNumber === questionList.length) {
        console.log("------------------------------");
        console.log("Game Over! Final Score: " + currentScore + " / " + questionList.length);
        reader.close();
        return;
    }

    let currentQuestion = questionList[questionNumber].question;
    let actualAnswer = questionList[questionNumber].answer;

    reader.question(currentQuestion + " ", function(response) {
        let studentAnswer = response.trim().toLowerCase();
        let correctAnswer = actualAnswer.trim().toLowerCase();

        if (studentAnswer === correctAnswer) {
            console.log("Correct!");
            currentScore = currentScore + 1;
        } else {
            console.log("Wrong! The answer was: " + actualAnswer);
        }

        console.log("------------------------------");
        questionNumber = questionNumber + 1;
        startQuiz();
    });
}

console.log("Quiz Starting... (Type answer and press Enter)");
startQuiz();
