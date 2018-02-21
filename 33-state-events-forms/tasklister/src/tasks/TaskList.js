import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, taskFilter, deleteTask}) => {
  const relevantTasks = tasks.filter(t => t.text.includes(taskFilter))
  const taskItems = relevantTasks.map(t => {
    return <TaskItem task={t} key={t.id} deleteTask={deleteTask} />
  })
  return (
    <ul>
      { taskItems }
    </ul>
  )
}

export default TaskList
