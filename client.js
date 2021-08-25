const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,

  });

  //handeling receiving data from server


  conn.on('connect', () => {
    console.log('Successfully connected to game server')
  })
  
  conn.on('data', (data) => {
    console.log(`server says: ${data}`);
  });
  //send data to server/ name and moves
  // conn.on('connect', () => {
  //   const array = ["Move: up", "Move: left", "Move: left",  "Move: up", "Move: left", "Move: left", "Move: right","Move: right"]
  //   conn.write("Name: SIS" );
  //   array.forEach(element => {
  //     setInterval(() => {
  //       conn.write(element  );
  //     }, 500);
  //   });

  // });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = {
  connect
};  