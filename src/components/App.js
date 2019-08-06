import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux' // Provider is a high order coponent, it may has several child component
import Count from  '../components/Count'
import store from '../store/index'


class App extends Component {

  render() {

    return (
        <Provider store={ store }>
          <div>Hi, i am from app</div>
          <Count />
        </Provider>
    );
  }
}

export default App;