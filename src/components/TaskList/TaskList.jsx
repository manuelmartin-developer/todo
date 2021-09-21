import React, { Component } from "react";
import Task from "../Task/Task";
import tasks from '../../tasks'
import './TaskList.css'
import Fab from '@mui/material/Fab';

class TaskList extends Component {

  constructor(props){
    super(props)

    this.desc = React.createRef();

    this.state = {
      tasks: tasks
    }
  }

  addTask = (event) => {
    event.preventDefault();

    const desc = this.desc.current.value;

    if(desc){
      const task = {desc};
      this.setState({tasks: [...this.state.tasks, task]});
      this.desc.current.value = "";
    }

  }
  removeAllTasks = () => {
    this.setState({
      tasks: tasks
    })
  }
  removeOneTask = (index) => {
    const remainTasks = this.state.tasks.filter((current, currentIndex) => currentIndex !== index);
    this.setState({tasks:remainTasks});
  }

  paintTask = ()=> {
    return this.state.tasks.map((task, index) => <Task info={task} key={index} remove={() => this.removeOneTask(index)} />)
  }

  render() {
    return (
      <>
        <form onSubmit={this.addTask} autoComplete="off">
          <input className="input" type="text" name="desc" ref={this.desc} />
        </form>
        <section className="buttons">
          <Fab aria-label="add" onClick={this.addTask}>
            Add
          </Fab>
          <Fab aria-label="add" onClick={this.removeAllTasks}>
            Reset
          </Fab>
        </section>
        <section className="tasks">
          <article>
            {this.paintTask()}
          </article>
        </section>
      </>
      )
  }
}

export default TaskList;
