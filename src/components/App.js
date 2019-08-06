import store from './src/store'
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux' // Provider is a high order coponent, it may has several child component


class App extends Component {

  render() {
    // A reducer must have two parameters and it takes two parameter by default
    // state and action
    const reducer = (state={}, action) => {
      if (action.type == 'A') {
        return {
          a : 'I am a'
        }
      }

      if (action.type == 'B') {
        return {
          b: 'I am b'
        }
      }

      return state
    };

    const store = createStore(reducer);

    store.subscribe(() => {
      console.log(store.getState().a);
    });

    store.subscribe(() => {
      console.log(store.getState().b);
    });

    store.dispatch({type: 'A'}) // aciton must have object type
    store.dispatch({type: 'action must have type'})
    store.dispatch({type: 'B'})
    store.dispatch({type: 'action must have type'})


    return (
        <div>hello world from app.js</div>
    );
  }
}

export default App;