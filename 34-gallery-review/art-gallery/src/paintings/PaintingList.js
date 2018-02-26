import React from 'react'
import PaintingItem from './PaintingItem'

const stringPassesFilter = (item, filter) => {
  return !filter || item.toLowerCase().includes(filter.toLowerCase())
}

const Loading = (props) => {
  return (<img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />)
}

const PaintingList = (props) => {
  const paintingsFilteredByTitle = props.paintings.filter(p => stringPassesFilter(p.title, props.filter.title))
  const paintingsFilteredByDate = paintingsFilteredByTitle.filter(p => p.date && stringPassesFilter(p.date, props.filter.date))
  const paintingItems = paintingsFilteredByDate.map(p => <PaintingItem painting={p} key={p.id} />)

  return (
    <ul>
      { paintingItems.length == 0 ? <Loading /> : paintingItems }
    </ul>
  )
}

export default PaintingList
