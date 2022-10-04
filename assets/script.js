//variables needed
var startQuizEl = document.getElementById("start-quiz");
var seconds = 61;
var timerInterval;
var quizPage = 0;
var score = 0;

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
        answers :  "Document Object Model" 
    }

]

var highscoreList = [["__", 0],["__", 0],["__", 0],["__", 0],["__", 0]];

//functions needed
function showMenu(){
    document.getElementById("section-menu").style.display = "block";
    document.getElementById("section-instr").style.display = "none";
    document.getElementById("section-highscore").style.display = "none";
    document.getElementById("section-quiz").style.display = "none";
    document.getElementById("section-results").style.display = "none";
    quizPage = 0;
    score = 0;
    seconds = 61
    
}
function showInstr(){
    document.getElementById("section-menu").style.display = "none";
    document.getElementById("section-instr").style.display = "block";
    document.getElementById("section-highscore").style.display = "none";
    document.getElementById("section-quiz").style.display = "none";
    document.getElementById("section-results").style.display = "none";
}
function showHighscore(){
    document.getElementById("section-menu").style.display = "none";
    document.getElementById("section-instr").style.display = "none";
    document.getElementById("section-highscore").style.display = "block";
    document.getElementById("section-quiz").style.display = "none";
    document.getElementById("section-results").style.display = "none";

    renderScores();
}
function showQuiz(){
    document.getElementById("section-menu").style.display = "none";
    document.getElementById("section-instr").style.display = "none";
    document.getElementById("section-highscore").style.display = "none";
    document.getElementById("section-quiz").style.display = "block";
    document.getElementById("section-results").style.display = "none";
}
function showResults(){
    document.getElementById("section-menu").style.display = "none";
    document.getElementById("section-instr").style.display = "none";
    document.getElementById("section-highscore").style.display = "none";
    document.getElementById("section-quiz").style.display = "none";
    document.getElementById("section-results").style.display = "block";
}

//for counthing down time
function time(){
    if(seconds<=0){
        clearInterval(timerInterval);
        makeResults();
        showResults();
        //return;
    }else if(quizPage == quiz.length){
        clearInterval(timerInterval);
        makeResults();
        showResults();
        //return;
    }

    document.getElementById("section-timer").textContent = seconds;
    seconds--;
}

//for the results
function makeResults(){
    document.getElementById("score-results").textContent = seconds ;
}


//This function is use to change questions from the quiz page and also remove the prevous questions.
function renderQuiz(){
    //This changes the questions presented in the <p> tag
    document.getElementById("questions").textContent = quiz[quizPage].questions;
    //o1El will make the answers for the questions
    var olEl = document.getElementById("choices");
    for(var i = 0; i<quiz[quizPage].choices.length; i++){
        //creates a list and a button
        var liEl = document.createElement("li");
        var buttonEl = document.createElement("button");

        //makes the text witin the button equal one of the choices from the quiz object
        buttonEl.textContent = quiz[quizPage].choices[i];
        //when the button is click it will either move to the next question if the questions was right or
        // subtract 10 seconds from time move to the next question
        buttonEl.onclick = function(event){
            console.log(event.target);
            if(event.target.textContent == quiz[quizPage].answers){
                quizPage++;
                //removes the questions 
                while (olEl.firstChild){
                    olEl.removeChild(olEl.lastChild);
                }
                //adds new questions if the length of the quizPage is the same as the quiz
                if(quizPage<quiz.length){
                    renderQuiz();
                }
            }else{
                seconds -= 10;
                quizPage++;
                while (olEl.firstChild){
                    olEl.removeChild(olEl.lastChild);
                }
                if(quizPage<quiz.length){
                    renderQuiz();
                }
            }
        }

        // ol <- li <- button
        liEl.appendChild(buttonEl);
        olEl.appendChild(liEl);
    }
}

function renderScores(){
    var olEl = document.getElementById("score1");
    //gets highscoreList from the localStorage
    highscoreList = JSON.parse(localStorage.getItem("score"));
    //checks if highscoreList is null if it is it will create a list of empty list
    if(highscoreList == null){
        console.log("here");
        highscoreList=[["__", 0],["__", 0],["__", 0],["__", 0],["__", 0]]
        console.log(highscoreList)
    }
    //prints the array
    for(var i = 0; i<highscoreList.length; i++){
        console.log(highscoreList[i][0] + highscoreList[i][1]);
        var liEl = document.createElement("li");
        liEl.textContent = highscoreList[i][0] +" : "+ highscoreList[i][1]
        console.log(liEl)
        olEl.appendChild(liEl);
    }

}

//when the user click the start, the time begins
function startQuiz(){
    showQuiz();
    renderQuiz();
    timerInterval = setInterval(time, 1000);
}

// Start the Quiz
startQuizEl.addEventListener("click", startQuiz);

//document.getElementById("initials").addEventListener("submit",);

//geting to different pages
document.getElementById("go-back1").addEventListener("click", showMenu)
document.getElementById("go-back2").addEventListener("click", showMenu)
document.getElementById("go-back3").addEventListener("click", showMenu)
document.getElementById("go-instr").addEventListener("click", showInstr)
document.getElementById("go-highscores").addEventListener("click", showHighscore)

