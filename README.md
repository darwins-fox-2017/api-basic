# api-basic

My Basic API
============

Demo app with basic REST api-basic

List of basic routes:

|Route                |HTTP|Description        |
|---------------------|----|-------------------|
|/api/hello?name{name}|GET |Print hello, {name}|

List of user routes:

|Route                |HTTP|Description          |
|---------------------|----|---------------------|
|/api/users           |GET   |Get all the users  |
|/api/users/:id       |GET   |Get a single user  |
|/api/user            |POST  |Create a User      |
|/api/users/:id       |DELETE|Delete a user      |
|/api/users/:id       |PUT   |Update a user wit a new info|
|/api/users/:id       |PATCH |Update a user with specific info|

List of filter routes:

|Route                |HTTP|Description        |
|---------------------|----|-------------------|
|/api/hello?name="{name}"|GET |Get {name} match in users|
|/api/users?name="{na}"|GET|Get {na} like in users

USAGE
-----

With only NPM:

>npm install <br>
>npm start <br>
>npm run dev


Access the website via <http://localhost:3000> or API via <http://localhost:3000/api>
