import React, { Component } from "react";
import io from "socket.io-client";

class Chat extends Component {
    /*
    The bulk of the below code was through a tutorial from:
    https://blog.cloudboost.io/creating-a-chat-web-app-using-express-js-react-js-socket-io-1b01100a8ea5
    */
    constructor(props) {
        super(props);

        // Set origin state of the page.
        this.state = {
            user_name: '',
            message: '',
            messages: []
        };

        // Set up backend server.
        this.socket = io('localhost:4567');

        // Connect messages being added to the socket on the backend.
        this.socket.on('RECEIVE_MESSAGE', (data) => {
            addMessage(data);
        });

        // Change state for new messages to be added to the page/array (from all sources/clients).
        const addMessage = (data) => {
            console.log(data);
            // The .... is a spread that allows new messages to be inserted into the message array.
            this.setState({ messages: [...this.state.messages, data] });
            console.log(this.state.messages)
        }

        // Change state for a new message value from source page to be accepted (from host client).
        this.handleChange = (evt) => {
            console.log(evt.target)
            this.setState({ message: evt.target.value })
        }

        // On submit, renders a new message to the page.
        this.handleSubmit = (evt) => {
            evt.preventDefault();
            console.log(evt)
            // alert('MESSAGE SUBMITTED');
            this.socket.emit('SEND_MESSAGE', {
                user_name: this.state.user_name,
                message: this.state.message
            })
            this.setState({ message: '' });
        }
    }
  render() {
    return (
        <div className="chat-container">
            <div className="chat-window">
            </div>
            <form className="chat-form">
                <input type="text">
                </input>
                <button>Send</button>
            </form>
        </div>
    );
  }
}

export default Chat;