import React, { Component } from "react";

class UpdateList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: "",
    };
  }


  onItemChange = (evt) => {
    const newItem = evt.currentTarget.value;

    this.setState({ newItem });
  }

  onSubmit = (evt) => {
    evt.preventDefault()

    const { onSubmit, item } = this.props;
    const { newItem } = this.state;

    onSubmit(newItem, item.list_id);
    this.setState({
      newItem: "",
    });
  }

  render() {
    const { newItem } = this.state;

    return (
      <div className="UpdateListItem">
        <form onSubmit={this.onSubmit}>
          <p>
            <input
              type="text"
              name="item"
              value={newItem}
              onChange={this.onItemChange}
            />
          </p>

          <p>
            <input type="submit" value="✏️" />
          </p>

        </form>
      </div>
    );
  }
}


export default UpdateList;
