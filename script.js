var startBtn = document.querySelector(".start-button");
var Quiz_box1 = document.querySelector(".Quiz-box1");
var Quiz_box2 = document.querySelector(".Quiz-box2")
var Quiz_box3 = document.querySelector(".Quiz-box3")
var seconds = document.querySelector(".seconds");
var Question= document.querySelector(".Question");
var choice_list = document.querySelector(".choice-list");
var choice = document.querySelector(".choice");
var options = document.querySelectorAll(".option");
var onQuestion = 1;
var timer = 60;


function startQuiz() {
    Quiz_box1.style.display="block";
    startBtn.style.display="none";
    setTime();
}


function setTime() { 
    var timerInterval = setInterval(function() {
        timer--;
        seconds.textContent = timer + " seconds left";
        if(timer === 0) {
            clearInterval(timerInterval);
        }
      }, 1000);
    }

    startBtn.addEventListener("click", startQuiz); 

    for (i=0; i<options.length; i++) {
        options[i].addEventListener("click",function(event){
            var userchoice = event.target.getAttribute("choice");
            onQuestion++;
            if (onQuestion===2){
                Quiz_box1.style.display="none"
                Quiz_box2.style.display="block"
            }
            else if (onQuestion===3) {
                Quiz_box2.style.display="none"
                Quiz_box3.style.display="block"
            }
        })
    }



