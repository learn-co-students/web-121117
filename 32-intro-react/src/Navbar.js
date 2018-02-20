import React from 'react'

const Navbar = (props) => {
  return (
    <div className="ui inverted orange menu">
      <a className="item">
        <h2 className="ui header">
          <i className="paw icon" />
          <div className="content">{props.content}</div>
          <div className="sub header">{props.subheader}</div>
        </h2>
      </a>
    </div>
  )
}

export default Navbar

//
// React.createElement('div', {}, [
//   React.createElement('a', {}, [
//     React.createElement('h2', {}, [
//       React.createElement('i', {}),
//       React.createElement('div', {}, props.content),
//       React.createElement('div', {}, props.subheader)
//     ])
//   ])
// ])
