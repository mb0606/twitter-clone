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
            console.log("this is data line 23 Services")
          return res.data
        })
        .catch(function(err){
            console.log("line 27 err in Services",err);
          return res.err
        })
      }

      return service;
    }

})();
