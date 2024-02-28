const http = require('http');

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

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const studentCount = await countStudents('database.csv');
      res.end(`This is the list of our students\n${studentCount}`);
    } catch (err) {
      res.statusCode = 404;
      res.end(err.message);
    }
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
