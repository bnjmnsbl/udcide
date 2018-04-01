'use strict'

var express = require("express");
var router = express.Router();
var globalVote = require("../models/votes.js")

router.get("/", function(req, res, next) {
	res.send("index.html will be served here");

})


router.get("/api/votes", function (req,res,next) {
	globalVote.find(function(err, globalVotes) {
		if (err) {
			res.send(err);
		}
		res.send(globalVotes)

	});
});

router.post("/api/votes", function (req, res) {
	var p = new globalVote();
	p.title = req.body.title;
	p.opt1 = req.body.opt1;
	p.opt2 = req.body.opt2;
	p.votes1 = req.body.votes1;
	p.votes2 = req.body.votes2;

	p.save(function (err) {
		if (err) {
			res.send(err);
		}
		res.send({message: "Vote created!"})
	}) 
});


module.exports = router;

/*

var ClickHandler = require(process.cwd() + "/app/controllers/clickHandler.server.js");


module.exports = function (app, db) {

	var clickHandler = new ClickHandler(db);


	app.route("/")
		.get(function (req, res) {
			res.sendFile(process.cwd() + "/public/index.html");
		})

	app.route("/api/getVotes")
		.get(clickHandler.getVotes)
		.post(clickHandler.addVotes)
		.delete(clickHandler.resetVotes)

};

/* OLD		
	app.get("/userVotes", (req, res) => {
		
		var cursor = db.collection('votes').find();
		console.log(cursor);


	})

	app.post("/voted", (req, res) => {
		db.collection('votes').save(req.body, (err, result) => {
			if (err) return console.log(err);
			console.log('saved to db');
			res.redirect('/');
		})
	})

};
*/
