let express = require('express');
let app = express();

app.use('/', (req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.get('/', (req, res) => {
  res.send('welcome middleware');
});

app.listen(4000, () => {
  console.log('listener is listening on port 4000');
});
