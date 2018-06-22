import React, { Component } from "react";

class Login extends Component {
    render() {
        return (
        <div className="logindiv">
          <h2>Join a trip</h2>
          <form action="/" method="GET">
            <div>
              <input type="text" name="code" placeholder="trip code" />
            </div>
            <div>
              <input type="text" name="password" placeholder="trip password" />
            </div>
            <div>
              <input type="name" name="name" placeholder="your display name" />
            </div>
            <div className="submitdiv">
            </div>
          </form>
        </div>
        );
    }
}

export default Login;