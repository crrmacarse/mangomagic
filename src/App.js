import React, { Component } from 'react';
import './App.css';

import Main from './Components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "container-fluid h-100">
          <Main />

        </div>
      </div>
    );
  }
}

export default App;
