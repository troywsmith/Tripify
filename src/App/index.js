import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./style.css";
import Users from '../Users';
import Dashboard from '../Dashboard';

class App extends Component {
  state = { 
    users: []
   }

  componentDidMount() {
    fetch('/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <Router>
      <div className="App">
       <header className="header">
        <div className="logo-div">
          <img src="http://images.clipartpanda.com/camping-tent-clipart-black-and-white-orange-tent-hi.png" className="logo" alt="logo" />
        </div>
        <div className="info-div">
          <h1 className="title">Tripify</h1>
          <p className="intro">Don't just trip, tripify</p>
        </div>
        </header>
        <main>
            <div className="memo">
              <h2></h2>
            </div>

          <div className="joindiv">
            <h2>Join a trip</h2>
            {/* <form action="/register" method="POST">
              <div>
                <input type="text" name="code" placeholder="trip code" />
              </div>
              <div>
                <input type="text" name="password" placeholder="trip password" />
              </div>
              <div>
                <input type="name" name="name" placeholder="your display name" />
              </div>
              <div className="submitdiv">
                <button> */}
                  <Link to="/dashboard">Join Trip</Link>
                {/* </button>
              </div>
            </form> */}
          </div>
        </main>
        <Route path="/dashboard" exact component={Dashboard} />
        <footer>
        </footer>
        </div>
      </Router>
    );
  }
}

export default App;