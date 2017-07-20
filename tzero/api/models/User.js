'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
   type: String,
   required: true
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
  balance: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Users', UserSchema);
