import React from 'react'
import c from './AnswerItem.module.css'

const AnswerItem = props => {
  const cls = [c.AnswerItem]
  if (props.state) {
    cls.push(c[props.state])
  }
  return (
    <li className={cls.join(' ')} onClick={() => props.onAnswerClick(props.answer.id)}>
      { props.answer.text }
    </li>
  )
}

export default AnswerItem
