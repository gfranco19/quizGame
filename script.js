//select all elements
var begin= document.querySelector (".start-btn");
var question= document.querySelector ("#questions");
var answers= document.querySelector ("#answers");
var choiceA= document.querySelector (".a");
var choiceB= document.querySelector (".b");
var choiceC= document.querySelector (".c");
var choiceD= document.querySelector (".d");
var timer= document.querySelector ("#timer");
var score= document.querySelector ("#score");
var finishBtn= document.querySelector (".finish-btn");



//create questions

let questions = [
    {
    question:"What does HTML stand for?",
    choiceA:"A) Helix Time Module language",
    choiceB:"B) Helping Text Manual Language",
    choiceC:"C) Hyper Text Markup Language",
    choiceD:"D) Honer Type Madeup Language",
    correctAnsw:"c"

},{
    question:"Which one is a propper function?",
    choiceA:"A) function;",
    choiceB:"B) 'function';",
    choiceC:"C) function));",
    choiceD:"D) function();",
    correctAnsw:"d"

},{
    question:"What is the first step in any coding project?",
    choiceA:"A) Html",
    choiceB:"B) Psuedo code",
    choiceC:"C) Css",
    choiceD:"D) Java",
    correctAnsw:"b"

},{
    question:"What function can you use to help with testing and debugging your code?",
    choiceA:"A) console.log();",
    choiceB:"B) inspect ();",
    choiceC:"C) check();",
    choiceD:" Window();",
    correctAnsw:"a"

},{
    question:"how do you mark notes in a Html file?",
    choiceA:"A) //",
    choiceB:"B) --",
    choiceC:"C) <!-- -->",
    choiceD:"!<-- -->",
    correctAnsw:"c"

}
];

//variables for the questions to help array of object loop

var lastQuestion = questions.length;
var runQuestion=0;
var count = 0;
var questionTimmer = 120;
var time;
var score=0;
var correct;
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
       
        if(runQuestion < lastQuestion){
            runQuestion++;
            displayQuestion();
        }else{
            clearInterval(time);
            
        }
    }
}


// This function checks the response to each answer 
function checkAnswer(event){
    answer = event.target.getAttribute('data-value');
    correct = questions[runQuestion].correctAnsw;

    if (answer === correct && runQuestion !== lastQuestion){
        score++;
        alert("That Is Correct!");
        runQuestion++;
        displayQuestion();
        //display in the results div that the answer is correct.
    }else if (answer !== correct && runQuestion !== lastQuestion){
        alert("That Is Incorrect.")
        runQuestion++;
        displayQuestion();
        //display in the results div that the answer is wrong.
    }
}

//to finish quiz and show score
function finish(){
    var x = score;
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  score.textContent ="Score: " + score;
console.log(score);




//show questions when clicked
function startQuiz(){
    begin.getElementsByClassName.display ="none";
    displayQuestion();
    answers.getElementsByClassName.display="block";
    counter();
    time = setInterval(counter,1000);
    
}
choiceA.addEventListener("click",checkAnswer);
choiceB.addEventListener("click",checkAnswer);
choiceC.addEventListener("click",checkAnswer);
choiceD.addEventListener("click",checkAnswer);
begin.addEventListener("click", startQuiz);
finishBtn.addEventListener("click", finish);