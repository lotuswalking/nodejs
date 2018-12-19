const zlib = require('zlib');

const input = '这是一段中文内容';

zlib.deflate(input, (err, buffer) => {
  if (!err) {

    const enCode = buffer.toString('base64');
    console.log('test 1'+enCode);
    const buffer1 = Buffer.from(enCode, 'base64');
zlib.unzip(buffer1, (err, buffer) => {
  if (!err) {
    console.log(buffer1.toString());
  } else {
    // 错误处理
    console.log(`error when decode`);
  }
});
  } else {
    // 错误处理
    console.log(`error when decode`);
  }
});
// console.log(enCode);
