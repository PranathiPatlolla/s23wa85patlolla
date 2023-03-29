var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let x = Math.random() ;
    if (req.query.x != undefined) {
        x = req.query.x;
    }

    res.render('computation', { x:x, cos:Math.cos(x), asin:Math.asin(x), asinh:Math.asinh(x) });
});

module.exports = router;
