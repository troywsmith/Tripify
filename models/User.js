const db = require('../database/connection');

const User = {};

User.all = () => {
  return db.any('SELECT * FROM users');
};

User.create = user => {
  return db.one('INSERT INTO users (username, password_digest) VALUES ($<user.username>, $<user.password_digest>) RETURNING *', user);
};

module.exports = User;