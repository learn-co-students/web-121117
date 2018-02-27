import React, { Component } from 'react'
import Trainer from './Trainer'

class TrainersList extends Component {
  render() {
    return (
      this.props.trainers.map(trainer => {
        return (
          <p className="collection-item" key={trainer.id}>
              {trainer.name}
          </p>
        )
      })
    )
  }
}

export default TrainersList;
