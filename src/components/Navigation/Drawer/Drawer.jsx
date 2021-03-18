import React, {Component} from 'react'
import c from './Drawer.module.css'
import {NavLink} from 'react-router-dom'
import Backdrop from "../../UI/Backdrop/Backdrop"

class Drawer extends Component {

  clickHandler = () => {
    this.props.onClose()
  }

  renderLinks(links) {
    return links.map((link , index) => {
      return (
        <li key={index}>
          <NavLink to={link.to} exact={link.exact} activeClassName={c.active} onClick={this.clickHandler}>{link.label}</NavLink>
        </li>

      )
    })
  }

  render() {

    const cls = [c.Drawer]

    if (!this.props.isOpen) {
      cls.push(c.close)
    }

    const links = [
      {to: '/', label: 'List', exact: true},
    ]

    if (this.props.isAuthenticated) {
      links.push({to: '/quiz-creator', label: 'Create-quiz', exact: false})
      links.push({to: '/logout', label: 'Exit', exact: false})
    } else {
      links.push({to: '/auth', label: 'Auth', exact: false})
    }


    return (
      <>
        { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null }
        <nav className={cls.join(' ')}>
          <ul>
            {this.renderLinks(links)}
          </ul>
        </nav>
      </>
    )
  }
}

export default Drawer
