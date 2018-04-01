'use strict';

const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const mongoose = require("mongoose");

const mLabUrl = process.env.MONGOLAB_URI;

mongoose.connect(mLabUrl);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected");
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/public", express.static(process.cwd() + "/public"));
app.use("/controllers", express.static(process.cwd() + "/app/controllers"));

const routes = require('./app/routes/routes.js');

app.use("/", routes);

app.listen(3000, () => {
    console.log('listening on 3000')
  });

  /* OLD MONGODB

MongoClient.connect(mLabUrl, (err, client) => {
  
  	if (err) { throw new Error("DB failed to connect"); 
  			} else {
  				console.log("Successcully connected to db");
  			}

  	db = client.db("udcide_one");

  	app.use("/public", express.static(process.cwd() + "/public"));
  	app.use("/controllers", express.static(process.cwd() + "/app/controllers"));
	  app.use(bodyParser.json());
  	
  	//app.use(bodyParser.urlencoded({extended: true}));
  	routes (app, db);

	app.listen(3000, () => {
	  console.log('listening on 3000')
	})
})
*/








