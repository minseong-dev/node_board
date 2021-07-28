var express = require('express');
var router = express.Router();

const boardRoute = require('./boardRoute')

router.use('/', boardRoute)

module.exports = router;