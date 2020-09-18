#!/usr/bin/env node

const http = require('http');

let city = process.argv[2] || '石家庄',
    addr = 'http://v.juhe.cn/weather/index?cityname=' + city + '&key=70b20823f67b5f0ca3358b796fd83260';

http.get(global.encodeURI(addr), (res) => {
  let result = '';

  res.on('data', (data) => {
    result += data.toString('utf8');
  });

  res.on('end', () => {
    let weather = JSON.parse(result);

    console.log(weather);
  });
});
