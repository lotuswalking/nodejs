const https = require('https');
const fs = require('fs');

const options = {
  pfx: fs.readFileSync('mail.pfx'),
  passphrase: '1'
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(4443);