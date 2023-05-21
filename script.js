const quizData  =[
    {
    question:'How old is Florin?',
    a:'10',
    b:'17',
    c:'26',
    d:'110',
    correct:'c'
    },{
        question:'What is he most used programming language in 2023?',
        a:'Java',
        b:'C',
        c:'Python',
        d:'Go',
        correct:'d'
    },{
        question:'Who is the President of US?',
        a:'Florin Pop',
        b:'Biden',
        c:'Donald Trump',
        d:'Ivan Saldano',
        correct:'d'
    },{
        question:'What does Html Stand for?',
        a:'HyperText Markup Language',
        b:'Cascading Style Sheet',
        c:'Jasen Opject Nonation',
        d:'Helicopters Terminals Motorboats Lamborginis',
        correct:'a'
    },{
        question:'What year was JavaScript launched?',
        a:'1996',
        b:'1995',
        c:'1994',
        d:'None of the above',
        correct:'b'
    }
    

];

const questionEl = document.getElementById('question')

const a_text =  document.getElementById('a_text');
const b_text =  document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const sub_btn = document.getElementById('submit');

const correctAnswers = document.getElementsByName('answer');
let correct=0;
let currentQuiz = 0;

loadQuiz();

function loadQuiz(){

    const currentQuizData = quizData
    [currentQuiz];

    questionEl.innerText= currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}



sub_btn.addEventListener("click" , ()=>{

    if(currentQuiz < quizData.length){
        loadQuiz();
        correctAnswers.forEach(e =>{

            if(e.id == quizData[currentQuiz].correct){
                correct++;
            }
        }); 
    currentQuiz++;
           
    }
    else{
        
        alert("You finished! You had " + correct +" correct answer" );
    }

    loadQuiz();

})