const express = require('express');

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
    let output = `Number of students: ${students.length}\n`;
    fields.forEach((field) => {
      const studentsInField = students.filter((student) => student[3] === field);
      output += `Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.map((s) => s[0]).join(', ')}\n`;
    });
    return output;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});


app.get('/students', async (req, res) => {
  try {
    const studentsCount = await countStudents('database.csv');
    res.send(`This is the list of our students\n${studentsCount}`);
  } catch (err) {
    res.send(`This is the list of our students\n${err.message}`);
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
