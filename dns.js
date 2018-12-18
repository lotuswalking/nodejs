'use restrict'
const { Resolver } = require('dns');
var colors = require( "colors")
const resolver = new Resolver();
resolver.setServers(['114.114.114.114'])
console.log('外部DNS记录如下'.red);
resolver.resolveMx('lenovo.com', (err, addresses) => {
  if (err) throw err;
  addresses.forEach(({exchange, priority}) => { //对象解构，是访问更加便捷
  console.log(`recorder value is:${exchange} and priority is: ${priority}`);
  });
});
resolver.resolveTxt('lenovo.com', (err, addresses) => {
  if (err) throw err;
  // console.log(addresses);
  addresses.forEach((a) => { //对象解构，是访问更加便捷
  console.log(`recorder value is: ${a} `);
  });
});

resolver.resolveAny('mail.lenovo.com', (err, addresses) => {
  if (err) throw err;
  // console.log(addresses);
  // @ts-ignore
  addresses.forEach(({address, ttl, type}) => { //对象解构，是访问更加便捷
  console.log(`recorder value is: ${address}, ttl is:${ttl}, type:${type}`);
  });
});
// resolver.setServers(['10.96.1.18', '10.96.1.19']);
// console.log('内部DNS记录如下'.green);
// resolver.resolveAny('mail.lenovo.com', (err, addresses) => {
//   if (err) throw err;
//   // console.log(addresses);
//   // @ts-ignore
//   addresses.forEach(({address, ttl, type}) => { //对象解构，是访问更加便捷
//   console.log(`recorder value is: ${address}, ttl is:${ttl}, type:${type}`);
//   });
// });