(function() {
  'use strict'

  angular
  .module('tweetApp.welcome', [])
    .controller("WelcomeController", WelcomeController);

    function WelcomeController(Welcome, $state) {

      var vm = this;
      vm.username = "";
      vm.tweets = {};
      vm.userInfo = {}


    vm.upVote = function(tweet) {
        console.log(tweet)
        tweet.vote++;
        console.log(tweet.vote)

    }

    vm.downVote = function (tweet) {
       tweet.vote--;
    }




      vm.getTweets = function(username) {
          console.log("line 16 Welcome controller", username)
        vm.tweets = {};
        vm.message = ""
        vm.userInfo = {}
        Welcome.getTweetsByUser(username).then(function (tweets) {
          console.log('this is data', tweets);
          console.log(tweets)
          vm.tweets = tweets;
          vm.userInfo = {
              name: tweets[0].user.name,
              image: tweets[0].user.profile_background_image_url,
              follows: tweets[0].user.followers_count,
              friends: tweets[0].user.friends_count
          }
          vm.username = ""
        }).catch(function(err){
            vm.message = "That user doesn't exist. Please enter a valid username !!"
        })
      }

    }


})();
