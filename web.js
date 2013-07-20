var express = require('express');
var app = express();

app.get('/', function(req, res){
      //response.send('Hello World 2!');
      res.sendfile(__dirname + '/index.html');
});

app.get('/css/:id', function(req, res) {
  res.sendfile(__dirname + '/css/' + req.params.id);
});

app.get('/js/:id', function(req, res) {
  res.sendfile(__dirname + '/js/' + req.params.id);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});


