var userService = require('../services/userService');

var userCreate = function (req, res) {
  var userParam = req.body;
  userService.createUser(userParam)
    .then(function (userCreated) {
      res.json({user: userCreated})
    })
    .catch(function (err) {
      res.status(err.status).json({error: {message: err.message}})
    })
};

var userListing = function (req, res) {
  userService.listUser()
    .then(function (user) {
      res.json({users : user})
    })
    .catch(function (err) {
      res.json({error: err.message});
    })
};

var userRetrive = function (req, res) {
  var userId = req.params.id;
  userService.retriveUser(userId)
    .then(function (userRetrived) {
      res.json({userRetrive: userRetrived})
    })
    .catch(function (err) {
      res.json({error: err.message})
    })
};

var userUpdate = function (req, res) {
  var userParam = req.body;
  var userId = req.params.id;
  userService.updateUser(userId , userParam)
    .then(function (userpost) {
      res.json({userp: userpost})
    })
    .catch(function (err) {
      res.json({error:err.message})
    })
};

var userDelete = function (req , res) {
  var userId = req.params.id;
  userService.deleteUser(userId)
    .then(function (userDeleted) {
      res.json({userDelete: userDeleted})
    })
    .catch(function (err) {
      res.json({error: err.message})
    })
};

module.exports = {
  userCreate,
  userListing,
  userRetrive,
  userUpdate,
  userDelete
}