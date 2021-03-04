let express = require('express');
let app = express();

var cookieParser = require('cookie-parser');
var logger = require('morgan');

app.use(logger('div'));
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.cookies);
  res.cookie('username', 'ravindra');
  next();
});

app.get('/about', (req, res) => {
  res.send('complted');
});

app.listen(4000, () => {
  console.log('listener is listing on port 4000');
});
