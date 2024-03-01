import React, { Component } from 'react';
import './Main.css';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [
      'do this',
      'and do this',
      'and finally this',
    ],
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
    <div className='main'>
      <h1>To do List</h1>
      <form action='#' className='form'>
        <input onChange={this.handleChange} type="text" value={newTask}/>
        <button type="submit">
          <FaPlus/>
        </button>
      </form>

      <ul className='tasks'>
        {tasks.map((task) => (
        <li key={task}>
          {task}
          <div>
            <FaEdit className='edit'/>
            <FaWindowClose className='remove'/>
          </div>
        </li>))}
      </ul>
    </div>);
  }
}
