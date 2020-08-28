//select all elements
var begin= document.querySelector (".start-btn");
var question= document.querySelector ("#questions");
var answers= document.querySelector ("#answers");
var choiceA= document.querySelector (".a");
var choiceB= document.querySelector (".b");
var choiceC= document.querySelector (".c");
var choiceD= document.querySelector (".d");
var timer= document.querySelector ("#timer");
var score= document.querySelector ("hsBtn");


//create questions

let questions = [
    {
    question:"What does HTML stand for?",
    choiceA:"A) Helix Time Module language",
    choiceB:"B) Helping Text Manual Language",
    choiceC:"C) Hyper Text Markup Language",
    choiceD:"D) Honer Type Madeup Language",
    correct:"c"

},{
    question:"",
    choiceA:"",
    choiceB:"",
    choiceC:"",
    choiceD:"",
    correct:""

},{
    question:"",
    choiceA:"",
    choiceB:"",
    choiceC:"",
    choiceD:"",
    correct:""

},{
    question:"",
    choiceA:"",
    choiceB:"",
    choiceC:"",
    choiceD:"",
    correct:""

},{
    question:"",
    choiceA:"",
    choiceB:"",
    choiceC:"",
    choiceD:"",
    correct:""

}
];

//variables for the questions to help array of object loop

var lastQuestion = questions.length;
var runQuestion=0;
var count = 0;
var questionTimmer = 15;
var time;
var score=0;

//render question
function displayQuestion(){
    var q=questions[runQuestion];
    question.textContent = q.question;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;
}


//timer
function counter(){
    if (count<=questionTimmer){
        timer.textContent = "Time: " +count;
        count++
        
    }else{
        count=0;
        answerIsWrong();
        if(runQuestion < lastQuestion){
            runQuestion++;
            displayQuestion();
        }else{
            clearInterval(time);
            
        }
    }
}


// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}


// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}




//show questions when clicked
function startQuiz(){
    begin.getElementsByClassName.display ="none";
    displayQuestion();
    answers.getElementsByClassName.display="block";
    counter();
    time = setInterval(counter,1000);
}
begin.addEventListener("click", startQuiz);