import React, { Component } from "react";
import {FaGithub} from 'react-icons/fa'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
    <footer className="Footer">
      <a href="https://github.com/manuelmartin-developer" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </footer>
      )
  }
}

export default Footer;
