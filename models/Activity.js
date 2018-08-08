
const db = require('../database/connection');

const Activity = {};

Activity.all = () => {
  return db.any('SELECT * FROM activities;');
}

Activity.find = id => {
  return db.one('SELECT * FROM activities WHERE id = $<id>', { id: id });
}

Activity.create = newActivity => {
  return db.one('INSERT INTO activities (activity_name, date, time) VALUES ($<activity_name>, $<date>, $<time>) RETURNING *', newActivity);
}

Activity.update = updateActivity => {
  return db.none(`UPDATE activities SET 
  activity_name = $<activity_name>, user_id = $<user_id>, trip_id = $<trip_id> WHERE id = $<id>`, updateActivity);
}

module.exports = Activity;
