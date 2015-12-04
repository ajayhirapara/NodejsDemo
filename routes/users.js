var express = require('express');
var router = express.Router();
var user = require('../modules/users');

/* GET users listing. */
// www.domain.com/users/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// users/register
router.get('/register', function(req, res, next) {

	res.render('register');
});


router.post('/register' , function(req , res , next) {
	  var username = req.body.username;
	  var password = req.body.password;
	 
	 var u = new user({
		username : username,
		password : password
	 });
	 
	 u.save(function(err, u1){
		if(err) {
			res.send(err);
		} else {
			res.send(u1);
		}
	 });
});

module.exports = router;
