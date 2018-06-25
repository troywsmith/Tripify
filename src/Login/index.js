import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      created: false,
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
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

  onFormSubmit(evt) {
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
          created: true
        });
      })
  }

  render() {
    return (
      <div className="list">
          <div className="list-div">
            <h3>Login</h3>
            <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
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
              <input type="submit" value="Login"/>
              {/* <button type="button" value="Register"/> */}
            </form>
          </div>
      </div>
    );
  }
}
export default Login;