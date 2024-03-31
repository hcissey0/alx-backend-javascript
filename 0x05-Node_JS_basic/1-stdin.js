const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (input) => {
  const name = input;
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  } else {
    process.stdout.write('Your name is empty.');
  }
  if (!process.stdin.isTTY) console.log('This important software is now closing');
  rl.close();
});
