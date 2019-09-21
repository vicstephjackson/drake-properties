// Requiring models and passport 
var db = require("../models");
var passport = require("../config/passport");
var bcrypt = require("bcrypt-nodejs");
//
module.exports = function(app) {
  // Using the passport.authenticate middleware
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    //sending user back to route member page
    res.json("/members");
  });
//
  // Route for signing user signup. The user's password is automatically hashed and stored
  // configured Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    var hash = bcrypt.hashSync(req.body.password);
    db.User.create({
      email: req.body.email,
      password: hash,
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });
//
  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
//
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

};

