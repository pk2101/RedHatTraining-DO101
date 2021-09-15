var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World Welcome to Openshift!\n');
});

app.get('/redhat', function (req, res) {
  res.send('Welcome to Redhat!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

