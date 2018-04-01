var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var voteSchema = new Schema(
	{
		title: {type: String, required: true, max: 100},
		opt1: {type: String, required: true, max: 50},
		opt2: {type: String, required: true, max: 50},
		votes1: {type: Number},
		votes2: {type: Number}
	}
)

module.exports = mongoose.model('Votes', voteSchema);