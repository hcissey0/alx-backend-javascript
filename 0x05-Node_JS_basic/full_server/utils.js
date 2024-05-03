const fs = require('fs').promises;

async function readDatabase(path) {
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
    return result.join('\n');
  } catch (error) { return new Error('Cannot load the database'); }
}

module.exports = readDatabase;
