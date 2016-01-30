var proxy = require('express-http-proxy');

var express = require('express');

var app = express();

app.use('/proxy', proxy('api.challonge.com:443', {
  forwardPath: function(req, res) {
    return require('url').parse(req.url).path;
  }
}));

app.use(express.static(__dirname + '/../public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
