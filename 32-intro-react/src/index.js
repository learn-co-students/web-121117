import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';


const myCreateElement = (type, children, props = {}) => {
  return {
    $$typeof: Symbol.for('react.element'),
    type: type ,
    props: {
      children: children,
      content: props.content,
      subheader: props.subheader
    },
    ref: null
  }
}

const Article = (name, text) => {
  return myCreateElement('div', [
    myCreateElement('h1', [name]),
    myCreateElement('p', [text])
  ])
}



ReactDOM.render(Navbar({content: 'New Page', subheader: "Websites are easy now"}), document.getElementById('main'));
