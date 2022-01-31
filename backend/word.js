var express = require('express');
var app = express();
app.get('/', function(req, res) {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'entries'
    })

    connection.connect();

    var result = "";
    connection.query('SELECT * from entries where word like "app%"', function(err, rows, fields) {
        if (err) throw err;
        result = JSON.stringify(rows);
        res.setHeader('Content-Type', 'application/json');

        connection.end();
        res.end(result);
    })


});

var server = app.listen(8080, function() { // start the server
    console.log('Server is running..');
});