import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Component/Home';
import './style/main.css';
import Projects from './Component/Projects';

class App extends Component {
  render() {
    return (
   
        <Router>
           <div>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          </div>
        </Router>
     
    );
  }
}

export default App;
