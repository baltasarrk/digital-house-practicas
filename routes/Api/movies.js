var express = require('express');
var router = express.Router();
var moviesAPIController = require('../../controllers/api/moviesController.js');

router.get('/', moviesAPIController.list);
router.get('/:id', moviesAPIController.find);

router.post('/', moviesAPIController.store);
router.patch('/update/:id', moviesAPIController.update);
router.delete('/delete/:id', moviesAPIController.delete);


module.exports = router;