'use strict'

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
