var express = require('express');
var router = express.Router();
router.get('/productList', function(req, res, next) {
    var productList = [{
        id: '1',
        title: '男士2019工装外套秋季胖子夹克大码宽松百搭',
        price: '128',
        old_price: '688.99',
        pay_num: '840',
        imgSrc: 'http://localhost:3000/images/shop_1.jpg'
    }, {
        id: '2',
        title: '飞天茅台酒国产白酒43度500ml酱香型白酒',
        price: '838',
        old_price: '998',
        pay_num: '4370',
        imgSrc: 'http://localhost:3000/images/shop_2.jpg'
    }, {
        id: '3',
        title: '外套男春秋季2019新款韩版潮流工装',
        price: '118',
        old_price: '338',
        pay_num: '24617',
        imgSrc: 'http://localhost:3000/images/shop_3.jpg'
    }, {
        id: '4',
        title: '5.0蓝牙耳机运动跑步无线双耳入耳塞头戴',
        price: '79',
        old_price: '199',
        pay_num: '23651',
        imgSrc: 'http://localhost:3000/images/shop_4.jpg'
    }];
    res.end(JSON.stringify(productList));
});
router.get('/productDetail', function(req, res, next) {
    var productList = {
        id: '1',
        title: '男士2019工装外套秋季胖子夹克大码宽松百搭',
        price: '128',
        old_price: '688.99',
        pay_num: '840',
        imgSrc: 'http://localhost:3000/images/shop_1.jpg'
    }
    res.end(JSON.stringify(productList));
});
router.post('/cart', function(req, res, next) {
    var shop = req.body.shop;
    res.end(JSON.stringify(shop));
});
module.exports = router;