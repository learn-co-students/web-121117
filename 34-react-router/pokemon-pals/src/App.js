import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header'
import TrainersContainer from './TrainersContainer'
import trainer_data from './data/trainer_data'

const Main = () => { return (<h1>Welcome Home</h1>)}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
