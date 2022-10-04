//variables needed
var startQuizEl = document.getElementById("start-quiz");
var seconds = 61;
var timerInterval;
var quizPage = 0;

// object for all the questions needed with their choices and answers.
var quiz = [
    {
        questions : "What does HTML stand for?",
        choices : ["apples","bananas","strawberries", "Hypertext Markup Language"],
        answers :  "Hypertext Markup Language" 
    },

    {
        questions : "What does CSS stand for?",
        choices : ["Crab Station Stop","country side step","Cascading Style Sheets", "pineapples"],
        answers :  "Cascading Style Sheets" 
    },

    {
        questions : "Which one of these is not a primitive type",
        choices : ["ballons","integer","floats", "booleans"],
        answers :  "ballons" 
    },

    {
        questions : "What is 'this' keyword do?",
        choices : ["Nothing","Object above function","CSS", "Jason"],
        answers :  "Object above function" 
    },

    {
        questions : "What does DOM stand for",
        choices : ["Document Object Model","Dancing Ocean Models","Document One Model", "Dude On Mace"],
        answers :  "pineapples" 
    }

]


//functions needed

//for counthing down time
function time(){
    if(seconds<=0){
        clearInterval(timerInterval);
        return;
    }else if()

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
                while (olEl.firstChild){
                    olEl.removeChild(olEl.lastChild);
                }
                renderQuiz();
            }else{
                seconds -= 10;
                quizPage++;
                while (olEl.firstChild){
                    olEl.removeChild(olEl.lastChild);
                }
                renderQuiz();
            }
        }

        liEl.appendChild(buttonEl);
        olEl.appendChild(liEl);
    
    }
}

// function removeElements(parent){
//     while(parent.firstChld){
//         parent.removeChild(parent.lastChild);
//     }
//     if(parent.child == false){
//         istakingQuiz = false;
//     }
// }

//when the user click the start, the time begins
function startQuiz(){
    renderQuiz();
    timerInterval = setInterval(time, 1000);
}

// Start the Quiz
startQuizEl.addEventListener("click", startQuiz);

function goToMain(event){
    
}

