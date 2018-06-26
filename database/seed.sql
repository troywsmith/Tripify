
\c trip_schedule; 

DELETE FROM users;
DELETE FROM trips;
DELETE FROM activities;
DELETE FROM user_trip;
DELETE FROM list;

INSERT INTO users (username, password_digest, user_img) VALUES ('Jae', 'password', 'https://media.licdn.com/dms/image/C4E03AQGVxg-u63Xwsg/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=LIfRANiTMIYQU0bzV_vXvdTICg_S0Q_93prdiItmA-E');
INSERT INTO users (username, password_digest, user_img) VALUES ('Raul', 'password', 'https://media.licdn.com/dms/image/C4D03AQFBXz-wtA7uEQ/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=wa4NN02XCd8CVIHPEEjV-5AA0ckiTsLARVprHSb-1e8');
INSERT INTO users (username, password_digest, user_img) VALUES ('Troy', 'password', 'https://media.licdn.com/dms/image/C4E03AQEsuH6Dao8u1g/profile-displayphoto-shrink_200_200/0?e=1534982400&v=beta&t=6eoq-shv6Pkj5YKCAOvbh3pxAiP0WqJVxr89-r1jRws');

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

INSERT INTO messages (content, username) VALUES ('What should we bring?', 'Troy');
INSERT INTO messages (content, username) VALUES ('La Croix!', 'Raul');
INSERT INTO messages (content, username) VALUES ('NEED HOT DOGS', 'Jae');
INSERT INTO messages (content, username) VALUES ('Great, add them to the list.', 'Troy');