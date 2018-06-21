import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./style.css";
import HomePage from '../HomePage';
import Activity from '../Activity';
import Trip from '../Trip';
import User from '../User';

class App extends Component {
  render() {
    return (
      <Router>
    <div className="App">
      <nav>
        <Link to="/" >Home Page</Link>
      </nav>
      <Route path="/" exact component={HomePage} />
      <Route path="/activity/:id" exact component={Activity} />
      <Route path="/trip" exact component={Trip} />
      <Route path="/user/:id" exact component={User} />
    </div>
    </Router>
    )
  }
}

export default App;
