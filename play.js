const net = require('net');
const {connect} = require('./client')

let conn = connect();

console.log("Connecting ...");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  return stdin;
};
// to process exit , get standard input from client and if it is Ctrl+ c process exit
const handleUserInput = function () {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
};

connect();

