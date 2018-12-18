// @ts-nocheck
const os = require('os');
//console.log(os.networkInterfaces())
const netInters = os.networkInterfaces();
// console.log(netInters);
let interFacees = [];
/* 
这段代码是一个从不规则数据中获取对象数组，源数据格式见文件末尾，由于源数据是一个对象而非对象数组，因此需要用for in方式便利key
然后对于key里面的对象数组使用foreach进行遍历操作
*/
for(let key in netInters) {
  netInters[key].forEach(i => {
    interFacees.push({
      address:i.address,
      netmask:i.netmask,
      mac:i.mac,
      family:i.family,
      scopeid:i.scopeid,
      cidr:i.cidr,
      internal:i.internal,
    });
  });
}
interFacees.forEach(i => {
  if(i.family === 'IPv4' && i.internal === false)
  {
    console.log(i);
  }
});
// console.log(interFacees);
/*源数据格式
{ 'WLAN 2':
  [ { address: 'fe80::c1e1:9607:82ac:1f0b',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '18:1d:ea:17:14:de',
      scopeid: 8,
      internal: false,
      cidr: 'fe80::c1e1:9607:82ac:1f0b/64' },
    { address: '10.112.87.232',
      netmask: '255.255.128.0',
      family: 'IPv4',
      mac: '18:1d:ea:17:14:de',
      internal: false,
      cidr: '10.112.87.232/17' } ],
 'Loopback Pseudo-Interface 1':
  [ { address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      scopeid: 0,
      internal: true,
      cidr: '::1/128' },
    { address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8' } ] } 
 */