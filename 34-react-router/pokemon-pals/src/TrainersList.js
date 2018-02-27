import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Trainer from './Trainer'

class TrainersList extends Component {
  render() {
    return (
      this.props.trainers.map(trainer => {
        return (
          <Link to={`/trainers/${trainer.id}`} className="collection-item" key={trainer.id}>
              {trainer.name}
          </Link>
        )
      })
    )
  }
}

export default TrainersList;
