var express = require('express');
var app = express();

app.get('/', function(req, res){
      //response.send('Hello World 2!');
      res.sendfile(__dirname + '/index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


