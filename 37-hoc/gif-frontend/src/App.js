import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './service/api'
import GifShower from './components/GifShower'
import SimpleGifShower from './components/SimpleGifShower'
import GifShowerByUrl from './components/GifShowerByUrl'

import AuthAction from './components/AuthAction'
import { Switch, Route, Redirect } from 'react-router'

class App extends Component {
  state = {
    auth: {
      loggedIn: false,
      loggingIn: true
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      this.setState({
        auth: {
          loggedIn: true,
          token: token,
          loggingIn: false
        }
      })
    } else {
      this.setState({
        auth: {
          loggedIn: false,
          loggingIn: false
        }
      })
    }
  }

  login = (username, password) => {
    api.login(username, password).then(j => {
      if(j.error) {
        alert(j.error)
        this.setState({
          loggedIn: false,
          loggingIn: false
        })
      } else {
        localStorage.setItem('token', j.token)
        this.setState({
          auth: {
            loggedIn: true,
            token: j.token,
            loggingIn: false
          }
        })
      }
    })
  }

  logout = () => {
    localStorage.removeItem('token')
    this.setState({
      auth: {
        loggedIn: false,
        token: undefined
      }
    })
  }


  render() {
    return (
      <div className="App">
        <AuthAction loginFn={this.login} logoutFn={this.logout} auth={this.state.auth} />
        <Switch>
          <Route path="/gif" render={(routerProps) => {
            return <GifShower auth={this.state.auth} />
          }} />
          <Route path="/gif2" render={(routerProps) => {
            return <SimpleGifShower auth={this.state.auth} />
          }} />
          <Route path="/url" component={GifShowerByUrl} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
