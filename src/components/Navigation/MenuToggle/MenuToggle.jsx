import React from 'react'
import c from './MenuToggle.module.css'

const MenuToggle = props => {
  const cls = [
    c.MenuToggle,
    'fa'
  ]
  if (props.isOpen) {
    cls.push('fa-times')
    cls.push(c.open)
  } else {
    cls.push('fa-bars')
  }

  return (
    <i className={cls.join(' ')} onClick={props.onToggle}/>
  )
}

export default MenuToggle
