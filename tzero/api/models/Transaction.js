'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  from_acc: {
    type: String,
    required: true
  },
  to_acc: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Transactions', TransactionSchema);
