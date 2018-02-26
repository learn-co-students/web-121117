import React from 'react'

const PaintingItem = (props) => {
  return (
    <div>
      <h3>{ props.painting.title } - { props.painting.date }</h3>
      <img src={props.painting.image}></img>
    </div>
  )
}

export default PaintingItem
