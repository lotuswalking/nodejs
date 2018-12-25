// On Windows Only ...
const { spawn } = require('child_process');
let cmd = 'set-adaccountPassword';
let bat = spawn('powershell.exe', cmd);

bat.stdout.on('data', (data) => {
  console.log(data.toString());
});

bat.stderr.on('data', (data) => {
  console.log(data.toString());
});

bat.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);
});