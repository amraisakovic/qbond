//getting all required elements

const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .continue");
const quiz_box = document.querySelector(".quiz-box ")
const timeCount = quiz_box.querySelector(".timer .timer-sec");
const timeLine = document.querySelector("header .time_line");


//if Start Quiz Button Clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show the info
}

//if Exit Button Clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide the info
}

//if Continue Button Clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide the info
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuestions(0);
    queCounter(1);
    startTimer(timeValue);
    startTimerLine(0);
}

let que_count = 0;
let que_numb = 1;

const next_btn = quiz_box.querySelector(".next_btn");
//if next clicked

next_btn.onclick = ()=>{
    if(que_count<questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimerLine(widthValue);
    } else {
        console.log("Questions completed");
        showResultBox();
    }
}

let skip_count=0;

const skip_btn = quiz_box.querySelector(".skip_btn");
//if skip clicked
skip_btn.onclick = ()=>{
    if(que_count<questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        startTimer(timeValue);
        skip_count++;
        console.log(skip_count);
    } else {
        console.log("Questions completed");
    }
};

//getting questions from array

function showQuestions(index){
    const que_text =document.querySelector(".que_text"); 
    let que_tag = '<span>' + questions[index].question + '</span>';
    que_text.innerHTML = que_tag;

}

const  bottom_ques_counter = document.querySelector(".total_que");

function queCounter(index){
let totalQueCountTag = '<span><p>'+ (que_numb) +'</p>of<p>'+ questions.length +'</p> Questions</span>'
bottom_ques_counter.innerHTML = totalQueCountTag;
}

let counter;
let timeValue=25;
let widthValue = 0;
let counterLine;


function showResultBox(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");

    if(skip_count > 7){
        let scoreTag =  '<span>Sorry, skipped '+ skip_count +' of <p>12</p> questions. Maximum skipped questions is 7.</span>'
        scoreText.innerHTML = scoreTag;
    } else {
        let scoreTag =  '<span>You have passed the first round of questions. Congrats!'
        scoreText.innerHTML = scoreTag;
    }

}

function startTimer(time){
    counter= setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if(time<9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "0";
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1;
        timeLine.style.width = time = "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }
}

const result_box = document.querySelector(".result-box");
const restart_quiz= result_box.querySelector(".buttons .replay");
const quit_quiz = result_box.querySelector(".buttons .quit");

quit_quiz.onclick = () =>{
    window.location.reload();
}

