const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);//thi is an event listener for stdin. The listener will use a function called handleUserInput that runs when you receive input from your keyboard.
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

module.exports = {
  setupInput
};