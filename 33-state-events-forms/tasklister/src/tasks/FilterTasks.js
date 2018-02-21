import React from 'react'

const FilterTasks = (props) => {
  return (
    <input placeholder="Filter Tasks" onInput={props.updateFilter} />
  )
}

export default FilterTasks
