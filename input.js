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
      console.log('moveUp')
      connection.write("Move: up")
    }
    if (key === 'a') {
      console.log("Move: left")
      connection.write( "Move: left")
    }
    if (key === 's') {
      connection.write("Move: down")
    }
    if (key === 'd') {
      connection.write("Move: right")
    }
  
};




module.exports = {
  setupInput
};