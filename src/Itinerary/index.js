import React, { Component } from "react";
// activity


class Itinerary extends Component {

  constructor(props) {
    super(props)
    this.state = {
      api: {
        activity: []
      },
      activity_name: "",
      date: "",
      time: "",
      created: false,
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    console.log("component");
    this.fetchActivity()
  }

  fetchActivity() {
    fetch('/.json')
      .then(response => response.json())
      .then(api => this.setState({ api }))
      .catch(err => {
        console.log(err);
      })
    console.log('fetch working');

  }

  onFormChange(evt) {
    const element = evt.target;
    const name = element.name;
    const value = element.value;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    const newActivity = {
      activity_name: this.state.activity_name,
      date: this.state.date,
      time: this.state.time,
    }
    fetch('/new_activity.json', {
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
        this.fetchActivity();
      });
  }

  render() {
    return (
      <div className="Itinerary">
        <h3>Itinerary</h3>
        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          <p>
            <label for="activity_name"></label>
            <input
              type="text"
              name="activity_name"
              value={this.state.activity}
              placeholder="Enter new activity"
            />
          </p>
          <p>
            <label for="time"></label>
            <input
              type="text"
              name="time"
              value={this.state.time}
              placeholder="Enter time"
            />
          </p>
          <p>
            <label for="date"></label>
            <input
              type="text"
              name="date"
              value={this.state.date}
              placeholder="Enter new date"
            />
          </p>
          <input type="submit" value="Add" />
          <p> </p>
        </form>
        <div></div>
        <div className="activity-display">
          <ul className="list-list">
            {this.state.api.activity.map(activity =>
              <li className="activityli" key={activity.activity_id}>
                {activity.activity_name}: {activity.time}, {activity.date}
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Itinerary;
