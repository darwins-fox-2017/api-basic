# api-basic

basic routes
  route: http://localhost:3000/api/hello?name={name}
  http: GET
  discription: print hello, {name}

user routes
  route: http://localhost:3000/api/users
  http: GET
  discription: GET ALL USERS DATA

  route: http://localhost:3000/api/users/:id
  http: GET
  discription: GET DATA USER WITH NUMBER ID (QUERY URL)

  route: http://localhost:3000/api/users
  http: POST
  discription: CREATE NEW USER DATA

  route: http://localhost:3000/api/users/:id
  http: DELETE
  discription: DELETE ONE DATA USER WITH NUMBER ID (QUERY URL)

  route: http://localhost:3000/api/users/:id
  http: PUT
  discription: UPDATE ONE DATA USER WITH NUMBER ID (QUERY URL)

  route: http://localhost:3000/api/users/:id
  http: PATCH
  discription: UPDATE ONE DATA USER WITH NUMBER ID (QUERY URL) (SPESIFIC INFO)

filter routes
  route: http://localhost:3000/api/users?name="{name}"
  http: GET
  discription: GET {name} MATCH IN USERS

  route: http://localhost:3000/api/users?name="{na}"
  http: GET
  discription: GET {na} LIKE IN USERS

how to use:
  npm install
  npm start
  npm run dev

link to access
  http://localhost:3000
  http://localhost:3000/api
