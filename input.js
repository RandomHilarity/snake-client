const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};
setupInput();
 
const handleUserInput = function(key) {
   
  //exits program if "CtrlC + C" triggered
  if (key === '\u0003') {
    console.log("CTRL+C entered!  Exiting.");
    process.exit();
  }
};

module.exports = { setupInput };