var http = require('http');
var fs = require('fs');
var options = {
  hostname:'music.163.com',
  port:80,
  path:'/eapi/pl/count',
  // agent:'nodejs',
  method:'post',
 
  headers:{
    Cookie: 'MUSIC_U=4107490924464e6fb1a905c0894c8abf5ad7bfae54577152e5d50d67bf34b4d19c294f1fa22a7671889ec109f3edd3223041397c2f9d6820f2f513a9c38b5dc7; __remember_me=true; __csrf=77d911568a2177e3e33a89d255bd0efd; os=uwp; osver=10.0.17134.376; appver=1.4.1; deviceId=400467cc6b1f388e4d4209fa01905cd7',
    Connection: 'Keep-Alive',
    Pragma: 'no-cache',
    'Accept-Encoding': 'gzip, deflate', 
    'Content-Type': 'application/x-www-form-urlencoded',
  },
}
const req = http.request(options, (res) => {
  var body = '';
  res.on('data', (data) => {
    console.log('data')
    body += data;
  });
  res.on('end', () => {
    console.log('end');
    console.log(body);
  });
  res.on('error',(err) => {
    console.log('error');
  })
});
req.end();
// req.on('response', (headers) => {
//   // fs.writeFileSync('res.json',res);
//   // console.log(res.statusCode);
//   // console.log(res.headers);
//   console.log(headers.headers);
//   // console.log(flags);
// });
// req.on('connect',(res, socket, head) => {
//   console.log('got connected');
// })