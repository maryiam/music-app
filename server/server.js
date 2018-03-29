const express = require('express');
const path = require('path');
const search = require('./controllers/search');
const artist = require('./controllers/artist');
const album = require('./controllers/album');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../public')));


app.get('*', (req, res, next) => {
  if (req.originalUrl.indexOf('api') > 0) {
    return next();
  }

  res.sendFile(path.join(__dirname, '../public/index.html'));
});


app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server listening : http://localhost:%s', port);
  }
});

app.use('/api/search', search);
app.use('/api/artist', artist);
app.use('/api/album', album);
