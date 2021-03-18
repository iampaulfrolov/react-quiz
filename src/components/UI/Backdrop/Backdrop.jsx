import React from 'react'
import c from './Backdrop.module.css'

const Backdrop = props => <div className={c.Backdrop} onClick={props.onClick} />

export default Backdrop
