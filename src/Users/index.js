import React, { Component } from "react";

class Users extends Component {
  render() {
    return (
      <div className="App">
        <div className="users-div">
        <h3>Users</h3>
        <ul className="users-list"> 
        {this.props.users.map(user => 
        <li key={user.user_id}>{user.user_name}</li>
        )}
        </ul>
        </div>
    </div>
    );
  }
}

export default Users;