var express = require('express'),
    app = express(),
    http = require('http'),
    host = '',
    port = 0;

process.argv.forEach(function (val, index, array) {
  if (array.length === 4) {
    host = array[2];
    port = array[3];
  }
});

if (host !== '' && port !== 0) {
  var server = http.createServer(app).listen(port, host);
  console.log("Server started on http://"+host+":"+port); 
  app.use(express.static(__dirname + "/client/"));
} else {
  console.error("Please provide 'host' & 'port' while running this file using node\n> node server.js [host] [port]");
}
