var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var singleVoteSchema = new Schema({
	id: Number,
	voted: Number
})

var userSchema = new Schema(
  {
    name: {type: String, required: true},
    mail: {type: String, required: true},
    votes: [singleVoteSchema]

  }
);

module.exports = mongoose.model("User", userSchema);