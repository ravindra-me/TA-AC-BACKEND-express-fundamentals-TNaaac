const express = require('express');
const app = express();
const logger = require('morgan');
const cookieParser = require('cookie-parser');

app.use(logger('tiny'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.cookie('username', 'rombo');
  next();
});

app.use('/admin', (req, res, next) => {
  next('uncaught error');
});

app.get('/', (req, res) => {
  res.send(`<h2> Welcome to express`);
});

app.get('/about', (req, res) => {
  res.send('My name is qwerty');
});

app.post('/form', (req, res) => {
  res.json(req.body);
});

app.post('/json', (req, res) => {
  res.send(req.body);
});

app.get('/users/:username', (req, res) => {
  let username = req.params.username;
  res.send(username);
});

app.use((req, res, next) => {
  res.status(404).send('Page is not find');
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

app.listen(3000, () => {
  console.log('listener is listening on port 3000');
});
