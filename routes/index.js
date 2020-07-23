var express = require('express');
var index = require('../Controllers/ControllersIndex')
var router = express.Router();


/* GET home page. */
router.get('/', index.home);
router.get('/product/:id', index.productoId);
module.exports = router;
