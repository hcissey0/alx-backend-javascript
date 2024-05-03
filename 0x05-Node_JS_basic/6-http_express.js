const exp = require('express');

const app = exp();
const port = 1245;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
}).listen(port, () => {
  console.log(`Server is running on ${host}:${port}`);
});

module.exports = app;
