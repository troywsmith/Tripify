const db = require('../database/connection');

const User = {};

User.all = () => {
  return db.any('SELECT * FROM users');
};

//for login
User.findByUsername = username =>
  db.one(`
  SELECT * 
  FROM users 
  WHERE username = $1`, [username]);

//for register
User.create = user => {
  return db.one('INSERT INTO users (username, password_digest) VALUES ($<username>, $<password_digest>) RETURNING *', user);
};

module.exports = User;