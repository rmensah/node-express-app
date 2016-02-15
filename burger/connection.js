/*
The connection and export to the database used by the O.R.M.
*/
var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 
    host: 'localhost',
    user: 'root',
    password: 
    database: 'db'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;