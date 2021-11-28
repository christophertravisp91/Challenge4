const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll("#choice-text"));
const scoreText = document.querySelector("#score");
const timer = document.querySelector("#timer");

let currentQuestion = {};
let acceptingAnswer = true;
let availableQuestions = {}

let questions = [
    {
        question: "Which are the acceptable containment elements for an Array?",
        choice1: " {} ",
        choice2: " () ",
        choice3: " [] ",
        choice4: " :: ",
        answer: []
    },
    {
        question: "Which are the acceptable containment elements for an Array?",
        choice1: " {} ",
        choice2: " () ",
        choice3: " [] ",
        choice4: " :: ",
        answer: []
    },
    {
        question: "Which are the acceptable containment elements for an Array?",
        choice1: " {} ",
        choice2: " () ",
        choice3: " [] ",
        choice4: " :: ",
        answer: []
    },
    {
        question: "Which are the acceptable containment elements for an Array?",
        choice1: " {} ",
        choice2: " () ",
        choice3: " [] ",
        choice4: " :: ",
        answer: []
    },
]
