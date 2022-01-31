var express = require('express');
var app = express();


function getData(value, res) {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'entries'
    })

    connection.connect();

    var query = 'SELECT * from entries where word like ' + '"' + value + '%"';

    connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        connection.end();
        res.end(JSON.stringify(rows));
    })


}

module.exports = { getData };