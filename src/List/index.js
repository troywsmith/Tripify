import React, { Component } from "react";

class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      api: {
        list: []
      },
      name: "",
      created: false,
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    console.log("component");
    
    this.fetchList()
  }

  fetchList() {
    fetch('/.json')
    
      .then(response => response.json())
      .then(api => this.setState({ api }))
      .catch(err => {
        console.log(err);
      })
       console.log('fetch working');

  }

  onFormChange(evt) {
    const element = evt.target;
    const name = element.name; //"title"
    const value = element.value; //"g"
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    const newListItem = {
      name: this.state.item,
    }
    fetch('/.json', {
      method: "POST",
      body: JSON.stringify(newListItem),
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      }
    }).then(response => response.json())
      .then(listItem => {
        this.setState({
          created: true
        });
        this.fetchList()
      })
  }

  render() {

    return (
      <div className="list">
        <h1>Create a new List Item!</h1>
          <div className="list-div">
          <h3>List</h3>
          <ul className="list-list"> 
          {this.state.api.list.map(item => 
          <li key={item.list_id}>{item.item}</li>
          )}
          </ul>
          </div>

        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          <p>
            <label for="item">List Item</label>
            <input
              type="text"
              name="item"
              value={this.state.item}
            />
          </p>
          <p>
            <input type="submit" value="Create Item" />
          </p>
        </form>
      </div>
    );
  }
}

export default List;
