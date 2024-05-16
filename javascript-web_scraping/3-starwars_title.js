#!/usr/bin/node
const request = require('request');
request('https://swapi-api.hbtn.io/api/films/:id' + process.argv[2] + '/', function (error, response, body) {
  if (error == null) {
    const json = JSON.parse(body);
    console.log(json.title);
  }
})
