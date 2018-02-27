import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
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

// render = () => {
//   return (
//     <Switch>
//       <Route path="/trainers/:id" render={ (routerProps)=>{
//         const id = parseInt(routerProps.match.params.id)
//         const trainer = this.props.trainers.find((t) => { return t.id === id })
//         return <Trainer trainer={trainer} />
//       }}/>
//       <Route path="/trainers" render={() => {
//         return (
//           <div className="collection">
//             <TrainersList trainers={ this.props.trainers }/>
//           </div>
//         )
//       } } />
//     </Switch>
//   )
// }

// return (
//   <Switch>
//     <Route path="/trainers" render={(props) => {
//       return <Trainers trainers={ this.props.trainers }/>
//     } } />
//   </Switch>
// )

export default TrainersContainer
