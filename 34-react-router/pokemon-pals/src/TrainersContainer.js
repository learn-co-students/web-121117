import React, { Component } from 'react'
import TrainersList from './TrainersList'
import Trainer from './Trainer'

class TrainersContainer extends Component {
  render = () => {
    return (
      <div className="collection">
        <TrainersList trainers={ this.props.trainers }/>
      </div>
    )
  }
}

export default TrainersContainer
