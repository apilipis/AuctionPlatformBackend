var firebase = require("firebase");
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

var config = {
    apiKey: "AIzaSyAq9bvmBhMUORLv4Uiu4YaTmSPDdT_ifFw",
    authDomain: "auctionplatform-c8e90.firebaseapp.com",
    databaseURL: "https://auctionplatform-c8e90.firebaseio.com",
    projectId: "auctionplatform-c8e90",
    storageBucket: "auctionplatform-c8e90.appspot.com",
    messagingSenderId: "693452962808"
    };

// Initialize the default app
var defaultApp = firebase.initializeApp(config);
var defaultDatabase = defaultApp.database();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/auctionContractRoutes');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);