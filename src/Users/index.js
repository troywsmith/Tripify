import React, { Component } from "react";

class Users extends Component {
  render() {
    return (
      <div className="App">
        <div className="users-div">
        <h2>Members</h2>
        <ul className="users-list"> 
        {this.props.api.user.map(user => 
        <li key={user.user_id}>
          <p>{user.user_name}</p>
          <img className="userpic" src={user.user_img}/>
        </li>
        )}
        </ul>
        </div>
    </div>
    );
  }
}

export default Users;