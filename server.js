const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

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
app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});