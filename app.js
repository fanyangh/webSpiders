let express = require('express');
let request = require('request');
let cheerio = require('cheerio');

// import express from 'express'
// import request from 'request'
// import cheerio from 'cheerio'
let app = express();
let spidersUrl = 'http://www.jd.com';
app.get('/', function(req, res) {
 
  request(spidersUrl, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      $ = cheerio.load(body);
      res.json({
          cat: $('.cate_menu_item').length
      });
    }
  })
});

var server = app.listen(3000, function() {
  console.log('listening at 3000');
});