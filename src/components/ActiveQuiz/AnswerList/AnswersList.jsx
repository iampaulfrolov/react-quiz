import React from 'react'
import c from './AnswersList.module.css'
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => (
  <ul className={c.AnswersList}>
    { props.answers.map((answer, index) => {
      return (
          <AnswerItem key={index} answer={answer} onAnswerClick={props.onAnswerClick}
                      state={props.state ? props.state[answer.id] : null} />
        )
    }) }
  </ul>
)

export default AnswersList
