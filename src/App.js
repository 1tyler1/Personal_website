import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Component/Home';
import './style/main.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
