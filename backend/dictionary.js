var express = require("express");
var app = express();

app.get("/", function() {

});

app.listen(8080, function() {
    console.log("backend running on port 8080 ...");
});