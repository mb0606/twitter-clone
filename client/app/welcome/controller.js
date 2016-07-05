(function() {
  'use strict'

  angular
  .module('tweetApp.welcome', [])
    .controller("WelcomeController", WelcomeController);

    function WelcomeController(Welcome, $state) {

      var vm = this;
      vm.username = "";
      vm.tweets = {};


      vm.getTweets = function(username) {
          console.log("line 16 Welcome controller", username)
        Welcome.getTweetsByUser(username).then(function (tweets) {
          console.log('this is data', tweets);
            console.log(tweets)
          vm.tweets = tweets;
        })
      }



    }


})();
