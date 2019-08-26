import React, { Component } from 'react'
import './header.css'
import logo from '../assets/logo.svg';

class Header extends Component {
  render() {
    return(
      <div className="main-header">
        <img src={logo} alt="Logo"/>
        <span>Meu perfil</span>
      </div>
    )
  }
}

export default Header;