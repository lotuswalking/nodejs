var request = require('request');

var options = {
    url: 'https://www.163.com',
    headers: {
        'User-Agent': 'request'
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(response);
        console.log(body);
        
    }
}

request(options, callback);