const db = require('../database/connection');

const User = {};

User.all = () => {
  return db.any(`
  SELECT * 
  FROM users ORDER BY user_id ASC`);
};

//for login
User.findByUsername = username =>
  db.one(`
  SELECT * 
  FROM users 
  WHERE username = $1`, [username]);

//for register
User.create = user => {
  return db.one(`
  INSERT INTO users (username, password_digest, user_img) 
  VALUES ($<username>, $<password_digest>, 'https://cdn2.vectorstock.com/i/thumb-large/34/96/flat-busness-man-user-profile-avatar-in-suit-vector-4333496.jpg') 
  RETURNING *`, user);
};

module.exports = User;