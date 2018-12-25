//推荐使用npm安装使用sdk', npm install --save showapi-sdk
'use strict';
let myObject = {
 
    showapi_appid: '83511',
    showapi_sign:'9032ebd8eed85f3fd6a84fd4df6e5b28',
    // secret: '1e6ac22a262444c4a6dc9c106506a675',
    // timeout: 5000,
    // testParam: 'test',
    from: '5',
    lng: '116.2278',
    lat: '40.242266',
    needMoreDay: '0',
    needIndex: '0',
    needHourData: '0',
    need3HourForcast: '0',
    needAlarm: '0',
  };

var request = require('request');

request.post({url:'http://route.showapi.com/9-5', form:myObject }, (err, res, body) => {
  if (!err && res.statusCode == 200) {
    const result = JSON.parse(body);
    console.log(result.showapi_res_error);
    console.log(result.showapi_res_code);
    // 
    console.log(body);
  }    
});
request.get('https://lyncnetchk.lenovo.com/api/LyncDiagnosisTool/GetVersionConfig',{timeout: 1500}, (err, res, body) => {
console.log(body);  
const result = JSON.parse(body);
console.log(`DetectionVersion = ${result.DetectionVersion}`);
console.log(`AutoUpdateVersion = ${result.AutoUpdateVersion}`);
console.log(`Jitter_PingGateway = ${result.Jitter_PingGateway}`);
console.log(`PacketLoss = ${result.PacketLoss}`);
console.log(`LossCount = ${result.LossCount}`);
console.log(`Roundtrip_GateWay = ${result.Roundtrip_GateWay}`);
if (!err) {
    // const result = JSON.parse(res);
    // console.log(result.showapi_res_error);
    // console.log(result.showapi_res_code);
    // 
    // console.log(result);
  }    
});