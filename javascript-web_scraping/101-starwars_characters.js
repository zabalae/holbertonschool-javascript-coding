#!/usr/bin/node
const request = request('request');
request(`https://swapi-api.hbtn.io/api/films/${process.argv[2]}`, async function (error, response, body) {
  if (error) console.log(error);
  for (const characterId of JSON.parse(body).characters) {
    await new Promise((resolve, reject) => {
      request(characterId, function (error, response, body) {
       if (error) reject(error);
       else resolve(JSON.parse(body).name);
      });
    });
  }
});
