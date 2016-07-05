var helper = require('../helpers/twitter.js')



module.exports = {
  'tweets/:username': {
    get: function(req, res){
        console.log('Controller  get Tweets');
         helper.fetchTweets(req, res, req.params.username, function(err , data){
             console.log("Data coming in callback", data);
             res.send(data);
         });
        }
    }
}




















