import express from 'express';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import path from 'path';
import config from '../webpack.config.babel.js';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
const products = require('./products');

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Adding CORS support
app.all('*', function (req, res, next) {
  // Set CORS headers: allow all origins, methods, and headers:
  // you may want to lock this down in a production environment
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
  res.header('Access-Control-Allow-Headers', req.header('access-control-request-headers'));

  if (req.method === 'OPTIONS') {
    // CORS Preflight
    res.send();
  } else {
    next();
  }
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/'));
});

app.get('/api/courses', products.findAll);
app.get('/api/courses/:id', products.findById);
app.get('/api/authors', products.findAllAuthors);

app.post('/api/saveCourse/:id', function (req, res) {
  // res.send('this is a post request');
  res.send(products.saveCourse);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
