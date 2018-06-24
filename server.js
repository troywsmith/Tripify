const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
// Import socket for chat messaging feature
const socket = require('socket.io');

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


app.post('/.json', (request, response) => {
  // console.log(request) 
  const newListItem = {
    name: request.body.name // Why not list_name? Check List Model too
  };
  console.log('create list item:', newListItem)
  List.create(newListItem)
    .then(listItem => {
      response.json(listItem);
    });
});

// app.get('/users', (request, response) => {
//   User.all()
//     .then(data => {
//       response.json(data);
//     });
// });

// app.get('/activity', (request, response) => {
//   Activity.all()
//     .then(data => {
//       response.json(data);
//     });
// });

// app.get('/trip', (request, response) => {
//   Trip.all()
//     .then(data => {
//       response.json(data);
//     });
// });

// app.get('/usertrip', (request, response) => {
//   UserTrip.all()
//     .then(data => {
//       response.json(data);
//     });
// });

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