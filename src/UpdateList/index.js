import React, { Component } from "react";

class UpdateList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      api: {
        list: []
      },
      updated: false
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    let id = this.props.id;
    console.log('line 222', this.props);
    
    fetch(`/list/${id}.json`)
      .then(response => response.json())
      .then(listItem => this.setState({ 
        // api: api.list, 
        id: listItem.list_id,
        item: listItem.item
      })
    )
      .catch(err => {
        console.log(err);
      })
      this.fetchList();
    console.log('fetch working update');
    // this.updateFetchList()
    console.log("component is mounting");
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
    const id = this.props.id
    // console.log(this.props.id)
    const updateListItem = {
      id: id,
      item: this.state.item,
    }
    console.log(this.state.id);
    
    // console.log(updateListItem)
    fetch(`/list/${this.state.id}.json`, {
      method: "PUT",
      body: JSON.stringify(updateListItem),
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      }
    }).then(response => response.json())
      .then(updatelistItem => {
        this.setState({
          updated: true,
        });
        this.fetchList();
      })
  }


  render() {

    return (

      <div className="UpdateListItem">

        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          <p>
            <input
              type="text"
              name="item"
              value={this.state.item}
            />
          </p>
          <p>
            <input type="submit" value="Edit List Item ✏️" />
          </p>

        </form>
      </div>

    );
  }
}

export default UpdateList;
