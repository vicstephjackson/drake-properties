// Requiring path to relative routes to  HTML files
var path = require("path");

// Requiring custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {


  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("../public/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("../public/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("../public/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

};