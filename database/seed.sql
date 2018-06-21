
\c trip_schedule; 

DELETE FROM users;
DELETE FROM trips;
DELETE FROM activities;
DELETE FROM user_trip;
DELETE FROM list;


INSERT INTO users (user_name) VALUES ('Jae');
INSERT INTO users (user_name) VALUES ('Raul');
INSERT INTO users (user_name) VALUES ('Troy');

INSERT INTO trips (trip_name, trip_password_digest) VALUES ('Camping', 'password');

INSERT INTO activities (activity_name, user_id, trip_id) VALUES ('Set up camp', 1, 1);
INSERT INTO activities (activity_name, user_id, trip_id) VALUES ('Get Firewood', 2, 1);
INSERT INTO activities (activity_name, user_id, trip_id) VALUES ('Start Fire', 3, 1);


INSERT INTO user_trip (user_id, trip_id) VALUES (1, 1);
INSERT INTO user_trip (user_id, trip_id) VALUES (2, 1);
INSERT INTO user_trip (user_id, trip_id) VALUES (3, 1);

INSERT INTO list (list_name) VALUES ('Bring bug spray');
INSERT INTO list (list_name) VALUES ('Pack Cooler');
INSERT INTO list (list_name) VALUES ('Pack Snacks');
