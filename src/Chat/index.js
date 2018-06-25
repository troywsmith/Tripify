import React, { Component } from "react";
import io from "socket.io-client";
import "./style.css"

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

        // Change state for new messages to be added to the page/array from all sources/clients.
        const addMessage = (data) => {
            console.log(data);
            // The .... is a spread that allows new messages to be inserted into the message array.
            this.setState({ messages: [...this.state.messages, data] });
            console.log(this.state.messages)
        }

        // Change state for a new message value from source page to be accepted from host client.
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

        // Disable send message button if there is no input

    }
    render() {
        return (
            <div className="chat-container">
                <div className="messages-display">
                    {/* Displays messages */}
                    {this.state.messages.map(message => {
                        return (
                            <div className="chat-window-message">{message.user_name}: {message.message}</div>
                        )
                    })}
                </div>
                {/* Area for client name and messages to be entered. */}
                <div className="chat-input">
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label for="user_name">Name: </label>
                        <input
                            type='text'
                            name='user_name'
                            placeholder='Enter Name here'
                            value={this.state.user_name}
                            onChange={evt => { this.setState({ user_name: evt.target.value }) }} />
                    </p>
                    <p>
                            <label htmlFor="message">Message: </label>
                            <input className="message-input"
                                type='text'
                                name='message'
                                placeholder='Type message here ...'
                                value={this.state.message}
                                onChange={this.handleChange}
                            />
                            <button className="submit-btn" type="submit" value="Send" onClick={this.sendMessage} >➜</button>
                    </p>
                </form>
                </div>
            </div>
        );
    }
}

export default Chat;