var Twitter = require('twitter');
var Q  = require('q');


var client = new Twitter({
  consumer_key: 'TujzccgLW9fc5EehLrkkkZwLD',
  consumer_secret: 'nSc0ZWLZkTrxr9hepGpEvkdb2smSjDqdmEfEGDRdLgDqyWuOQx',
  access_token_key: '187219501-CVWw8rfduzmb7W2bQngtXhXP86aGZfJyPJ5Dod09',
  access_token_secret: 'kWdAzjzm5nZdQR7NvXVJY3kpfuMOVRwp3BfBBHUppQu3V'
});

var count = 25;


exports.fetchTweets = function(req, res, username, callback){
    var params = {screen_name: "nodejs", count: count}
    console.log("USERNAME PARAMS" , username);
    client.get('statuses/user_timeline', params, function(error, tweets, res){
        if(error){
            console.error(error);
        } else if (tweets.length === 0){
            console.log("there are not matches for that user");
        } else {
//            console.log("tweets :: ", tweets);
            callback(tweets);
//            console.log("USER ON INDEX 0" , tweets[0].user.name);

        }

    });
}


