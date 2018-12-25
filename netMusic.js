var request = require('request');
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
};
var cookie = {
	MUSIC_U :'4107490924464e6fb1a905c0894c8abf5ad7bfae54577152e5d50d67bf34b4d19c294f1fa22a7671889ec109f3edd3223041397c2f9d6820f2f513a9c38b5dc7',
	__remember_me :'true',
	__csrf : '77d911568a2177e3e33a89d255bd0efd',
	os : 'uwp',
	osver : '10.0.17134.376',
	appver : '1.4.1',
	deviceId : '400467cc6b1f388e4d4209fa01905cd7',
};
var headers = {
  Cookie: 'MUSIC_U=4107490924464e6fb1a905c0894c8abf5ad7bfae54577152e5d50d67bf34b4d19c294f1fa22a7671889ec109f3edd3223041397c2f9d6820f2f513a9c38b5dc7; __remember_me=true; __csrf=77d911568a2177e3e33a89d255bd0efd; os=uwp; osver=10.0.17134.376; appver=1.4.1; deviceId=400467cc6b1f388e4d4209fa01905cd7',
  Connection: 'Keep-Alive',
  Pragma: 'no-cache',
  'Accept-Encoding': 'gzip, deflate', 
  'Content-Type': 'application/x-www-form-urlencoded',
};
// request.post({url:'http://music.163.com/eapi/pl/count', headers: headers, cookie: cookie}, (err, res, body) => {
//   // console.log(body);
//   if (!err && res.statusCode == 200) {
//     console.log(res);
//     // console.log(body);
   
//   }    
// });
// 李俊良:
request({
            url: 'http://music.163.com/eapi/pl/count',
            method: 'post',
            headers: {
                'Host': 'music.163.com',
                'Connection': 'keep-alive',
                // 'Content-Length': 416,
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache',
                'Origin': 'https://music.163.com',
                'User-Agent': 'Mozilla / 5.0(Macintosh; Intel Mac OS X 10_14_1) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 66.0.3359.139 Safari / 537.36',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': '*/*',
                'Referer': 'https://music.163.com/msg/',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
                'Cookie': 'vjuids=90d1e24e5.13eb592a9c8.0.0c83ef2d; header_iphone_servtips_2207265=1; vjlast=1368845888.1479030387.22; mail_psc_fingerprint=2266615584; _ntes_nnid=3d4eaec7bbd8b4be47acf8c0b1c1db9d,1515912188676; _ntes_nuid=3d4eaec7bbd8b4be47acf8c0b1c1db9d; _ngd_tid=xY3nkbY%2Fk0MPtjgX4EtEY6vqpE4GSPYW; __utma=187553192.618826353.1516415929.1516415929.1516415929.1; _iuqxldmzr_=32; nts_mail_user=junguoliang@163.com:-1:1; P_INFO=junguoliang@163.com|1531646242|0|mail163|11&19|zhj&1527594545&mail163#nmg&null#10#0#0|153919&0||junguoliang@163.com; JSESSIONID-WYYY=T7cNXzQilB%5CvnrEARDT%2BHMJT0xyNZUC2sinvGxqqTBMGrcve4iymkKEzZTuyMx3%5C%5CGRzWlEiDUMBimogbtyfJyluUo32PKl2iCbZ73ou7X2v5uVSOx27tD2S18Zn07B8d%2F%2B4XbC6YFS5tO%2Ba7Sv1Xf3aa%2FSnaRwsBS6idXgw42aTWwfA%3A1545375287986; __utma=94650624.1403297046.1545373489.1545373489.1545373489.1; __utmc=94650624; __utmz=94650624.1545373489.1.1.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; WM_NI=ghLSb%2BNmZfrWSP5i6kD2Hkam6zPoGOiA6hSfwGOFUj3umMTjC3pEco1BrcKpbGxAyiMniuomIVhIMGHYktdHd7LBUrRIGrFVmBQLgrpaKKgC94fm1m9yiHuMHwT8kgREc0Q%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6eebaca49b69bc08cc94790a88ea3c45e839e8ebbbb6eb788f9b0b44a95b8f9a3b62af0fea7c3b92aa5b884b4e1218eb39687f15d9190fb8ab56188ee888ce467f6a6a090c645ab9ffa89d26eb59981a7d862f1aba3aed76281edc0a6e265f39ebe84ca7ca299b8a2fc638fb2a796ee678b8aa8aad04d8c87a595e744a8e984a3d87a92978993c55eaf9e9fade67ab4bf85ace649fbecaa8eb467fba7a7a9f8478ca99cd9ea6d929badd1d437e2a3; WM_TID=1BvpwpXq76xEEFFBFBMoLrT6KlQC06B6; c98xpt_=30; __remember_me=true; jsessionid-cpta=5k6BlmUt78li6p6%5Cnj8VTZHegB0gym4djNGGuyYKtHjhZnKvkZ5QrQSG%5CvKfmnffWSPpTVC5Iy3rqJFgZgWTcFJ%2BhT3mP6X%5CAdBp7u8%5C%5Clr%2Bw99fjW%2Fik%2BS5lqPOG9wTMFpLGZ6CqSOpq5d731CN14HeikVDRK8E0%2BvqLn0oqhUjabQc%3A1545375364449; MUSIC_U=7ef4989b47275c9bed38c8c832a9f697dbdf13d697286f6fd49b546d8aab57593486a47b95aeff1106b80a4b125634ca31b299d667364ed3; __csrf=aabff669cc20ec0b9b691f17d53f426d; __utmb=94650624.14.10.1545373489',
            },
            form: {
                'params': 'FC6S9kibCQ2ik2+/QkqoJDYBVS+M7ZhJ36RImopPzryd/oYeZ7xMmSfdG9fA1QIfLCqPgaf/3nt50t4JISMsuvoV+awmP1gemSzfcyR8xAQdqytuhYSUAvpby+T7aHjM',
                'encSecKey': '16ddc21e4291fa2676149067901d23ba20c49ee3d8ae9949a069d9b09a0a4fee3be80b52fa6363683da0df9c7a9e7f094097b215ebc94a00225894f31b18f27d3dda4b5871272e9cb6952defcb3f7f27e3563eb6c51fe92e8d07613e11a1de6602c7888b0682a637a75e2d9f63645a532e9c123c3a0a109a45b84fc22b3b5cc3',
            },
            gzip: true,
        }, (err, res, body) => {
            if(err) {
                return console.log(err);
            }

            console.log(body);
        })

