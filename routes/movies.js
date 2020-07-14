var express = require('express');
var router = express.Router();
var moviesController = require("../controllers/moviesController");

/* GET users listing. */
router.get('/', moviesController.list);
router.get('/detail/=id?', moviesController.detail);
router.get('/new', moviesController.new);
router.get('/recommended', moviesController.top);
router.post('/search', moviesController.search);


module.exports = router;
