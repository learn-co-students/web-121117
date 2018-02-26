import React from 'react'

const FilterBar = (props) => {
  return (
    <div>
      <input name="titleFilter" placeholder="title" onChange={props.onChanges.title} />
      <input name="dateFilter" placeholder="date" onChange={props.onChanges.date} />
    </div>
  )
}

export default FilterBar
