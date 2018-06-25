const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
// Import socket for chat messaging feature
const socket = require('socket.io');
const bcrypt = require('bcrypt');
saltRounds = 10;

// Create a new Express application (web server)
const app = express();

// API for our database models
const User = require('./models/User');
const Trip = require('./models/Trip');
const Activity = require('./models/Activity');
const List = require('./models/List');

// Set the port based on the environment variable (PORT=8080 node server.js)
// and fallback to 4567
const PORT = process.env.PORT || 4567;

// ALL APP.USE
// Needed for Heroku
app.use('/static', express.static('build/static'));
app.use(jsonParser);

app.use(bodyParser.urlencoded({
  extended: false
}));

// In production, any request that doesn't match a previous route
// should send the front-end application, which will handle the route.
// if (process.env.NODE_ENV == "production") {
//   app.get("/*", function (request, response) {
//     response.sendFile(path.join(__dirname, "build", "index.html"));
//   });
// }

app.get('/.json', (request, response) => {
    Promise.all([
      User.all(),
      Activity.all(),
      Trip.all(),
      List.all()
    ])
    .then(([user, activity, trip, list]) => {
      console.log(`about to render api`)
      response.json({
        trip: trip,
        user: user,
        activity: activity,
        list: list
      });
    });
});

// Create List Item
app.post('/.json', (request, response) => {
  // console.log(request) 
  const newListItem = {
    item: request.body.item 
  };
  console.log('create list item:', newListItem)
  List.create(newListItem)
    .then(listItem => {
      response.json(listItem);
    });
});


// app.post('/.json', (request, response) => {
//   // console.log(request) 
//   const newUser = {
//     name: request.body.name,
//     password: request.body.password
//   };
//   console.log('create new user:', newUser)
//   User.create(newUser)
//     .then(user => {
//       response.json(user);
//     });
// });

// app.post("/.json", (request, response) => {
//   const username = request.body.username;
//   const password = request.body.password;
//   console.log('username: '  username);
//   console.log('password: '  password);
//   bcrypt
//     .hash(password, saltRounds)
//     .then(hash => {
//       const newUser = {
//         username: username,
//         password_digest: hash,
//       };
//       console.log('create new user:', newUser)
//       User.create(newUser);
//       return User.create(newUser);
//     })
//     // .then(user => {
//     //   request.session.loggedIn = true;
//     //   request.session.userId = user.id;
//     // })   
//     .then(user => {
//       response.json(user);
//       });
// });


// Update List Item
app.put('/list/:id.json', (request, response) => {
  console.log(request.params); 
  let id = request.params.id;
  const updatedListItem = {
    id: request.body.id,
    item: request.body.item 
  };
  console.log('update list item:', updatedListItem)
  List.update(updatedListItem)
    .then(listItem => {
      response.json(listItem);
    });
});

// Delete List Item
app.delete('/.json', (request, response) => {
  const id = Number(request.params.id);
  console.log('deleting item', id);
  List.delete(id)
  .then(deleteItem => {
    response.json(deleteItem)
  }) 
});


// Start the web server listening on the provided port.
const server = app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});

// Socket/Chat functions must be after app.listen
const io = socket(server);

io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on('SEND_MESSAGE', (data) => {
    io.emit('RECEIVE_MESSAGE', data);
  });
  socket.on('disconnect', (socket) => {
    console.log('user disconnected')
  });
});