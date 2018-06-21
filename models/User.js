const db = require('../database/connection');
const User = {};

User.all = () => {
  return db.any('SELECT * FROM users');
};

module.exports = User;