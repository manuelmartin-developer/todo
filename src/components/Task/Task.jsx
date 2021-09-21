import React, { Component } from "react";
import './Task.css'
import {FaCheckSquare} from 'react-icons/fa'

class Task extends Component {

  // constructor(props){
  //   super(props)
 
  // }
  render() {
    const { desc } = this.props.info;
    return (
      <section className="Task">
        <article>
          <FaCheckSquare />
          <h3 className="desc">{desc}</h3>
        </article>
        <button onClick={this.props.remove}>Borrar</button>
      </section>
      )
  }
}

export default Task;
