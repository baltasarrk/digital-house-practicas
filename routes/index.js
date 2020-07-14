var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/colores', function(req, res, next) {
  res.render('index', { title: 'Express',
  accept_cookies : req.cookies.accept_cookies == "true"}
)});

router.get('/colores', function(req, res, next){
  //req.session.color = req.query.color
  res.render('EjercioSessionColor');
});

module.exports = router;
