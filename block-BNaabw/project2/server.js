var express = require('express');
var app = express();
var logger = require('morgan');
var cookieParser = require('cookie-parser');

console.log(__dirname);
app.use(logger('dev'));

app.use(cookieParser());

app.use((req, res, next) => {
  res.cookie('username', 'Rombo');
  next();
});
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.get('/page', (req, res) => {
  res.sendFile(__dirname + '/page.html');
});
app.get('/price', (req, res) => {
  res.sendFile(__dirname + '/price.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
});
app.get('/service', (req, res) => {
  res.sendFile(__dirname + '/service.html');
});

app.listen(3000, () => {
  console.log('listener is listening on port 3000');
});
