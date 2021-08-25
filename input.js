const { w, a, s, d, q } = require('./constants');

let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);//thi is an event listener for stdin. The listener will use a function called handleUserInput that runs when you receive input from your keyboard.
  return stdin;
};
// to process exit , get standard input from client and if it is Ctrl+ c process exit
const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      connection.write(w)
    }
    if (key === 'a') {
      connection.write( a)
    }
    if (key === 's') {
      connection.write(s)
    }
    if (key === 'd') {
      connection.write(d)
    }
    else if (key === 'q') {
      connection.write(q)
    }
  
};




module.exports = {
  setupInput
};