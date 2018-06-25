import React, { Component } from "react";


class DeleteListItem extends Component {
  render() {
    return (

      <div className="delete-list-item">

          <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>

            <p>
              <input type="submit" value="Delete List Item 🗑" />
            </p>

          </form>

      </div>

    );
  }
}

export default DeleteListItem;
