import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskContainer from './tasks/TaskContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskContainer />
      </div>
    );
  }
}

export default App;
