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

    vm.initHash= function() {
        vm.hashes = ""
    }
    vm.initVote = function(tweet){
           tweet.vote = 0;
    }
    vm.upVote = function(tweet) {
        if(!tweet.vote){
            tweet.vote = 0;
        }
        console.log(tweet)
        tweet.vote++;
        console.log(tweet.vote)

    }

    vm.downVote = function (tweet) {
        if(!tweet.vote){
            tweet.vote = 0;
        }
       tweet.vote--;
    }

    vm.setHashtag = function (hash){
        vm.hashes = ""
        vm.hashes = hash
    }
    vm.clearHash = function(){
        vm.hashes = "";
    }

    vm.emptyOrNull = function(hashTag){
    return hashTag.length !== 0
    }
      vm.getTweets = function(username) {
          console.log("line 16 Welcome controller", username)
        vm.tweets = {};
        vm.message = "";
        vm.hashes = "";
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
