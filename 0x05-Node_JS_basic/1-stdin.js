const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

rl.on('line', (input) => {
  const name = input;
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  } else {
    process.stdout.write('Your name is empty.');
  }
  if (!process.stdin.isTTY) process.stdout.write('This important software is now closing\n');
  rl.close();
});
