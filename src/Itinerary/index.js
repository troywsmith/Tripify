import React, { Component } from "react";

class Itinerary extends Component {

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
    const newActivity = {
      name: this.state.activity,
    }
    fetch('/.json', {
      method: "POST",
      body: JSON.stringify(newActivity),
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      }
    }).then(response => response.json())
      .then(activity => {
        this.setState({
          created: true
        });
      });
  }


  render() {
    return (
      <div className="App">
        <div className="list-div">
          <div className="tab-header">
            <h2>Itinerary</h2>
          </div>
          <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
            <p>
              <label for="item"></label>
              <input
              type="text"
              name="item"
              value={this.state.activity}
              placeholder="new activity"
            />
            </p>
            <input type="submit" value="Add" />
          </form>
          <ul className="list-list"> 
            {this.props.api.activity.map(activity => 
            <li className="activityli" key={activity.activity_id}>
              <div className="activitymoment">
                {/* <p>{activity.date}</p> */}
                <p>{activity.time}</p>
              </div>
              <p className="activity">{activity.activity_name}</p>
            </li>
            )}
          </ul>
        </div>
    </div>
    );
  }
}

export default Itinerary;
