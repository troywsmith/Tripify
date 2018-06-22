import React, { Component } from "react";

class Chat extends Component {
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