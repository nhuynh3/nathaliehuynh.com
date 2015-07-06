var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: "Nathalie Huynh" });
});

router.get('/projects', function(req, res) {
  res.render('projects', { title: "Nathalie Huynh" });
});

module.exports = router;
