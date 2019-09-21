// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module

var bcrypt = require("bcrypt-nodejs");
// Creating User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  // Creating a custom method for  User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    console.log('password', password);
    console.log('this.password', this.password);
    return bcrypt.compareSync(password, this.password);
  };
  // User.beforeCreate(function (user, options) {
  //   return Promise.try(function () {
  //     if (user.accessLevel > 10 && user.username !== "Boss") {
  //       throw new Error("You can't grant this user an access level above 10!")
  //     }
  //     return user.getRole().then(function (role) {
  //       if (role.key !== 'admin') throw new Error('Admin needed');
  //       options.isAdmin = true;
  //     });
  //   });
  // });
  return User;
};