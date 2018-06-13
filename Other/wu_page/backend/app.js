/**
 * Created by bgd on 16/3/28.
 */
var express = require('express');
var app1 = express();
var app2 = express();
var http = require('http');
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3002');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app1.use(allowCrossDomain);
app1.post("/receive", function (req, res) {
    "use strict";
    res.send("i received");
});
app2.use(express.static('./public'));

var server1 = http.createServer(app1);
var server2 = http.createServer(app2);

server1.listen(3001);
server2.listen(3002);