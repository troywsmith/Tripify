import React, { Component } from "react";

class JoinTrip extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      created: false,
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange(evt) {
    const element = evt.target;
    const name = element.name; //"title"
    const value = element.value; //"g"
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    console.log('form submittied');
    const newTrip = {
      name: this.state.trip,
    }
    fetch('/login.json', {
      method: "POST",
      body: JSON.stringify(newTrip),
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      }
    }).then(response => response.json())
      .then(trip => {
        this.setState({
          created: true
        });
      });
  }

    render() {
        return (
        <div className="logindiv">
          <h2>Join a trip</h2>
          {/* <form action="/" method="GET">
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
            </div>
          </form> */}
          <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
              <p>
                <label for="code"></label>
                <input
                  type="text"
                  name="code"
                  value={this.state.activity}
                  placeholder="trip code"
                />
              </p>
              <p>
                <label for="pw"></label>
                <input
                  type="text"
                  name="pw"
                  value={this.state.activity}
                  placeholder="trip password"
                />
              </p>
              <p>
                <label for="item"></label>
                <input
                  type="text"
                  name="item"
                  value={this.state.activity}
                  placeholder="your display name"
                />
              </p>
            {/* <input type="submit" value="Join Trip"/> */}
        </form>
        </div>
        );
    }
}

export default JoinTrip;