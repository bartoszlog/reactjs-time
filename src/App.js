import React, { Component } from 'react';
import './App.css'
import Timer from './Timer'

class App extends Component {

  render() {
    return (
      <div>
        <Timer start={ Date.now() }/>
      </div>
    );
  }
}

export default App;
