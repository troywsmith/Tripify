import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      api: {
        user: []
      },
      created: false,
    }
  }

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
      <div className="list">
          <div className="list-div">
          <div className="tab-header">
            <h2>Members</h2>
          </div>
          <ul className="list-list"> 
            {console.log(this.state.api.user)}
            {this.state.api.user.map(user => 
            <li key={user.user_id}>
                {user.username}
                {user.user_img}
            </li>
            )}
          </ul>
          </div>
      </div>
    );
  }
}
export default List;
