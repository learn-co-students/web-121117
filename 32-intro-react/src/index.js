import React from 'react';
import ReactDOM from 'react-dom';


const myCreateElement = (type, children, props = {}) => {
  return {
    $$typeof: Symbol.for('react.element'),
    type: type ,
    props: { children: children },
    ref: null
  }
}

const Article = (name, text) => {
  return myCreateElement('div', [
    myCreateElement('h1', [name]),
    myCreateElement('p', [text])
  ])
}

ReactDOM.render(myCreateElement('div', [
  Article("Hi", "Bye"),
  Article("Hello", "Goodbye")
]), document.getElementById('main'));
