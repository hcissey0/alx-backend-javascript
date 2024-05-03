const fs = require('fs');

function countStudents(path) {
  try {
    const content = fs.readFileSync(path, 'utf8');
    const data = content.split('\n');
    data.shift();
    if (data[data.length - 1].length === 0) { data.pop(); }
    console.log(`Number of students: ${data.length}`);
    const fields = []; const names = [];
    data.forEach((element) => {
      const splitter = element.split(',');
      names.push(splitter);
      fields.push(splitter[splitter.length - 1]);
    });
    const first = fields[0]; const dictFields = {}; let count = 0;
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
    const result = {};
    Object.keys(dictFields).forEach((key) => {
      names.forEach((rows) => {
        if (rows.includes(key)) {
          if (result[key]) {
            result[key] += `, ${rows[0]}`;
          } else { result[key] = `${rows[0]}`; }
        }
      });
      console.log(`Number of students in ${key}: ${dictFields[key]}. List: ${result[key]}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
