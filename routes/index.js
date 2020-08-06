var express = require('express');
var router = express.Router();


const apiv1Router = require('./version/apiV1');

/* GET home page. */
router.use('/apiV1', apiv1Router);

module.exports = router;
