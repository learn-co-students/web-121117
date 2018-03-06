import React from 'react'

const withLoader = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      contentReady: false
    }

    onContentReady = () => {
      this.setState({
        contentReady: true
      })
    }

    render() {
      return this.state.contentReady ?
        (<WrappedComponent onContentReady={this.onContentReady} />)
          :
        (<img src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />)
    }
  }
}

export default withLoader
