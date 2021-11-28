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

