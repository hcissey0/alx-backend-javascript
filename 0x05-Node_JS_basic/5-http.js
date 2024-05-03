const http = require('http');
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
      const spliter = element.split(',');
      names.push(spliter);
      fields.push(spliter[spliter.length - 1]);
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

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      let response = 'This is the list of our students\n';
      const data = countStudents(process.argv[2]);
      data.then((e) => {
        if (typeof (e) === 'object') {
          response += 'Cannot load the database';
        } else { response += e; }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(response);
      });
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error\n');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Url Not Found\n');
  }
}).listen(1245, '127.0.0.1', () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
