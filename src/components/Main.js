import React, { Component } from 'react';
import './Main.css';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    this.setState({
      tasks: [...newTasks, newTask],
    });
  };

  handleRemove = (e, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];

    newTasks.splice(index, 1);
    this.setState({
      tasks: [...newTasks],
    });
  };

  handleEdit = (e) => {

  };

  render() {
    const { newTask, tasks } = this.state;

    return (
    <div className='main'>
      <h1>To do List</h1>
      <form action='#' className='form' onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" value={newTask}/>
        <button type="submit">
          <FaPlus/>
        </button>
      </form>

      <ul className='tasks'>
        {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <span>
            <FaEdit className='edit' onClick={(e) => this.handleEdit(e, index)}/>
            <FaWindowClose className='remove' onClick={(e) => this.handleRemove(e, index)}/>
          </span>
        </li>))}
      </ul>
    </div>);
  }
}
