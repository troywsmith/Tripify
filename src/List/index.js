import React, { Component } from "react";
import UpdateList from "../UpdateList";

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      api: {
        list: []
      },
      item: "",
      created: false,
      delete: false
    }
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
    console.log('fetch working for LIST');
  }

  onFormChange = (evt) => {
    const element = evt.target;
    const name = element.name; //"title"
    const value = element.value; //"g"
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  onFormSubmit = (evt) => {
    evt.preventDefault();
    const newListItem = {
      item: this.state.item,
    }
    this.setState({
      item: ''
    });
    fetch('/new_list_item.json', {
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

  onUpdateList = (item, id) => {
    fetch(`/list/${id}.json`, {
      method: "PUT",
      body: JSON.stringify({ item }),
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      }
    })
      .then(updateListItem => {
        this.setState({
          item: ''
        });
        this.fetchList();
      })
  }

  onFormDelete = (evt, id) => {
    evt.preventDefault();
    const list = this.state.api.list;

    fetch(`/list/${id}.json`, {
      method: "DELETE",
    })
      .then(deletedlistItem => {
        this.setState({
          delete: true,
        });
        this.fetchList();
      })
  }


  render() {
    return (
      <div className="list">
        <h3>List</h3>
        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit} >
          <p>
            <input
              type="text"
              name="item"
              value={this.state.item}
              placeholder="new item"
            />
          </p>

          <p>
            <input className="button" type="submit" value="Create Item" />
          </p>

        </form>
        <div className="list-display">
          <ul className="list-list">
            {this.state.api.list.map((item, index) => {
              return <li className="list-items"
                key={index}>
                <div>{item.item}</div>

                <div><UpdateList item={item} onSubmit={this.onUpdateList} /></div>
                {/* <DeleteListItem id={item.list_id} /> */}
                <div>
                  <button type="submit" onClick={(e) => this.onFormDelete(e, item.list_id)}>🗑</button>
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default List;
