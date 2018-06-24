import React, { Component } from "react";
import "./style.css";
import Dashboard from '../Dashboard';
import Login from '../Login';

class App extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      api: [],
      showLogin: true,
      showTrip: false
    };
    this._onTripClick = this._onTripClick.bind(this);
  }

  componentDidMount() {
    fetch('/.json')
      .then(response => response.json())
      .then(api => this.setState({ api }))
      .catch(err => {
        console.log(err);
      })
  }

  _onTripClick() {
    this.setState({
      showTrip: true,
      showLogin: false
    });
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
            <div id="Login" className="logindiv">
                  {this.state.showLogin ? 
                  <div>
                    <Login /> 
                    <button onClick={this._onTripClick}>Join Trip</button>
                  </div>
                  : 
                  null
                  }
            </div>
      </main>
      <div id="Trip" className="trip">
                  {this.state.showTrip ?
                  <Dashboard /> :
                  null
                  }
                </div>
        <footer>
        </footer>
        </div>
    );
  }
}
export default App;