import React from 'react'
import c from './ActiveQuiz.module.css'
import AnswersList from "./AnswerList/AnswersList"

const ActiveQuiz = props => (
  <div className={c.ActiveQuiz}>
    <p className={c.Question}>
      <span>
        <strong>{ props.answerNumber }</strong>&nbsp;
        { props.question }
      </span>
      <small>{ props.answerNumber }/{ props.quizLength }</small>
    </p>

     <AnswersList answers={props.answers}
                  onAnswerClick={props.onAnswerClick}
                  state={props.state}
     />
  </div>
)

export default ActiveQuiz
