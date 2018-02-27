import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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

// render() {
//   return (
//     this.props.trainers.map(trainer => {
//       return (
//         <Link className="collection-item" to={`/trainers/${trainer.id}`} key={trainer.id}>
//             {trainer.name}
//         </Link>
//
//       )
//     })
//   )
// }


export default TrainersList;
