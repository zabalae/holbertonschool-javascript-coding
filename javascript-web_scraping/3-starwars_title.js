#!/usr/bin/node

const request = require('request');
request.get('https://swapi-api.hbtn.io/api/films/:id' + process.argv[2] + '/', function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.parse(body).title);
  }
});
