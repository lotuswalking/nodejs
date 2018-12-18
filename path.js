const path = require('path');
const envPath = process.env.PATH.split(path.delimiter);
envPath.forEach(i => {
  console.log(i);
})
console.log(new Date().toString().replace('-:',''));
// console.log(process.env.PATH);
// 输出: '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'

// process.env.PATH.split(path.delimiter);
// 返回: ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']