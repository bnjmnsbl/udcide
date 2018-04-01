
const dotenv = require('dotenv');
var mongoose = require('mongoose');

dotenv.config()
var mongoDB = process.env.MONGOLAB_URI;


mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected!")
});
