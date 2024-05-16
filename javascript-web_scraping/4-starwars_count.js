#!/usr/bin/node
const request = require('request');
request.get(process.argv[2], function (error, response, body) {
  let count = 0;
  if (error) {
    console.log(error);
  }
  for (let x = 0; JSON.parse(body).results[x] !== undefined; x++) {
    if (JSON.parse(body).results[x].characters.includes('https://swapi-api.hbtn.io/api/films/')) {
      count++;
    }
  }
  console.log(count);
});
