//getting all required elements
const startBtn = document.querySelector('.start_btn button');
const infoBox = document.querySelector('.info_box');
const quitBtn = document.querySelector('.buttons .quit');
const restartBtn = document.querySelector('.buttons .restart');
const quizBox = document.querySelector('.quiz_box');
const currentQuestion = document.querySelector('.total_que')



startBtn.onclick= () => {
    infoBox.classList.add('activeInfo');
}
quitBtn.onclick =  ()=> {
    infoBox.classList.remove('activeInfo');
}

restartBtn.onclick = ()=> {
    infoBox.classList.remove('activeInfo')
    quizBox.classList.add('activeQuiz');
    showQuestions(que_count);
    showOptions(que_count);
    optionSelected()
   
}

let que_count = 0;

const next_Btn = quizBox.querySelector('footer button');
//If next button is pressed
next_Btn.onclick= ()=> {
    if(que_count < questions.length - 1){
        que_count++;
        showQuestions(que_count);
        showOptions(que_count);
    }
    console.log('Clicked')
 
};

function showQuestions(index){
    const que_text = document.querySelector('.que_text');
    let que_tag = `<span>${questions[index].numb}. ${questions[index].question}</span>`;
    que_text.innerHTML = que_tag;
}
function showOptions(index){
    const option_list = document.querySelector('.option_list');
    const allOptions = questions[index].options;
    console.log(allOptions);
    let emptyArr=[];
    let eachOptions =
     allOptions.forEach(option=>{
        console.log(option);
        const option_tag = `<div class="option"><span>${option}</span></div>`;
        console.log(option_tag);
        emptyArr.push(option_tag);
        
    });
    const recentQn_tag = `<span><p>${questions[index].numb}</p>of<p>5</p>Questions</span>`;
    currentQuestion.innerHTML = recentQn_tag;
    emptyArr=emptyArr.join('');
    console.log(emptyArr);
    option_list.innerHTML = emptyArr;
    const option = option_list.querySelectorAll('.option');
    for(let i=0;i<option.length;i++){
       option[i].setAttribute('onclick', 'optionSelected(this)')
    }
};
function optionSelected(answer){
    let userSelectAnswer = answer.textContent;
    let correctAns = questions[que_count].answer;

    if(userSelectAnswer === correctAns){
        let option = userSelectAnswer.parent;
        
        let icon_tag = `<div class="icon tick"><i class="fas fa-check"></i></div>`;
        
    
}}
