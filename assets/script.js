let question = {
        title: "Which are the acceptable containment elements for an Array?",
        choice: [" {} ", " () ", " [] ", " :: "],
        correctAnswer: 2
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















function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
        
            timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        showScore();
        }
    }, 1000);
}