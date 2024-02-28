import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase('database.csv');
      let output = 'This is the list of our students\n';
      Object.keys(studentsByField).sort().forEach((field) => {
        output += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
      });
      res.status(200).send(output);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const studentsByField = await readDatabase('database.csv');
      res.status(200).send(`List: ${studentsByField[major].join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
