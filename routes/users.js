var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    var arr = {
        id: 1,
        name: 'yao'
    };
    res.send(JSON.stringify(arr));
});
router.get('/userList', function(req, res, next) {
    var arr = [{
            id: 1,
            name: 'yao'
        },
        {
            id: 2,
            name: 'yang'
        }
    ];
    res.send(JSON.stringify(arr));
});
router.post

module.exports = router;