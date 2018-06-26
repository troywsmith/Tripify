## Project #3: Tripify

### Project Summary:
We’re building an app called Tripify to help groups of friends be prepared for an outing. Going to the beach? Friends can list items needed such as sunscreen, beach chairs, and frisbees and let everyone know who’s bringing a specific item. Live chatting is featured with views to groups various lists.

### User Stories:
As a User, I want to make it easier to plan trips so that all my friends can be informed/up-to-date.
As a User, I want my friends take sign up for tasks so we know who’s responsible for a specific task/item.
As a User, I want to know what I should bring so I can be beneficial to the group.

### Database Structure/ERD:

Table: users

user_id | user_name | user_img
--- | --- | ---
1 | example123 | www.examplepicture.com

Table: trips

trip_id | trip_name_ | trip_password_digest | trip description
--- | --- | --- | ---
1 | GA Camping Trip '18 | examplepw | Lets go camping this summer

Table: activities

activity_id | activity_name_ | date | time | trip_id
--- | --- | --- | --- | ---
1 | Bonfire | June 25th | 9AM | 1

Table: list

item_id | item 
--- | --- 
1 | Fire Starter 

Table: user_trip

user_trip_id | user_id | trip_id
--- | --- | ---
1 | 1 | 1

### Potential Issues:

This will be a lot of new information for us to learn as well as operations we’re novices at, i.e. Git branching, developing a functional messaging application, and a single-page viewport for dynamic state change.

### Technologies Used:

Tech | Description
--- | --- 
React | Front end structure
JSX | Render information on to page
CSS | style
Node/Express | built server using express
SQL / PG-PROMISE | to persist data
Moment | to timestamp messages
Bcrypt | to hash user passwords
Socket.io | chat functionality
Bodyparser | to parse incoming request bodies
Heroku | to deploy app

### Wireframes

![launch](/images/launch.png)
![dashboard](/images/dashboard.png)




