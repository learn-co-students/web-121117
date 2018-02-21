import React from 'react'
import TaskList from './TaskList'
import NewTask from './NewTask'
import generateTaskObject from './TaskObject'
import FilterTasks from './FilterTasks'

class TaskContainer extends React.Component {
  state = {
    tasks: [],
    taskFilter: ''
  }

  addNewTask = (taskString) => {
    const task = generateTaskObject(taskString)
    this.setState(({tasks}) => {
      return {
        tasks: [...tasks, task]
      }
    })
  }

  updateFilter = (e) => {
    this.setState({
      taskFilter: e.target.value
    })
  }

  deleteTask = (id) => {
    this.setState(prevState => {
      const taskToRemove = prevState.tasks.find(t => t.id == id)
      const index = prevState.tasks.indexOf(taskToRemove)
      prevState.tasks.splice(index, 1)
      return {
        tasks: prevState.tasks
      }
    })
  }

  render() {
    return (
      <div>
        <FilterTasks updateFilter={this.updateFilter} />
        <NewTask addNewTask={this.addNewTask} />
        <TaskList tasks={this.state.tasks}
                  taskFilter={this.state.taskFilter}
                  deleteTask={this.deleteTask}/>
      </div>
    )
  }
}

export default TaskContainer
