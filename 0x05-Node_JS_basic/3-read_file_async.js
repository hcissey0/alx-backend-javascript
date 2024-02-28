const fs = require('fs');

const util = require('util');

const readFile = util.promisify(fs.readFile);

async function countStudents(path) {
  try {
    const data = await readFile(path, 'utf-8');
    let lines = data.split('\n');
    lines = lines.filter((line) => line.length > 0);
    const students = lines.slice(1).map((line) => line.split(','));
    const fields = [...new Set(students.map((student) => student[3]))];
    console.log(`Number of students: ${students.length}`);
    fields.forEach((field) => {
      const studentsInField = students.filter((student) => student[3] === field);
      console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.map((s) => s[0]).join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
