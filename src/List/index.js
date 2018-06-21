import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div className="list">
        <div className="list-div">
        <h3>List</h3>
        <ul className="list-list"> 
        {this.props.api.list.map(item => 
        <li key={item.list_id}>{item.list_name}</li>
        )}
        </ul>
        </div>
      </div>

    );
  }
}

export default List;
