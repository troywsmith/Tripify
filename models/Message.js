const db = require('../database/connection');

const Message = {};

Message.all = () => {
  return db.any(`
  SELECT * 
  FROM messages`);
};

Message.create = newMessage => {
  return db.one(`
  INSERT INTO messages (username, content) 
  VALUES ($<username>, $<content>) 
  RETURNING *`, newMessage);
};

module.exports = Message;