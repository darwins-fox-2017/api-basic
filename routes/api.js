var express = require('express');
var router = express.Router();
let db = require("../models");
let usersPost = require("../controller/usersPost")
let usersDelete = require("../controller/usersDelete")
let usersGetOne = require("../controller/usersGetOne")
let usersGet = require("../controller/usersGet")
let usersPut = require("../controller/usersPut")


// http://localhost:3000/api/users (GET)
router.get('/users', usersGet);

// http://localhost:3000/api/users/1 (GET)
router.get('/users/:userId', usersGetOne);

// http://localhost:3000/api/users (POST)
router.post('/users', usersPost);

// http://localhost:3000/api/users/6 (DELETE)
router.delete('/users/:userId', usersDelete);

// http://localhost:3000/api/users/6 (PUT)
router.put('/users/:userId', usersPut);

module.exports = router;
