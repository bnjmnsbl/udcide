"use strict";

const Mongo= require("mongodb");

function clickHandler (db) {
	var votesCollection = db.collection("votes");

	this.getVotes = function (req, res) {

		votesCollection.find().toArray(function(err, results) {
				res.send(results);		
		});
	
	}

	this.addVotes = function (req, res) {
		
		console.log(req.body._id);
		console.log(req.body.votes1);
		votesCollection.updateOne({_id: new Mongo.ObjectId(req.body._id)}, 
			{$set: {"votes1": req.body.votes1, 
					"votes2": req.body.votes2 }}, function (err, result) {
		
		})

	}
/*
		votesCollection.update(
			{_id: req.body._id},
			
			{$set: {"votes1": req.body.votes1,
			"votes2": req.body.votes2
			}
		}, function(err, result) {
			if (err) throw err;
			res.send(result);
		}
		)


		//votes.findAndModify({}, )
	}*/

	this.resetVotes = function (req, res) {
		votesCollection.updateMany({}, 
			{$set: {"votes1": 0,
			"votes2": 0}}, function(err, result) {
				if (err) throw err;
				res.json(result);
			})
	}
}

module.exports = clickHandler;