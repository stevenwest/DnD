var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname ;
  fs.readFile(filename, function(err, data) {
  if (err) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    return res.end("404 Not Found");
  }
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write(data);
  return res.end();
  });
  var q = url.parse(req.url, true).query;
  var abilityModifier = q.abilityModifier;
  var proficiencyModifier= q.proficiencyModifier;
  exports.abilityModifier= abilityModifier;
  exports.proficiencyModifier= proficiencyModifier
}).listen(8080);
