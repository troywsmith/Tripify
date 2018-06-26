import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      created: false,
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // componentDidMount() {
  //   console.log("component did mount");
  //   this.fetchList()
  // }

  // fetchList() {
  //   fetch('/.json')
  //     .then(response => response.json())
  //     .then(api => this.setState({ api }))
  //     .catch(err => {
  //       console.log(err);
  //     })
  //      console.log('fetch working');

  // }

  onFormChange(evt) {
    const element = evt.target;
    console.log('element: ' + element)
    const elementname = element.name; //"title"
    console.log(elementname);

    let un = '';
    let pw = '';

    if (elementname === 'username') {
      un = element.value;
      this.setState({username: un});
    } else {
      pw = element.value;
      this.setState({password: pw});
    }    

    console.log(this.state);
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    this.setState({
      username: '',
      password: ''
    });
    fetch('/register.json', {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      }
    })
      // .then(response => response.json())
      .then(user => {
        this.setState({
          created: true
        });
      })
  }

  render() {
    return (
      <div className="list">
          <div className="list-div">
            <h3>Register</h3>
            <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
              <div>
                  <input
                      type="text"
                      name="username"
                      value={this.state.username}
                      placeholder="username"
                  />
              </div>
              <div>
                  <input
                    type="text"
                    name="password"
                    value={this.state.password}
                    placeholder="password"
                  />
              </div>
              <input type="submit" value="Register"/>
            </form>
          </div>
      </div>
    );
  }
}
export default Register;



















// import React, { Component } from "react";

// class CreateMember extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       // api: {
//       //   User: []
//       // },
//       name: "",
//       created: false,
//     }
//     this.onFormChange = this.onFormChange.bind(this);
//     this.onFormSubmit = this.onFormSubmit.bind(this);
//   }

//   // componentDidMount() {
//   //   console.log("component");
//   //   // this.fetchUser()
//   // }

//   // fetchUser() {
//   //   fetch('/.json')
//   //     .then(response => response.json())
//   //     .then(api => this.setState({ api }))
//   //     .catch(err => {
//   //       console.log(err);
//   //     })
//   //      console.log('fetch working');
//   // }

//   onFormChange(evt) {
//     const element = evt.target;
//     const name = element.name; //"title"
//     const value = element.value; //"g"
//     const newState = {};
//     newState[name] = value;
//     this.setState(newState);
//   }

//   onFormSubmit(evt) {
//     evt.preventDefault();
//     const user = {
//       name: this.state.username,
//     }
//     this.setState({
//       username: ''
//     });
//     fetch('/.json', {
//       method: "POST",
//       body: JSON.stringify(user),
//       headers: {
//         "Accept": "application/json",
//         "Content-type": "application/json"
//       }
//     }).then(response => response.json())
//       .then(user => {
//         this.setState({
//           created: true
//         });
//         this.fetchUser()
//       })
//   }

//   render() {
//     return (
//       <div className="user">
//           <div className="user-div">
//             <h3>Choose your display name</h3>
//             <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
//               <p>
//                 <label for="user"></label>
//                 <input
//                   type="text"
//                   name="user"
//                   value={this.state.user}
//                   placeholder="your display name"
//                 />
//               </p>
//               <p>
//                 <input type="submit" value="Create User" />
//               </p>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
// export default CreateMember;


{/* <div class="registerdiv">
<h2>Create a new account</h2>

<form class="registerform" action="/register" method="POST">
  <div>
    <input type="text" name="username" placeholder="username" />
  </div>
  <div>
    <input type="text" name="password" placeholder="password" />
  </div>
  <div>
    <input type="email" name="email" placeholder="email" />
  </div>
  <div class="submitdiv">
    <button>Register</button>
  </div>
</form>
</div> */}
