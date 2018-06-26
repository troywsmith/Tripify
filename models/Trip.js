
const db = require('../database/connection');

const Trip = {};

Trip.all = () => {
  return db.any('SELECT * FROM trips ORDER BY trip_id ASC');
}

Trip.find = id => {
  return db.one('SELECT * FROM trips WHERE id = $<id>', { id: id });
}

Trip.create = newTrip => {
  return db.one('INSERT INTO trips (trip_name, trip_password_digest) VALUES ($<name>, $<trip_password_digest>) RETURNING *', newTrip);
}

Trip.update = updateTrip => {
  return db.none(`UPDATE trips SET 
  trip_name = $<trip_name>, trip_password_digest = $<trip_password_digest> WHERE id = $<id>`, updateTrip);
}

module.exports = Trip;
