const http = require('http');

const app = http.createServer((req, res) => {
  if (req.url) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
}).listen(1245, '0.0.0.0', () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
