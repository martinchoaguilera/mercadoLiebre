var express = require('express');
var router = express.Router();
let product = require( '../Controllers/productControllers' );

router.get( '/edit/:id', product.edit );

module.exports=router;