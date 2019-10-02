import React, { Component } from 'react';
import ReactGA from 'react-ga';

import logo from './logo.svg';
import './App.css';

ReactGA.initialize('UA-149266959-1');

class App extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-header">
          The Coders Family
        </h1>
      </div>
    );
  }
}

export default App;
