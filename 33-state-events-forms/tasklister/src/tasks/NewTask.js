import React from 'react'

class NewTask extends React.Component {
  state = {
    value: '',
    x: true
  }

  onInput = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addNewTask(this.state.value)
    this.setState({
      value: ''
    })
  }


  render() {
    return (
      <form onInput={this.onInput} onSubmit={this.onSubmit}>
        <input type="text" name="newTask" value={this.state.value} placeholder="New Task!" />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default NewTask
