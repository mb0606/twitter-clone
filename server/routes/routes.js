var controllers =
require('../controller/appController.js');
var router = require('express').Router();
console.log("You hit routes ")
for(var route in  controllers) {
  router.route('/' + route)
  .get(controllers[route].get)
//  .post(controllers[route].post)

  ;
}

module.exports = router;
