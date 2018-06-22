import React, { Component } from "react";

class Itinerary extends Component {
  render() {
    return (
      <div className="App">
        <div className="list-div">
        <h3>List</h3>
        <ul className="list-list"> 
        {this.props.api.activity.map(activity => 
        <li key={activity.activity_id}>{activity.activity_name}</li>
        )}
        </ul>
        </div>
    </div>
    );
  }
}

export default Itinerary;