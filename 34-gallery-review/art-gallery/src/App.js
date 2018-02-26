import React, { Component } from 'react';
import logo from './logo.svg';
import PaintingContainer from './paintings/PaintingContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaintingContainer />
      </div>
    );
  }
}

export default App;
