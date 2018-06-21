import React, { Component } from "react";

class Itinerary extends Component {
  render() {
    return (
      <div className="App">
        <div className="users-div">
        <h3>Activities</h3>
        <ul className="users-list"> 
        {/* {this.props.activities.map(activity => 
        <li key={activity.user_id}>{activity.user_name}</li>
        )} */}
        </ul>
        </div>
    </div>
    );
  }
}

export default Itinerary;