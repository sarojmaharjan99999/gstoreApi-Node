var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

var app = express();
var port = 7000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented:false}));

var routersPath = path.join (__dirname, "routes");
fs.readdirSync(routersPath).forEach(function (file) {
  app.use(require("./routes/" + file));
});

app.get('/' , function (req,res) {
  res.send("hello world")
});

app.listen(port, function () {
  console.log("server running at port" + port);
});




// function createUser(userParams) {
//   const userParamsSanitized = User.sanitize(userParams);
//   const user = new User(userParamsSanitized);
//
//   user.save(function (err, createdUser) {
//     if (err) {
//       console.log(err, 'EEEEEEEEEE')
//     }
//     else {
//       console.log(createdUser.plain(), 'TTTTTTTT');
//     }
//   })
// }
//
// function getUser(userId) {
//   User.get(userId, function(err , userId) {
//     if (err) {
//       console.log(err, 'qqqqqq')
//     }
//     else {
//       console.log(userId.plain(), 'wwwww');
//     }
//   })
// }
//
// function updateUser(userId , userParams) {
//   const entityData = User.sanitize(userParams);
//   User.update(userId , entityData , function (err) {
//     if(err) {
//       console.log(err, "aaaaa")
//     }
//     else{
//       console.log(entityData , "bbbbbbbb")
//     }
//   })
// }
//
// function deleteUser(userId) {
//   User.delete(userId , function (err) {
//     if(err) {
//       console.log(err, "11111")
//     }
//     else{
//       console.log(userId , "2222222")
//     }
//   })
// }
//
// module.exports = {
//   createUser,
//   getUser,
//   updateUser,
//   deleteUser
// };