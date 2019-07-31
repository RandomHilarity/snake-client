const net = require("net");

// establishes connection with game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
    // interpret incoming data as text
  conn.setEncoding("utf8");
  
  // handle messages incoming from server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
    return conn;
  });
};

module.exports = { connect };