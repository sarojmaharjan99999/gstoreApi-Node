var datastore = require('@google-cloud/datastore')({
  projectId: 'learn-datstore',
  keyFilename: './google-cloud-datstore-service-key.json'
});

const gstore = require('gstore-node');

gstore.connect(datastore);

var kind = 'User';

var userSchema = new gstore.Schema({
  name: {type: 'string', required: true},
  age: {type: 'int'}
});

var User = gstore.model(kind, userSchema);

module.exports = {
  User: User
};