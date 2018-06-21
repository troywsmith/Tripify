import React, { Component } from "react";
import "./style.css";
import Users from '../Users';

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
        <div className="page">
        </div>
          <div className="sidebar">
            <Users users={this.state.users}/>
          </div>
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;