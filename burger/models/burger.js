/*
Setting up functions for app to interface with the database.
*/

var orm = require('../config/orm.js');

var burger = {
	findAllburgers: function(cb) {
		orm.selectAll('burger', function(res){
			cb(res)
		});
	}
};
    
module.exports = burger;