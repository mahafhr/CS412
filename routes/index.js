const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'CS411 - PS3',
    semester: 'Summer 1, 2020'
  });
});

module.exports = router;
