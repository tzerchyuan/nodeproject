'use strict'
module.exports = function(app) {
 var transaction = require('../controllers/transactionController');

 app.route('/transactions')
   .get(transaction.get_all_transactions)
   .post(transaction.create_transaction);

//  app.route('/transactions/:transactionId')
//    .get(transaction.get_transaction)
//    .delete(transaction.delete_transaction);
};
