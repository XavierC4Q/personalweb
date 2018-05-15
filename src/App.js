import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Website from './Components/Website'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Website} />
        </Switch>
      </div>
    );
  }
}

export default App;
