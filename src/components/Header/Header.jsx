import React, { Component } from "react";
import './Header.css'


class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img className="logo" src="logo.png" alt="logo" />
      </header>
      )
  }
}

export default Header;
