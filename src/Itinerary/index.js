import React, { Component } from "react";

class Itinerary extends Component {
  render() {
    return (
      <div className="App">
        <div className="list-div">
        <h3>Itinerary</h3>
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