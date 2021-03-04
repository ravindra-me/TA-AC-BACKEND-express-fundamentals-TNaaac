const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.post('/json', (req, res) => {
  console.log(req.body);
});
app.post('/contact', (req, res) => {
  console.log(req.body);
});

app.get('/images/img1.png', (req, res) => {
  res.sendFile(__dirname + '/public' + '/assets' + req.url);
});
app.get('/style', (req, res) => {
  res.sendFile(__dirname + '/public/' + req.url + '.css');
});

app.listen(4000, () => {
  console.log('listener is listening on port 4000');
});
