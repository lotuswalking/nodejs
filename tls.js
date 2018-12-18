// This example assumes that you have created an echo server that is
// listening on port 8000.
const tls = require('tls');
const fs = require('fs');

const options = {
  // pfx: fs.readFileSync('mail.pfx')
  pfx: fs.readFileSync('mail.pfx'),
  passphrase: '1'
};

const socket = tls.connect(8000, options, () => {
  console.log('client connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
  process.stdin.resume();
});
socket.setEncoding('utf8');
socket.on('data', (data) => {
  console.log(data);
});
socket.on('end', () => {
  console.log('client ends');
});