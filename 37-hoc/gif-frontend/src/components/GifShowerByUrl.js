import React from 'react'
import { Redirect } from 'react-router'
import withLoader from '../hoc/withLoader'

class GifShowerByUrl extends React.Component {
  state = {
    gif: null
  }

  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=b4pMHGLMt10XtC6ze4yNlekszHQAxshN&q=cat&limit=25&offset=0&rating=G&lang=en')
      .then(r => r.json()).then(g => {
        this.setState({
          gif: g.data[0].images.original.url
        }, () => {
          this.props.onContentReady()
        })
      })
  }

  render() {
    return (
      <div>
        <br />
        <img src={this.state.gif}></img>
      </div>
    )
  }
}

export default withLoader(GifShowerByUrl)
