var express = require('express');
var app = express();
var logger = require('morgan');
var cookieParser = require('cookie-parser');

app.use(logger('dev'));

app.use(cookieParser());

app.use('/admin', (req, res, next) => {
  next('uncaught error');
});

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

app.get('/users/:username', (req, res) => {
  var username = req.params.username;
  res.send(`<h2> ${username} </h2>`);
});

app.use((req, res, next) => {
  res.status(404).send(`<h2>404 Page not found </h2>`);
});

app.use((err, req, res, next) => {
  res.send(`<h2> ${err} </h2>`);
});

app.listen(3000, () => {
  console.log('listener is listening on port 3000');
});
