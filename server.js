// Requiring npm packages
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
// Requiring passport configured 
var passport = require("./config/passport");
//
// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");
//
// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
// sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
//
// Requiring  routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);
app.get('/', function(req, res) {    
  res.send('Welcome to drake properties database');
});
//
// Syncing database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});