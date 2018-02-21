import React from 'react'

const TaskItem = ({ task, deleteTask }) => {
  return (<li>{task.text} {task.id} <a href="#" onClick={() => { deleteTask(task.id) }}>delete me</a></li>)
}

export default TaskItem
