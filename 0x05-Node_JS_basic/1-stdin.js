const pro = require('process');

const app = ((pro) => {
  pro.stdin.setEncoding('utf-8');
  pro.stdout.write('Welcome to Holberton School, what is your name?\n');
  pro.stdin.on('readable', () => {
    const chunk = pro.stdin.read();
    if (chunk) { pro.stdout.write(`Your name is: ${chunk}`); }
  });
  pro.stdin.on('end', () => {
    pro.stdout.write('This important software is now closing\n');
  });
})(pro);

module.exports = app;
