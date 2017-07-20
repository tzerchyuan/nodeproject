'use strict'

var mongoose = require('mongoose');
var User = mongoose.model('Users');

exports.list_all_users = function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      res.send(err)
      console.log(err);
    } else {
      res.json(users);
      console.log(users);
    }
  });
};

exports.create_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) { 
    if (err) {
      res.send(err)
    } else {
      res.send(user)
    }
  });
}

exports.get_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_user = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err)
    res.json(user);
  });
}; 

exports.delete_user = function(req, res) {
  User.remove({_id: req.params.userId}, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: "User has been deleted" });
  });
};
