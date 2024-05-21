const express = require('express');
const port = 1245
const host = '127.0.0.1';
const app = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('X-Served-By', 'itsfoss');
  res.send('Hello Holberton School!');
});

app.listen(port, host, () => {});

module.exports = app;
