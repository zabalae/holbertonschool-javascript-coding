#!/usr/bin/node
// script that reads and prints the content of a file.


const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function (error, content) {
  if (error) {
    return console.log(error);
  }
  process.stdout.write(content);
});
