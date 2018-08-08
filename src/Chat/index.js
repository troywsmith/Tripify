import React, { Component } from "react";
import io from "socket.io-client";
import "./style.css";

class Chat extends Component {
  /*
  The bulk of the below code was through a tutorial from:
  https://blog.cloudboost.io/creating-a-chat-web-app-using-express-js-react-js-socket-io-1b01100a8ea5
  */
  constructor(props) {
    super(props);
    this.state = {
      api: {
        message: []
      },
      username: this.props.username,
      message: "",
      created: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //     // Set up backend server.
  //     this.socket = io('localhost:4567');

  //     // Connect messages being added to the socket on the backend.
  //     this.socket.on('RECEIVE_MESSAGE', (data) => {
  //       addMessage(data);
  //     });

  //     // Change state for new messages to be added to the page/array from all sources/clients.
  //     const addMessage = (data) => {
  //       console.log(data);
  //       // The ... is a spread that allows new messages to be inserted into the message array.
  //       this.setState({
  //         messages: [...this.state.messages, data]
  //       });
  //       console.log(this.state.messages);
  //     }
  //   }

  componentDidMount() {
    console.log("component");
    this.fetchList();
  }

  fetchList() {
    fetch("/.json")
      .then(response => response.json())
      .then(api => this.setState({ api }))
      .catch(err => {
        console.log(err);
      });
    console.log("fetch working");
  }

  // Change state for a new message value from source page to be accepted from host client.
  handleChange = evt => {
    console.log(evt.target);
    this.setState({
      message: evt.target.value
    });
  };

  // On submit, renders a new message to the page.
  handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt);
    // alert('MESSAGE SUBMITTED');
    // this.socket.emit('SEND_MESSAGE', {
    //   user_name: this.props.username,
    //   message: this.state.message
    // })
    this.setState({
      message: ""
    });
    const newMessage = {
      username: this.props.user_name,
      message: this.state.message
    };
    this.setState({
      message: ""
    });
    fetch("/new_message.json", {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(message => {
        this.setState({
          created: true
        });
        this.fetchList();
      });
  };

  render() {
    return (
      <div className="chat-container">
        <h2> Welcome to {this.props.tripcode} </h2>
        <h4> Welcome, {this.props.username}! </h4>
        <div className="messages-display">
          {this.state.api.message.map(message => {
            return (
              <div key={message.message_id} className="chat-window-message">
                {message.username}: {message.content}
              </div>
            );
          })}
        </div>
        <div className="chat-input">
          <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <input
              className="message-input"
              type="text"
              name="message"
              placeholder="Type message here ..."
              value={this.state.message}
              required
            />
            <button
              className="submit-btn"
              className="button"
              type="submit"
              value="Send"
              onClick={this.sendMessage}
            >
              {" "}
              ➜
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Chat;
