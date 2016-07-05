(function() {
  'use strict'

  angular
  .module('tweetApp.services', [])
    .factory("Welcome", Welcome)


    function Welcome($http) {
      var service = {
        getTweetsByUser:getTweetsByUser

      };

      function getTweetsByUser(username){
        console.log("line 17 : services getTweets", username)

        return $http ({
          method:'GET',
          url:'/api/tweets/' + username,
        })
        .then(function(res){
          return res.data
        })
        .catch(function(err){
          console.log("line 27: Services ", err)
        })
      }

      return service;
    }

})();
