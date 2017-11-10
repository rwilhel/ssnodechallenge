const REQUEST = require('request');

function usdEth() {
  REQUEST({
    method: 'GET',
    url: 'https://api.cryptonator.com/api/ticker/usd-eth',
    headers: {
      'Content-Type': 'application/json',
    }}, function(error, response, body) {
      let result = JSON.parse(body);
      dataEth = result.ticker.price;
      console.log('$20 USD to Ethereum is ' + (dataEth * 20) + ' ETH');
  });
}

function usdDash() {
  REQUEST({
    method: 'GET',
    url: 'https://api.cryptonator.com/api/ticker/usd-dash',
    headers: {
      'Content-Type': 'application/json',
    }}, function(error, response, body) {
      let result = JSON.parse(body);
      let dataDash = result.ticker.price;
      console.log('$20 USD to DASH is ' + (dataDash * 20) + ' DASH');
  });
}

function usdLtc() {
  REQUEST({
    method: 'GET',
    url: 'https://api.cryptonator.com/api/ticker/usd-ltc',
    headers: {
      'Content-Type': 'application/json',
    }}, function(error, response, body) {
      let result = JSON.parse(body);
      let dataLtc = result.ticker.price;
      console.log('$20 USD to LiteCoin is ' + (dataLtc * 20) + ' LTC');
  });
}

usdEth();
usdDash();
usdLtc();
