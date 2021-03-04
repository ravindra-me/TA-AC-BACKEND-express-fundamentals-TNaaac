var express = require('express');
var app = express();

app.get('/index', (erq, res) => {
  res.send('welcome in express');
});

app.listen(3000, () => {
  console.log('listener is listening on port 3000');
});
