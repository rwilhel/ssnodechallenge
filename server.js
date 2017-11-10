const request = require('request');
const async = require('async');

function usdEth() {
  request({
    method: 'GET',
    url: 'https://api.cryptonator.com/api/ticker/usd-eth',
    headers: {
      'Content-Type': 'application/json',
    }}, function(error, response, body) {
      let result = JSON.parse(body);
      let data = result.ticker.price;
      console.log("$20 USD to Ethereum is " + (data*20) + " ETH");
  });
}

function usdDash() {
  request({
    method: 'GET',
    url: 'https://api.cryptonator.com/api/ticker/usd-dash',
    headers: {
      'Content-Type': 'application/json',
    }}, function(error, response, body) {
      let result = JSON.parse(body);
      let data = result.ticker.price;
      console.log("$20 USD to DASH is " + (data*20) + " DASH");
  });
}

function usdLtc() {
  request({
    method: 'GET',
    url: 'https://api.cryptonator.com/api/ticker/usd-ltc',
    headers: {
      'Content-Type': 'application/json',
    }}, function(error, response, body) {
      let result = JSON.parse(body);
      let data = result.ticker.price;
      console.log("$20 USD to LiteCoin is " + (data*20) + " LTC");
  });
}

usdEth();
usdDash();
usdLtc();
