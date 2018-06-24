Project #3: Tripify

Project Summary:
We’re building an app called Tripify to help groups of friends be prepared for an outing. Going to the beach? Friends can list items needed such as sunscreen, beach chairs, and frisbees and let everyone know who’s bringing a specific item. Live chatting is featured with views to groups various lists.

User Stories:
As a User, I want to make it easier to plan trips so that all my friends can be informed/up-to-date.
As a User, I want my friends take sign up for tasks so we know who’s responsible for a specific task/item.
As a User, I want to know what I should bring so I can be beneficial to the group.

Database Structure/ERD:

Users Table
┌─────────┬───────────┐
│ user_id │ user_name │
└─────────┴───────────┘

Trips Table
┌─────────┬───────────┬──────────────────────┐
│ trip_id │ trip_name │ trip_password_digest │
└─────────┴───────────┴──────────────────────┘


User_Trip Table
┌──────────────┬─────────┬─────────┐
│ user_trip_id │ user_id │ trip_id │
└──────────────┴─────────┴─────────┘

Activities Table
┌─────────────┬───────────────┬─────────┬─────────┐
│ activity_id │ activity_name │ user_id │ trip_id │
└─────────────┴───────────────┴─────────┴─────────┘

Potential Issues:
This will be a lot of new information for us to learn as well as operations we’re novices at, i.e. Git branching, developing a functional messaging application, and a single-page viewport for dynamic state change.

Technologies Used:

React - for front-end structure
JSX - to render information on the page
CSS - to style my app
Node/Express - built server using Express
SQL / PG-PROMISE - to persist data
Moment - to timestamp messages
Bcrypt - to hash user passwords
Bodyparser - to parse incoming request bodies
Heroku - to deploy app

Wireframes:

LANDING PAGE
ACTIVE PAGE




