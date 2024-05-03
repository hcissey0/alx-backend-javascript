const exp = require('express');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const content = await fs.readFile(path, 'utf8');
    const data = content.split('\n');
    data.shift();
    if (data[data.length - 1].length === 0) { data.pop(); }

    const fields = [];
    const names = [];
    data.forEach((element) => {
      const splitter = element.split(',');
      names.push(splitter);
      fields.push(splitter[splitter.length - 1]);
    });

    const first = fields[0];
    const dictFields = {};
    let count = 0;

    fields.forEach((item) => {
      if (item === first) {
        count += 1;
        dictFields[first] = count;
      } else if (dictFields[item]) {
        let tempCount = dictFields[item];
        tempCount += 1;
        dictFields[item] = tempCount;
      } else {
        dictFields[item] = 1;
      }
    });

    const result = [];
    Object.keys(dictFields).forEach((key) => {
      const studentsList = names
        .filter((rows) => rows.includes(key))
        .map((rows) => rows[0])
        .join(', ');
      result.push(`Number of students in ${key}: ${dictFields[key]}. List: ${studentsList}`);
    });
    return `Number of students: ${data.length}\n${result.join('\n')}`;
  } catch (error) {
    return new Error('Cannot load the database');
  }
}

const app = exp();
const port = 1245;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
}).get('/students', (req, res) => {
  let response = 'This is the list of our students\n';
  const data = countStudents(process.argv[2]);
  data.then((e) => {
    if (typeof (e) === 'object') {
      response += 'Cannot load the database';
    } else { response += e; }
    res.send(response);
  });
}).listen(port, () => {
  console.log(`Server is running on ${host}:${port}`);
});

module.exports = app;
