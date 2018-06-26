import React, { Component } from "react";
import { Router } from "react-router-dom";
import "./style.css";
import Dashboard from '../Dashboard';
import JoinTrip from '../JoinTrip';
import Register from '../Register';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      api: [],
      showRegister: true,
      showJoinTrip: false,
      showDashboard: false,
      // name: "",
    };
    this._onRegister = this._onRegister.bind(this);
    this._onTripClick = this._onTripClick.bind(this);
  }

  // onFormChange(evt) {
  //   const element = evt.target;
  //   const name = element.name; //"title"
  //   const value = element.value; //"g"
  //   const newState = {};
  //   newState[name] = value;
  //   this.setState(newState);
  // }

  // onFormSubmit(evt) {
  //   evt.preventDefault();
  //   const newUser = {
  //     name: this.state.name,
  //   }
  //   this.setState({
  //     item: ''
  //   });
  //   fetch('/.json', {
  //     method: "POST",
  //     body: JSON.stringify(newUser),
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-type": "application/json"
  //     }
  //   }).then(response => response.json())
  //     .then(listItem => {
  //       this.setState({
  //         created: true
  //       });
  //       this.fetchList()
  //     })
  // }

  componentDidMount() {
    fetch('/.json')
      .then(response => response.json())
      .then(api => this.setState({ api }))
      .catch(err => {
        console.log(err);
      })
  }

  _onRegister() {
    this.setState({
      showRegister: false,
      showJoinTrip: true,
    });
  }

  _onTripClick() {
    this.setState({
      showJoinTrip: false,
      showDashboard: true,
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
            <div className="joins">
              <div id="Register" className="logindiv">
                    {this.state.showRegister ? 
                    <div>
                      <Register /> 
                      <button onClick={this._onRegister}>Register</button>
                    </div>
                    : 
                    null
                    }
              </div>
              <div id="Login" className="logindiv">
                    {this.state.showJoinTrip ? 
                    <div>
                      <JoinTrip /> 
                      <button onClick={this._onTripClick}>Join Trip</button>
                    </div>
                    : 
                    null
                    }
              </div>
            </div>
            <div id="Trip" className="trip">
                    {this.state.showDashboard ?
                    <Dashboard /> :
                    null
                    }
             </div>
        </main>

        <footer></footer>
      </div>
    );
  }
}
export default App;