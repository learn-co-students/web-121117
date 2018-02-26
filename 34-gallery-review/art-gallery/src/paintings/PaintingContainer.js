import React from 'react'
import FilterBar from './FilterBar'
import PaintingList from './PaintingList'
import painting_data from '../data/painting_data'
import api from '../api/adapter'

class PaintingContainer extends React.Component {
  state = {
    filter: {
      title: '',
      date: ''
    },
    paintings: []
  }

  componentDidMount() {
    api.fetchPaintings().then(paintings => {
      this.setState({
        paintings
      })
    })
  }

  onChanges = {
    title: (event) => {
      this.setState({
        filter: {
          title: event.target.value,
          date: this.state.filter.date
        }
      }, () => {
        console.log(this.state.filter)
      })
    },
    date: (event) => {
      this.setState({
        filter: {
          date: event.target.value,
          title: this.state.filter.title
        }
      }, () => {
        console.log(this.state.filter)
      })
    }
  }

  render() {
    return (
      <div>
        <FilterBar onChanges={this.onChanges} />
        <PaintingList paintings={this.state.paintings} filter={this.state.filter} />
      </div>
    )
  }
}

export default PaintingContainer
