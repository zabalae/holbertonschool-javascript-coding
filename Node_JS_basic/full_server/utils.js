import fs from 'fs';
import path from 'path';

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data.toString('utf-8').trim().split('\n');
        const studentGroups = {}
        const fieldNames = fileLines[0].split(',');
        const studentPropNames = fieldNames.slice(0, fieldNames.length - 1);
        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const field = studentRecord[studenRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const stuEntries = studentPropNames.map((propName, i) => [propName, studentRecord[i]]);
          studentGroups[field].push(Object.fromEntries(stuEntries));
        }
        resolve(studentGroups);
      }
    });
  });
}

module.exports = readDatabase;
