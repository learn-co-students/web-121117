import React, { Component } from 'react'

const API = "https://pokemon-trainers.herokuapp.com/pokemons"

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
