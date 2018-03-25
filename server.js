'use strict';

const dotenv = require('dotenv');
const express = require('express');
const bodyParser= require('body-parser');
const routes = require('./app/routes/index.js');
const MongoClient = require("mongodb").MongoClient

dotenv.config();
var mLabUrl = process.env.MONGOLAB_URI;

const app = express();

var db;

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








