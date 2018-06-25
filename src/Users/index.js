import React, { Component } from "react";

class Users extends Component {

  componentDidMount() {
    console.log("component");
    this.fetchList()
  }

  fetchList() {
    fetch('/.json')

      .then(response => response.json())
      .then(api => this.setState({ api }))
      .catch(err => {
        console.log(err);
      })
    console.log('fetch working');

  }

  render() {
    return (
      <div className="Users">
            <h3>Members</h3>
          <ul className="users-list">
            {this.props.api.user.map(user =>
              <li key={user.user_id}>
                <p>{user.user_name}</p>
                <img className="userpic" src={user.user_img} />
              </li>
            )}
          </ul>
      </div>
    );
  }
}

export default Users;