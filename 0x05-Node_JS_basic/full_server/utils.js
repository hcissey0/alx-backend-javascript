const fs = require('fs');

const util = require('util');

const readFile = util.promisify(fs.readFile);

export default async function readDatabase(path) {
  try {
    const data = await readFile(path, 'utf8');
    let lines = data.split('\n');
    lines = lines.filter((line) => line.length > 0);
    const students = lines.slice(1).map((line) => line.split(','));
    const fields = [...new Set(students.map((student) => student[3]))];
    const studentsByField = {};
    fields.forEach((field) => {
      const studentsInField = students.filter((student) => student[3] === field);
      studentsByField[field] = studentsInField.map((s) => s[0]);
    });
    return studentsByField;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
