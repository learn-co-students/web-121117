import React, { Component } from 'react'
import Pokemon from './Pokemon'

class Trainer extends Component {
  render(){
    return (
      <div>
        <h1>{this.props.trainer.name}</h1>
        <Pokemon pokemon={this.props.trainer.pokemon} />
      </div>
    )
  }
}


export default Trainer;
