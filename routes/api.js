"use strict"

const express       = require('express');
let app             = express.Router();
var user_controller = require('../controllers/user_controller')


// app.get('/api', function(req, res){
//   res.render('index', {title: 'User List'});
// })

app.get('/hello', user_controller.hello)

app.get('/users', user_controller.get_user)

app.post('/users', user_controller.post_user)

app.get('/users/:id', user_controller.get_id_user)

app.delete('/users/:id', user_controller.delete_user)

app.put('/users/:id', user_controller.put_user)

module.exports = app
