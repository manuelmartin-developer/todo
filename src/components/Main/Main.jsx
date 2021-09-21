import React, { Component } from "react";
import TaskList from '../TaskList'
import './Main.css'

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <TaskList/>
      </main>
      )
  }
}

export default Main;
