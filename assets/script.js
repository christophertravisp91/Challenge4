let question = {
        title: "Which are the acceptable containment elements for an Array?",
        choice: [" {} ", " () ", " [] ", " :: "],
        correctAnswer: 2,

        title: "What does API stand for?",
        choice: ["Application Programming Interface", "Application Product Integration", "Application Product Interface", "Application Production Information"],
        correctAnswer: 2,

        title: "Which tag links java script to the html?",
        choice: ["<link>", "<href>", "<src>", "<script>"],
        correctAnswer: 2,

        title: "What saves items to local storage?",
        choice: ["getItem", "setItem", "removeItem", "addItem"],
        correctAnswer: 2,
    };


function showQuestion(q) {
    let titleDiv  = document.getElementById( "title");

    titleDiv.textContent = q.title;

    let ch = document.querySelectorAll(".choice")
    
    ch.forEach(function(element, index){
        element.textContent = q.choice[index];

        element.addEventListener("click", function(){
            if(q.correctAnswer == index) {
                console.log("Correct!");
            }
            else {
                console.log("Wrong!");
            }
        });
    });
}

showQuestion(question);

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    console.log("Clicked!");
});

(function() {
    function startTimer(){
    var sec = 60;
    var timer = setInterval(function(){
        document.getElementById("Timer").innerHTML=':'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            alert("Time is up!")
        }
    }, 1000);
}
    document.getElementById("incorrect").addEventListener("click", function() {
        sec -= 5;
        document.getElementById("Timer").innerHTML=":"+sec;
    });
    startTimer();
    });

// Adding High Scores to Local Storage

const NO_OF_HIGH_SCORES = 10;
const HIGH_SCORES = "highScores";
const highScoreString = localStorage.getItem(HIGH_SCORES);
const highScores = JSON.parse(highScoreString) ?? [];
const lowestScore = highScores[NO_OF_HIGH_SCORES — 1] ? .score ?? 0;


function checkHighScore(score) {
    const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
    const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;
    
    if (score > lowestScore) {
      saveHighScore(score, highScores); // TODO
      showHighScores(); // TODO
    }
}

function gameOver() {
    // Other game over logic.
    checkHighScore(account.score);
}