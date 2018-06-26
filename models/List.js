const db = require('../database/connection');

const List = {};

List.all = () => {
  return db.any('SELECT * FROM list');
};

List.find = id => {
  return db.one('SELECT * FROM list WHERE list_id = $<id>', { id: id });
}

List.create = newListItem => {
  return db.one('INSERT INTO list (item) VALUES ($<item>) RETURNING *', newListItem);
};

List.update = updateListItem => {
  return db.none(`UPDATE list SET 
  item = $<item> WHERE list_id = $<id>`, updateListItem);
}

List.delete = id => {
  return db.none(`DELETE FROM list WHERE list_id = $<id>`, {id: id})
}

module.exports = List;