const db = require('../database/connection');

const List = {};

List.all = () => {
  return db.any('SELECT * FROM list');
};

List.create = newListItem => {
  return db.one('INSERT INTO list (list_name) VALUES ($<name>) RETURNING *', newListItem);
};

module.exports = List;