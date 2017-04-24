var express = require('express');
var route = express.Router();

var userController = require('../controller/userController');

route.get('/user' ,userController.userListing);
route.get('/user/:id' , userController.userRetrive);
route.post('/user' , userController.userCreate);
route.patch('/user/:id' , userController.userUpdate);
route.delete('/user/:id' , userController.userDelete);

module.exports = route;