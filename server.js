const request = require('request');

request({
  method: 'GET',
  url: 'https://api.cryptonator.com/api/ticker/usd-eth',
  headers: {
    'Content-Type': 'application/json',
  }}, function(error, response, body) {
    let result = JSON.parse(body);
    let data = result.ticker.price;
    console.log(data*20);
  // }}, function (error, response, body) {
  // console.log('Status:', response.statusCode);
  // console.log('Headers:', JSON.stringify(response.headers));
  // console.log('Response:', body[0]);
});
