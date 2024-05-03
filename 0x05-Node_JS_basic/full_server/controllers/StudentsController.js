import readDatabase from '../utils';

const pro = require('process');

class StudentsController {
  static getAllStudents(request, response) {
    const data = readDatabase(pro.argv[2]);
    let word = 'This is the list of our students\n';
    data.then((e) => {
      if (typeof (e) === 'object') {
        response.status(500).send('Cannot load the database');
      } else {
        word += e;
        response.status(200).send(word);
      }
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (!['SWE', 'CS'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    const data = readDatabase(pro.argv[2]);
    data.then((e) => {
      if (typeof (e) === 'object') { response.status(500).send('Cannot load the database'); return; }
      const pat = /(\w+): \d+. List: (.+)$/;
      e.split('\n').forEach((i) => {
        const match = i.match(pat);
        if (match) {
          const namesList = match[0].split(',').map((name) => name.trim());
          const field = namesList[0].split(' ')[0].replace(':', '');
          const firstNames = namesList[0].split(' ')[3];
          namesList.shift();
          namesList.unshift(firstNames);
          if (field === major) {
            const msg = `${namesList}`;
            const fmsg = msg.split(',').join(', ');
            response.status(200).send(`List: ${fmsg}`);
          }
        }
      });
    });
  }
}

export default StudentsController;
module.exports = StudentsController;
