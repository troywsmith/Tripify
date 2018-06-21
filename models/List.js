const db = require('../database/connection');

const List = {};

List.all = () => {
  return db.any('SELECT * FROM list');
};

module.exports = List;