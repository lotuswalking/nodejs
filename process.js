process.on('exit', (code) => {
  console.log(`退出码: ${code}`);
});process.on('multipleResolves', (type, promise, reason) => {
  console.error(type, promise, reason);
  setImmediate(() => process.exit(1));
});

async function main() {
  try {
    return await new Promise((resolve, reject) => {
      resolve('第一次调用');
      resolve('调用 resolve');
      reject(new Error('调用 reject'));
    });
  } catch {
    throw new Error('出错');
  }
}

main().then(console.log);
// resolve: Promise { '第一次调用' } '调用 resolve'
// reject: Promise { '第一次调用' } Error: 调用 reject
//     at Promise (*)
//     at new Promise (<anonymous>)
//     at main (*)
// 第一次调用