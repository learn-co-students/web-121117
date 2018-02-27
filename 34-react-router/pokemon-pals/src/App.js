import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, Switch, Redirect} from 'react-router-dom'

import Header from './Header'
import TrainersContainer from './TrainersContainer'
import Trainer from './Trainer'
import trainer_data from './data/trainer_data'

const Main = () => { return (<h1>Welcome Home</h1>)}

const catchAll = () => {return (
  <div>
    <h1>404 NOT FOUND</h1>
    <img src="https://http.cat/404" />
  </div>
)}

class App extends Component {

  findById = (routerParams) => {
    return trainer_data.find(function(trainer){
      return trainer.id === parseInt(routerParams.match.params.id)
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/trainers/:id" render={(routerParams) => {
            return <Trainer trainer={this.findById(routerParams)}/>
          }} />
          <Route path="/trainers" render={ (routerParams)=>{
            return <TrainersContainer trainers={ trainer_data } />
          }} />
          <Route path="/404" component={catchAll} />
          <Redirect from="/main" to="/" />
          <Route exact path="/" component={Main} />
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}

export default App;
