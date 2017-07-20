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

  if (accountExist(from_acc)) {
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

function accountExist(acc) {
  User.findById(acc).exec()
    .then(function(user) {
      console.log(user);
      console.log('im hererineirneinrienrien');
      return true;
    });
}
