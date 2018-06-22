
\c trip_schedule; 

DELETE FROM users;
DELETE FROM trips;
DELETE FROM activities;
DELETE FROM user_trip;
DELETE FROM list;

INSERT INTO users (user_name, user_img) VALUES ('Jae', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png');
INSERT INTO users (user_name, user_img) VALUES ('Raul', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png');
INSERT INTO users (user_name, user_img) VALUES ('Troy', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png');

INSERT INTO trips (trip_name, trip_password_digest, trip_description) VALUES ('Camping 2018', 'password', 'General Assembly WDI Tesseract camping trip!');

INSERT INTO activities (activity_name, date, time, trip_id) VALUES ('Set up camp', 'June 25th', '7PM', 1);
INSERT INTO activities (activity_name, date, time, trip_id) VALUES ('Search for firewood', 'June 25th', '8PM', 1);
INSERT INTO activities (activity_name, date, time, trip_id) VALUES ('Bonfire', 'June 25th', '9PM', 1);
INSERT INTO activities (activity_name, date, time, trip_id) VALUES ('Smore', 'June 25th', '10PM', 1);

INSERT INTO list (item) VALUES ('bug spray');
INSERT INTO list (item) VALUES ('cooler');
INSERT INTO list (item) VALUES ('snacks');
INSERT INTO list (item) VALUES ('beer');
INSERT INTO list (item) VALUES ('tent');

INSERT INTO user_trip (user_id, trip_id) VALUES (1, 1);
INSERT INTO user_trip (user_id, trip_id) VALUES (2, 1);
INSERT INTO user_trip (user_id, trip_id) VALUES (3, 1);

