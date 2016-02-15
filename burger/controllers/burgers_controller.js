/*
Functions to do the routing for the app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//get route -> index
router.get('/index', function(req,res) {
	burger.findAllburgers(function(data){
		res.render('index', {data});
	});
});

module.exports = router;