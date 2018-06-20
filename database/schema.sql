
DROP DATABASE IF EXISTS trip_schedule;

CREATE DATABASE trip_schedule;

\c trip_schedule;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS trips;
DROP TABLE IF EXISTS activities;
DROP TABLE IF EXISTS user_trip;


CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_name TEXT
);

CREATE TABLE trips (
  trip_id SERIAL PRIMARY KEY,
  trip_name TEXT NOT NULL
);

CREATE TABLE activities (
  activity_id SERIAL PRIMARY KEY,
  activity_name TEXT NOT NULL,
  user_id INTEGER REFERENCES users(user_id),
  trip_id INTEGER REFERENCES trips(trip_id)
);

CREATE TABLE user_trip (
  user_trip_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  trip_id INTEGER REFERENCES trips(trip_id)
);


