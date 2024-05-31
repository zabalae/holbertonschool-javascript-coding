const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(Error(error));
        return;
      }
      const content = data.toString().split('\n');

      let students = content.filter((item) => item);

      students = students.map((item) => item.split(','));

      const fields = {};
      for (const x in students) {
        if (x !== 0) {
          if (!fields[students[x][3]]) fields[students[x][3]] = [];

          fields[students[x][3]].push(students[x][0]);
        }
      }

      delete fields.field;

      resolve(fields);
    });
  });
}

export default readDatabase;
