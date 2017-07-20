var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./api/models/User.js'),
    Transaction = require('./api/models/Transaction.js')
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tzerodb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var userRoutes = require('./api/routes/userRoutes');
var transactionRoutes = require('./api/routes/transactionRoutes');
userRoutes(app);
transactionRoutes(app);

app.listen(port);

console.log('payment api is live on port:' + port);
