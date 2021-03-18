import React from 'react'
import c from './Button.module.css'

const Button = props => {
  const cls = [
    c.Button,
    c[props.type]
  ]
  return (
    <button
      onClick={props.onClick}
      className={cls.join(' ')}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button
