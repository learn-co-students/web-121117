import React from 'react'

const GifShower = (props) => {

  return props.auth.loggedIn ? (
    <p>HERE'S A GIF</p>
  ) : (
    <p>Sorry log in please</p>
  )
}

export default GifShower
