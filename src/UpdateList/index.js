import React, { Component } from "react";

class UpdateList extends Component {

  render() {

    return (

      <div className="UpdateBuilding">

        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          <p>
            <label for="item">Update List Item</label>
            <input
              type="text"
              name="item"
              // value={this.state.item}
            />
          </p>
          <p>
            <input type="submit" value="Update List Item" />
          </p>

        </form>
      </div>

    );
  }
}

export default UpdateList;
