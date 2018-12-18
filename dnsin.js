'use restrict'
const { Resolver } = require('dns');
var colors = require( "colors")
const resolver = new Resolver();
// resolver.setServers(['114.114.114.114'])
console.log('外部DNS记录如下'.red);
const records = new Array('cnlyncowa.lenovo.com',
'aplyncowa.lenovo.com',
'aelyncowa.lenovo.com',
'cnfepl02.lenovo.com',
'aefepl01.lenovo.com',
'internalwebem.lenovo.com'
);

resolver.resolveMx('lenovo.com', (err, addresses) => {
  if (err) {
    console.log(`${err}`);
    return;
  }
  addresses.forEach(({exchange, priority}) => { //对象解构，是访问更加便捷
  console.log(`recorder value is:${exchange} and priority is: ${priority}`);
  });
});
records.forEach(record => {
  resolver.resolveAny(record, (err, addresses) => {
    if (err) throw err;
    // console.log(addresses);
    // @ts-ignore
    addresses.forEach(({address, ttl, type}) => { //对象解构，是访问更加便捷
    console.log(`${record} = ${address}, ttl is:${ttl}, type:${type}`);
    });
  });
});
