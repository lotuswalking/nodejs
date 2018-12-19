// @ts-nocheck
const { URL } = require('url');
const myURL = new URL('https://example.org:8888/home/index');
console.log(myURL.port);
  // 输出 8888

// 默认端口将自动转换为空字符
// (HTTPS协议默认端口是443)
myURL.port = '443';
console.log(myURL.port);
  // 输出空字符
console.log(myURL.href);
  // 输出 https://example.org/

myURL.port = 1234;
console.log(myURL.port);
  // 输出 1234
console.log(myURL.href);
  // 输出 https://example.org:1234/

// 完全无效的端口字符串将被忽略
myURL.port = 'abcd';
console.log(myURL.port);
  // 输出 1234

// 开头的数字将会被当做端口数
myURL.port = '5678abcd';
console.log(myURL.port);
  // 输出 5678

// 非整形数字将会被截取部分
myURL.port = 1234.5678;
console.log(myURL.port);
  // 输出 1234

// 超出范围的数字将被忽略
myURL.port = 1e10;
console.log(myURL.port);
  // 输出 1234
console.log(myURL.pathname);
console.log(myURL.protocol);
console.log(myURL.host);
console.log(myURL.hostname);