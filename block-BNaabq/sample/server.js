let express = require('express');
let app = express();

var cookieParser = require('cookie-parser');
var logger = require('morgan');

app.use(logger('tiny'));
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

app.use('/about', (req, res, next) => {
  res.cookie('username', 'ravindra');
  res.end('About page');
});

app.get('/', (req, res) => {
  res.send('completed');
});

app.listen(4000, () => {
  console.log('listener is listing on port 4000');
});
