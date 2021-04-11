var startBtn = document.querySelector(".start-button");
var Quiz_box = document.querySelector(".Quiz-box")
var seconds = document.querySelector(".seconds");
var timerEl = 60;

console.log("hello")

function showQuestions() {
    var Questions = document.querySelector(".Question");
    Quiz_box.style.display="block";
    startBtn.style.display="none";
    setTime();
    
}

function setTime() { 
    var timerInterval = setInterval(function() {
        timerEl--;
        seconds.textContent = timerEl + " until quiz is over.";
        if(timerEl === 0) {
            clearInterval(timerInterval);
        }
      }, 1000);
    }

    startBtn.addEventListener("click", showQuestions); 



