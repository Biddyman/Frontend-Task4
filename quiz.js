const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
     
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
 }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
 
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    }) 
    if (shuffledQuestions.length > currentQuestionIndex +1) {
      nextButton.classList.remove('hide')
} else {
    startButton.innerText = 'Play Again'
    startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Corona Virus can otherwise be called ______.',
        answers:  [
               {text:  "COVID-19", correct: true},
               {text:  "COVID-20", correct: false},
               {text:  "COVID-21", correct: false},
        ]
   },
   {
    question: "Where was the virus first discovered?",
    answers: [
        {text:  "Abuja", correct: false},
        {text:  "London", correct: false},
        {text:  "Wuhan", correct: true},
    ]
    
},
{
    question: "What is the most suitable language for web development?",
    answers: [
        {text:  "HTML", correct: true},
        {text:  "JAVA", correct: false},
        {text:  "C#", correct: false},
    ]
},
{
    question:  "Which of the folllowings is NOT a programming Language?",
    answers:    [
        {text:  "JAVA", correct: false},
        {text:  "C++", correct: false},
        {text:  "CSS", correct: true},
    ]
},
{
    question:  "HTML codes could be styled and beautified using ______.",
    answers:    [
        {text:  "JAVASCRIPT", correct: false},
        {text:  "CSS", correct: true},
        {text:  "JAVA", correct: false},
    ]
}
]

