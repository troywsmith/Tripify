import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div className="list">
        <h1>Create a new List Item!</h1>
          <div className="list-div">
          <h3>List</h3>
          <ul className="list-list"> 
          {this.props.api.list.map(item => 
          <li key={item.list_id}>{item.list_name}</li>
          )}
          </ul>
          </div>

        <form>
          <p>
            <label for="list-item">List Item</label>
            <input
              type="text"
              name="list_name"
              // value={this.state.name}
            />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </div>
    );
  }
}

export default List;
