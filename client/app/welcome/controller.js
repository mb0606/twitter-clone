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
        vm.tweets = {};
        vm.message = ""
        Welcome.getTweetsByUser(username).then(function (tweets) {
          console.log('this is data', tweets);
          console.log(tweets)
          vm.tweets = tweets;
          vm.username = ""
        }).catch(function(err){
            vm.message = "That user doesn't exist. Please enter a valid username !!"
        })
      }

    }


})();
