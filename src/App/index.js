import React, { Component } from "react";
import { Router } from "react-router-dom";
import "./style.css";
// import Login from '../Login';
// import Register from '../Register';
import JoinTrip from '../JoinTrip';
import Dashboard from '../Dashboard';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      api: [],
      username: '',
      password: '',
      showRegisterLogin: true,
      showJoinTrip: false,
      showDashboard: false,
      created: false,
      // name: "",
    };
    this._onTripClick = this._onTripClick.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
  }

  onFormChange(evt) {
    const element = evt.target;
    console.log('element: ' + element)
    const elementname = element.name; //"title"
    console.log(elementname);

    let un = '';
    let pw = '';

    if (elementname === 'username') {
      un = element.value;
      this.setState({username: un});
    } else {
      pw = element.value;
      this.setState({password: pw});
    }    

    console.log(this.state);
  }

  //when a user clicks login
  onLoginClick(evt) {
    evt.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    this.setState({
      username: '',
      password: ''
    });
    fetch('/login.json', {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      }
    })
      // .then(response => response.json())
      .then(user => {
        this.setState({
          showRegisterLogin: false,
          showJoinTrip: true,
        });
      })
  }

  //when a user clicks register
  onRegisterClick(evt) {
    console.log('register successfully clicked');
    evt.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    // this.setState({
    //   username: '',
    //   password: ''
    // });
    fetch('/register.json', {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      }
    })
      // .then(response => response.json())
      .then(user => {
        this.setState({
          created: true,
          showRegisterLogin: false,
          showJoinTrip: true,
        })
        ;
      })
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
                    {this.state.showRegisterLogin ? 
                    <div>
                      <form onChange={this.onFormChange}>
                        <div>
                          <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            placeholder="username"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="password"
                            value={this.state.password}
                            placeholder="password"
                          />
                        </div>
                        <input type="submit" value="Login" onClick={this.onLoginClick}/>
                        <input type="button" value="Register" onClick={this.onRegisterClick}/>
                      </form>
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
                    <Dashboard username={this.state.username}/> :
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