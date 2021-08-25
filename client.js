const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: '50542'// PORT number here,

  });

  //handeling receiving data from server
  conn.on('data', (data) => {
    console.log(`server says: ${data}`);

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;// ????????????
};


module.exports = {
  connect
};  