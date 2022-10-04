//variables needed
var startQuizEl = document.getElementById("start-quiz");
var seconds = 61;
var timerInterval;
var quizPage = 0

var quiz = [
    {
        questions : "What does HTML stand for?",
        choices : ["apples","bananas","strawberries", "Hypertext Markup Language"],
        answers :  "Hypertext Markup Language" 
    },

    {
        questions : "What does HTML stand for",
        choices : ["apples","bananas","strawberries", "pineapples"],
        answers :  "pineapples" 
    },

    {
        questions : "What does HTML stand for",
        choices : ["apples","bananas","strawberries", "pineapples"],
        answers :  "pineapples" 
    },

    {
        questions : "What does HTML stand for",
        choices : ["apples","bananas","strawberries", "pineapples"],
        answers :  "pineapples" 
    },

    {
        questions : "What does HTML stand for",
        choices : ["apples","bananas","strawberries", "pineapples"],
        answers :  "pineapples" 
    }

]


//functions needed

//for counthing down time
function time(){
    if(seconds<=0){
        clearInterval(timerInterval);
        return;
    }

    document.getElementById("section-timer").textContent = seconds;
    seconds--;
}

function renderQuiz(){
    document.getElementById("questions").textContent = quiz[quizPage].questions;
    var olEl = document.getElementById("choices");
    for(var i = 0; i<quiz[quizPage].choices.length; i++){

        var liEl = document.createElement("li");
        var buttonEl = document.createElement("button");

        buttonEl.textContent = quiz[quizPage].choices[i];
        buttonEl.onclick = function(event){
            console.log(event.target);
            if(event.target.textContent == quiz[quizPage].answers){
                quizPage++;
                renderQuiz();
            }else if(){
                
            }else{
                seconds -= 10;
                quizPage++;
                renderQuiz();
            }
        }

        liEl.appendChild(buttonEl);
        olEl.appendChild(liEl);
    
    }
}

//when the user click the start, the time begins
function startQuiz(){
    renderQuiz();
    timerInterval = setInterval(time, 1000);
}

// Start the Quiz
startQuizEl.addEventListener("click", startQuiz);

function goToMain(event){
    
}

