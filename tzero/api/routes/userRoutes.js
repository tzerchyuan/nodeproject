'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');

  // user Routes
  app.route('/users')
    .get(user.list_all_users)
    .post(user.create_user);

  app.route('/users/:userId')
    .get(user.get_a_user)
    .put(user.update_user)
    .delete(user.delete_user);
};
