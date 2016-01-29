/*
@deploy
@title Artisan Center Theatre Scraper
@output
{
  "content-type" : "application/json"
}
@cache 0
*/

// https://taskmill.io/christiangenco/theatrescrapers/blob/master/artisanct.com.js

var rp  = require('request-promise'),
Promise = require('bluebird'),
_       = require('underscore'),
// artoo   = require('artoo-js'),
cheerio = require('cheerio');

// artoo.bootstrap(cheerio);

var data = $('ul > li').scrape(params);

var url = "http://artisanct.com/";

module.exports = function(req, res, next) {
  rp.get(url)
  .then(function(data){
    return cheerio.load(data);
  }).then(function($){
    var titles = $('.event-title a'); //.scrape();
    res.send(titles);
    // Promise
    // .resolve(post.kids)
    // .map(function(i){
    // return rp
    // .get('https://hacker-news.firebaseio.com/v0/item/' + i + '.json')
    // .then(function(data){ return JSON.parse(data); })
    // .then(function(comment){
    // return _.pick(comment, 'by', 'id', 'text', 'time');
    // })
    // ;
    // }, { concurrency : 30 })
    // .then(function(jobs){
    // var cache_for = Math.floor(math.eval('60 + (x / 60) + (x / (60 * 60 * 24)) ^ e', { x : post_age }));
    // res.send(jobs);
    // });
  }).catch(function(err){
    next(err);
  });
};
