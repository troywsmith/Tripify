import React, { Component } from "react";
import Users from '../Users';
import Itinerary from '../Itinerary';

class Dashboard extends Component {
  // state = { 
  //   users: []
  //  }



  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showItinerary: false,
      showUsers: false,
    };
    this._onItineraryClick = this._onItineraryClick.bind(this);
    this._onUsersClick = this._onUsersClick.bind(this);

  }

  componentDidMount() {
    fetch('/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  _onItineraryClick() {
    this.setState({
      showItinerary: true,
      showUsers: false
    });
  }
  _onUsersClick() {
    this.setState({
      showUsers: true,
      showItinerary: false
    });
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

              <div className="tabnav">
                <div className="tab">
                  <button onClick={this._onItineraryClick}>Itinerary</button>
                </div>
                <div className="tab">
                  <button onClick={this._onUsersClick}>Users</button>
                </div>
              </div>
              
              <div className="tabcontentsection">
                <div id="Itinerary" className="tabcontent">
                  {this.state.showItinerary ?
                  <Itinerary activities={this.state.users}/> :
                  null
                  }
                </div>
                <div id="Users" className="tabcontent">
                  {this.state.showUsers ?
                  <Users users={this.state.users}/> :
                  null
                  }
                </div>
              </div>

            </div>
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}

export default Dashboard;