import React, { Component } from "react";
import Users from '../Users';

class Dashboard extends Component {
  state = { 
    users: []
   }

  componentDidMount() {
    fetch('/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="Dashboard">
        <main>
            <div className="page">
                <div className="chatdiv">
                    <h3>Chat</h3>
                </div>
            </div>
            <div className="sidebar">
                <Users users={this.state.users}/>
            </div>
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}

export default Dashboard;