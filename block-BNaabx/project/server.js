var express = require('express');
var time = new Date();
var fs = require('fs');
console.log(fs);

var sec = time.getSeconds();
var min = time.getMinutes();
var hour = time.getHours();
var app = express();
app.use((req, res, next) => {
  console.log(req.method, req.url, `${hour}:${min}:${sec}`);
  next();
});
app.use((req, res, next) => {
  req.body = {};
  var data = '';
  req.on('data', (chunk) => {
    data += chunk.toString();
  });
  req.on('end', () => {
    if (!data) return next();
    if (data && req.headers['content-type'] === 'application/json') {
      data = JSON.parse(data);
      req.body = { ...data };
    }
    next();
  });
});
app.use((req, res, next) => {
  var extension = req.url.split('.').pop();
  console.log(extension);
  console.log('public' + req.url);
  if (['png', 'jpg', 'jpeg', 'svg'].includes(extension)) {
    res.setHeader('Content-Type', 'images/' + extension);
    fs.createReadStream(__dirname + '/public' + req.url).pipe(res);
  } else if (req.url === '/style.css') {
    res.setHeader('Content-Type', 'text/css');
    fs.readFileSync(__dirname + '/stylesheet/' + req.url, 'utf8');
  }
  next();
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/form', (req, res) => {
  console.log(req.body);
});
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});
app.listen(5000, () => {
  console.log('Server is running at 5k');
});
