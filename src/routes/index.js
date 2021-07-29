var express = require('express');
var router = express.Router();

const boardRoute = require('./boardRoute')

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

router.use('/board', boardRoute)

module.exports = router;