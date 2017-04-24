var HttpStatus = require('http-status');
var Promise = require("bluebird");

var User = require("../model/userModel").User;

var createUser = function (userParams) {
  return new Promise(function (resolve, reject) {
    var userParamsSanitized = User.sanitize(userParams);
    var user = new User(userParamsSanitized);

    user.save()
      .then(function (createdUser) {
        resolve(createdUser.plain())
      })
      .catch(function (err) {
        var error = new Error(err.message);
        error.status = HttpStatus.BAD_REQUEST;
        reject(error);
      })
  })
};

var retriveUser = function (userId) {
  return new Promise (function (resolve , reject) {
    User.get(userId)
      .then(function (user) {
        resolve(user.entityData);
      })
      .catch(function (err) {
        reject(err);
      })
  })
};

var listUser = function () {
  return new Promise (function (resolve , reject) {
    User.list()
      .then(function (userId) {
        resolve(userId);
      })
      .catch(function (err) {
        reject(err);
      })
  })
};

var updateUser = function (userId ,userParams) {
  return new Promise (function (resolve , reject) {
    var userSanitized = User.sanitize(userParams);

    User.update(userId, userSanitized)
      .then(function (userupdate) {
        resolve(userupdate.plain())
      })
      .catch(function (err) {
        reject(err)
      });
  })
};

var deleteUser = function (userId) {
  return new Promise (function (resolve , reject) {
    User.delete(userId)
      .then(function (userId) {
        resolve(userId)
      })
      .catch(function (err) {
        reject(err)
      })
  })
};

module.exports = {
  retriveUser,
  listUser,
  createUser,
  updateUser,
  deleteUser
}