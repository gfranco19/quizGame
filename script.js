//select all elements
var begin= document.querySelector (".start-button");
var next= document.querySelector ("next-btn");
var question= document.querySelector ("#questions");
var choiceA= document.querySelector (".a");
var choiceB= document.querySelector (".b");
var choiceC= document.querySelector (".c");
var choiceD= document.querySelector (".d");
var timer= document.querySelector ("#timmer");
var score= document.querySelector ("hsButn");


//create questions

let questions = [
    {
    question:"What does HTML stand for",
    choiceA:"helix time module language",
    choiceB:"Helping Text Manual Language",
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

const lastQuestion = questions.length;
let runQuestion=0;

//render question
function displayQuestion(){
    let q=questions[runQuestion];
    question.textContent += q.question;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;
}
displayQuestion();
