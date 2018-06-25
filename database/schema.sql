
DROP DATABASE IF EXISTS trip_schedule;

CREATE DATABASE trip_schedule;

\c trip_schedule;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS trips;
DROP TABLE IF EXISTS activities;
DROP TABLE IF EXISTS user_trip;
DROP TABLE IF EXISTS list;


CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  password_digest TEXT NOT NULL,
  user_img TEXT
);

CREATE TABLE trips (
  trip_id SERIAL PRIMARY KEY,
  trip_name TEXT NOT NULL,
  trip_password_digest TEXT NOT NULL,
  trip_description TEXT
);

CREATE TABLE activities (
  activity_id SERIAL PRIMARY KEY,
  activity_name TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  trip_id INTEGER REFERENCES trips(trip_id)
);

CREATE TABLE list (
  list_id SERIAL PRIMARY KEY,
  item TEXT NOT NULL
);

CREATE TABLE user_trip (
  user_trip_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  trip_id INTEGER REFERENCES trips(trip_id)
);

CREATE TABLE messages (
  message_id SERIAL PRIMARY KEY,
  content TEXT NOT NULL, 
  user_id INTEGER REFERENCES users(user_id)
)