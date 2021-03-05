var express = require('express');
let app = express();
let logger = require('morgan');

app.use(logger('div'));

app.use((req, res, next) => {
  if (req.url === '/admin') {
    return next('Unauthorized');
  }
  next();
});

app.get('/', (req, res) => {
  res.send('welcome');
});
app.get('/about', (req, res) => {
  res.send('welcome about page');
});

app.use((req, res, next) => {
  res.send('Page not found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('listener is listening on port 3000');
});
