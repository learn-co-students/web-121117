import React, { Component } from 'react'

class Pokemon extends Component {
  render() {
    return (
      this.props.pokemon.map(pokemon => {
        return (
          <div key={pokemon.id}>
            {pokemon.nickname} ({pokemon.species})
          </div>
        )
      })
    )
  }
}

export default Pokemon;
