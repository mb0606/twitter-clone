var Twitter = require('twitter');
//var keys  = require('./keys.js');

console.log("helpers", keys);
//
//var client = new Twitter({
//  consumer_key:  process.env.consumer_key ||  keys.consumer_key,
//  consumer_secret: process.env.consumer_secret || keys.consumer_secret,
//  access_token_key:  process.env.access_token_key || keys.access_token_key,
//  access_token_secret: process.env.access_token_secret || keys.access_token_secret
//});



var client = new Twitter({
  consumer_key:  process.env.consumer_key,
  consumer_secret: process.env.consumer_secret ,
  access_token_key:  process.env.access_token_key ,
  access_token_secret: process.env.access_token_secret
});


var count = 25;


exports.fetchTweets = function(req, res, username, callback){
    var params = {screen_name: username, count: count}
    console.log("USERNAME PARAMS" , username);
    client.get('statuses/user_timeline', params, function(error, tweets, res){
        if(error){
            callback(error);
        } else {
//           console.log("tweets :: ", tweets);
            callback(null, tweets);
//            console.log("USER ON INDEX 0" , tweets[0].user.name);
        }

    });
}


