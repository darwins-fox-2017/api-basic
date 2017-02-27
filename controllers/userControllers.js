var User = require('../models/user.js')

module.exports = {
  findAllUser : (req,res)=>{
    User.find({}).then(function(user){
      res.send(user)
    })
  },
  findUserById : (req,res)=>{
    User.find({_id : req.params.id}).then(function(user){
      res.send(user)
    })
  },
  deleteUser : (req,res)=>{
    User.findOneAndRemove({_id : req.params.id}).then(function(user){
      res.send(`${user.username} has been deleted`)
    })
  },
  updateUser : (req,res)=>{
    User.findOneAndUpdate({_id : req.params.id}, {username : req.body.username, password : req.body.password}).then(function(user){
      res.send(user)
    })
  },
  createUser : (req,res)=>{
    var newUser = new User({
      username : req.body.username,
      password : req.body.password
    })

    newUser.save(function (err) {
      if (err) throw err;
      res.send(`${req.body.username} has been created`)
    })
  }
}
