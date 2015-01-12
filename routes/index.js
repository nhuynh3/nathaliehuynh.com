var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: "Nathalie Huynh" });
});

router.get('/resume', function(req, res) {
  res.render('resume')
});

/* GET userlist page. */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{}, function(e, docs) {
    res.render('userlist', {
      "userlist" : docs
    });
  });
});

/* GET new user page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', {title: 'Add New User'});
});

/* POST to add user service. */
router.post('/adduser', function(req,res) {
  var db = req.db;

  var userName = req.body.username;
  var userEmail = req.body.useremail;

  var collection = db.get('usercollection');

  collection.insert({
    "username" : userName,
    "email" : userEmail
  }, function (err, doc) {
    if (err) {
      res.send("There was a problem adding the info to the database");
    }
    else {
      res.location("userlist");
      res.redirect("userlist");
    } 
  });
});

module.exports = router;
