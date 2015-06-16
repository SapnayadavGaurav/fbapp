var express = require('express'),
    app = express(),
    http = require('http'),
    host = 'localhost',
    port = 802,
    server = http.createServer(app).listen(port, host);

console.log("Server started on http://"+host+":"+port); 
app.use(express.static(__dirname + "/"));
