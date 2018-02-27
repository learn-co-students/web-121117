import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import trainer_data from './data/trainer_data'
import Main from './Main'
import Header from './Header'
import TrainersContainer from './TrainersContainer'

const fakeCatchAll = (props) => {
  return (<h1>404 ALERT</h1>)
}


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <TrainersContainer trainers={trainer_data} />
      </div>
    );
  }
}

// <Switch>
//   <Route path="/trainers" render={ (routerProps) => {
//     return <TrainersContainer trainers={trainer_data}/>
//   } } />
//   <Route path='/' component={fakeCatchAll} />
// </Switch>

export default App;
