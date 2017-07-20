'use strict'

var mongoose = require('mongoose');
var Transaction = mongoose.model('Transactions');
var User = mongoose.model('Users');

exports.get_all_transactions = function(req, res) {
  Transaction.find({}, function(err, transactions) {
    if (err)
      res.send(err)
      console.log(err)
    res.json(transactions)
    console.log(transactions)
  });
}

exports.create_transaction = function(req, res) {
  // parsing of request body
  var from_acc = req.body.from_acc;
  var to_acc   = req.body.to_acc;
  var amount   = req.body.amount;

  var check = accountExist(req, res);
  console.log(check);
  if (check) {
    console.log('it is true');
  } else {
    console.log('it is false');
  };
};

function accountsExist(from_acc, to_acc) {
  // check if both accounts exist
  User.findById(from_acc, function(err, from_user) {
    if (err) {
    console.log('from_acc not found')
    return false;
    } else {
      User.findById(to_acc, function(err, to_user) {
        if (err) {
          console.log('to_acc not found')
          return false;
        } else {
          return true;
        }
      });
    }
  });
};

var accountExist = function(req, res) {
  User.findById(req.body.from_acc, function(err, user) {
    if (err) {
      console.log('something wrong');
      return false;
    }
    console.log(user);
    if (!user) {
      console.log('user not found');
      return false;
    } else {
      console.log('found user')
      return true;
    }
  });
}
