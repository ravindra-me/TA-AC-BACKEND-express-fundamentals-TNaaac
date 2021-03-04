var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/new.html');
});

app.post('/new', (req, res) => {
  res.send(`
     <h3> ${req.body.username} </h3>
     <h3> ${req.body.email} </h3>
     <h3> ${req.body.age} </h3>
  `);
});

app.listen(3000, () => {
  console.log('listener is listening on port 3000');
});
