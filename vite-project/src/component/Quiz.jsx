import React, { useState } from 'react'
import './Quiz.css'
import QuestionList from './QuestionList'
const Quiz = () => {
    const questions = [
        {
            question: "What is React?",
            options: ["CSS Framework","React Library","React Framework","testing tool"],
            answer:"React Library"
        },
        {
            question:"What is 2+2?",
            options: ["3","4","5","6"],
            answer: '4'
        }
        ,{
            question:"Who invent computer?",
            options: ["Charles Babbage","charlie","Checkerion","C.k"],
            answer: '4'

        }
    ]
    const handlenextQues = ()=>{
        setCurrentState(currentState+1);
        setCorrectAnswer(null)
    }
    const handleClick = (option)=>{
     setCorrectAnswer(option)
     if(option === questions[currentState].answer){
        setScore(score+1);
     }
    }
    const [currentState,setCurrentState] = useState(0);
    const [correctAns,setCorrectAnswer] = useState(null);
    const [score,setScore] = useState(0);
  return (
    <div>
        {currentState <questions.length ?
         <div><QuestionList question ={questions[currentState].question}
         options={questions[currentState].options} handleClick = {handleClick} correctAns = {correctAns}/>
         <button disabled= {correctAns === null} className={correctAns === null ? 'button-disable': 'button'} onClick={handlenextQues}>Next Question</button>
         </div> : <div>
            Your Score is {score}.
         </div> }
     
      
    </div>
  )
}

export default Quiz
