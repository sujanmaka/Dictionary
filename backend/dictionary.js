var express = require("express");
var db = require('./word');

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));


app.get("/", function(req, res) {
    res.header('Access-Control-Allow-Origin', req.headers.origin || "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
    db.getData(req.query.value, res);
});

app.listen(8080, function() {
    console.log("backend running on port 8080 ...");
});